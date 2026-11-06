/**
 * Measures what each icon library costs an Angular application and writes the
 * result to packages/ngx-fast-svg-docs/content/data/bundle-stats.json, which
 * the docs build turns into the table on the comparison page.
 *
 *   node tools/bundle-stats/measure.mts            # rewrite the JSON
 *   node tools/bundle-stats/measure.mts --check    # fail if the JSON is stale
 *
 * Method: tools/bundle-stats/fixtures holds one minimal Angular application
 * per library plus a baseline that uses no icon library at all. All of them
 * bootstrap the same COMMON_PROVIDERS and render the same 21 icons. Each one
 * is built with identical production settings, and a library's cost is its
 * build minus the baseline build. Nothing is attributed by guessing which
 * chunk belongs to whom, so shared code and root providers cannot distort the
 * numbers the way they do when you measure lazy chunks inside one big app.
 */
import { spawnSync } from 'node:child_process';
import { gzipSync } from 'node:zlib';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

interface Library {
  id: string;
  name: string;
  pkg: string;
  /** True when icons are JavaScript the bundle has to carry, not files fetched at runtime. */
  iconsInJs: boolean;
}

interface Measurement {
  initialBytes: number;
  initialGzipBytes: number;
  totalBytes: number;
}

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const outFile = join(
  repoRoot,
  'packages',
  'ngx-fast-svg-docs',
  'content',
  'data',
  'bundle-stats.json'
);

/** Order here is the order of the rows in the generated table. */
const LIBRARIES: Library[] = [
  { id: 'fast-svg', name: 'ngx-fast-svg', pkg: '@push-based/ngx-fast-svg', iconsInJs: false },
  { id: 'angular', name: 'angular-svg-icon', pkg: 'angular-svg-icon', iconsInJs: false },
  { id: 'material', name: 'Angular Material', pkg: '@angular/material', iconsInJs: false },
  { id: 'ant', name: 'Ant Design', pkg: '@ant-design/icons-angular', iconsInJs: true },
  {
    id: 'font-awesome',
    name: 'Font Awesome',
    pkg: '@fortawesome/angular-fontawesome',
    iconsInJs: true,
  },
  { id: 'ionic', name: 'Ionic', pkg: '@ionic/angular', iconsInJs: false },
];

const BASELINE_ID = 'baseline';

function packageVersion(pkg: string): string {
  if (pkg === '@push-based/ngx-fast-svg') {
    // Built from source in this repo, not installed. Using the released
    // version here would make every release commit invalidate the stats.
    return 'workspace';
  }
  const manifest = join(repoRoot, 'node_modules', ...pkg.split('/'), 'package.json');
  return JSON.parse(readFileSync(manifest, 'utf8')).version as string;
}

function build(id: string): void {
  const result = spawnSync('npx', ['nx', 'run', `bundle-stats:build-fixture:${id}`], {
    cwd: repoRoot,
    stdio: ['ignore', 'pipe', 'inherit'],
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    process.stderr.write(result.stdout ?? '');
    throw new Error(`Fixture "${id}" failed to build.`);
  }
}

/**
 * Initial JavaScript is everything index.html makes the browser fetch before
 * the app runs; total is every .js file the build emitted, which also counts
 * chunks a library loads on demand (Ionic ships its components that way).
 */
function measure(id: string): Measurement {
  const dir = join(repoRoot, 'dist', 'bundle-stats', id, 'browser');
  const html = readFileSync(join(dir, 'index.html'), 'utf8');

  const initial = new Set<string>();
  for (const match of html.matchAll(/<script[^>]+src="([^"]+\.js)"/g)) {
    initial.add(match[1]);
  }
  for (const match of html.matchAll(/<link[^>]+rel="modulepreload"[^>]+href="([^"]+\.js)"/g)) {
    initial.add(match[1]);
  }
  if (initial.size === 0) {
    throw new Error(`No scripts found in ${id}/browser/index.html — did the build change?`);
  }

  let initialBytes = 0;
  let initialGzipBytes = 0;
  for (const file of [...initial].sort()) {
    const contents = readFileSync(join(dir, file));
    initialBytes += contents.byteLength;
    // Fixed level so the number only moves when the bundle does.
    initialGzipBytes += gzipSync(contents, { level: 9 }).byteLength;
  }

  let totalBytes = 0;
  for (const file of readdirSync(dir)) {
    if (file.endsWith('.js')) {
      totalBytes += statSync(join(dir, file)).size;
    }
  }

  return { initialBytes, initialGzipBytes, totalBytes };
}

function collect(): unknown {
  const ids = [BASELINE_ID, ...LIBRARIES.map((l) => l.id)];
  const measurements = new Map<string, Measurement>();
  for (const id of ids) {
    process.stdout.write(`  building ${id}\n`);
    build(id);
    measurements.set(id, measure(id));
  }

  const measurementFor = (id: string): Measurement => {
    const measured = measurements.get(id);
    if (!measured) {
      throw new Error(`No measurement for fixture "${id}".`);
    }
    return measured;
  };

  const baseline = measurementFor(BASELINE_ID);

  return {
    $comment:
      'Generated by `npm run bundle-stats`. Do not edit by hand — CI rebuilds the fixtures ' +
      'in tools/bundle-stats and fails the pull request when any number here is out of date.',
    angular: packageVersion('@angular/core'),
    baseline: {
      initialBytes: baseline.initialBytes,
      initialGzipBytes: baseline.initialGzipBytes,
    },
    libraries: LIBRARIES.map((library) => {
      const measured = measurementFor(library.id);
      return {
        id: library.id,
        name: library.name,
        package: library.pkg,
        version: packageVersion(library.pkg),
        iconsInJs: library.iconsInJs,
        initialBytes: measured.initialBytes - baseline.initialBytes,
        initialGzipBytes: measured.initialGzipBytes - baseline.initialGzipBytes,
        lazyBytes: measured.totalBytes - measured.initialBytes,
      };
    }),
  };
}

const check = process.argv.includes('--check');
const serialized = JSON.stringify(collect(), null, 2) + '\n';

if (!check) {
  writeFileSync(outFile, serialized);
  console.log(`bundle-stats: wrote ${outFile}`);
  process.exit(0);
}

let committed: string;
try {
  committed = readFileSync(outFile, 'utf8');
} catch {
  console.error(
    `bundle-stats: ${outFile} is missing.\n` + 'Run `npm run bundle-stats` and commit the result.'
  );
  process.exit(1);
}

if (committed === serialized) {
  console.log('bundle-stats: committed numbers match a fresh build.');
  process.exit(0);
}

console.error('bundle-stats: the committed numbers are out of date.\n');
const was = committed.split('\n');
const now = serialized.split('\n');
for (let i = 0; i < Math.max(was.length, now.length); i++) {
  if (was[i] !== now[i]) {
    if (was[i] !== undefined) console.error(`  -${was[i]}`);
    if (now[i] !== undefined) console.error(`  +${now[i]}`);
  }
}
console.error('\nRun `npm run bundle-stats` and commit the result.');
process.exit(1);
