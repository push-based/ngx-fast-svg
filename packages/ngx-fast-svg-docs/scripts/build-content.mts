/**
 * Renders content/docs/*.md and content/snippets/* into TypeScript modules
 * under src/app/content/generated. Runs before build and serve (see
 * project.json). Markdown is parsed with marked; code is highlighted with
 * shiki at build time, so the browser ships no parser or grammar.
 */
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Marked } from 'marked';
import { createHighlighter } from 'shiki';

interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

interface FrontMatter {
  title: string;
  description: string;
  order: number;
  /** Optional path (relative to the .md file) whose contents replace the body. */
  source?: string;
}

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(packageRoot, 'content');
const outDir = join(packageRoot, 'src', 'app', 'content', 'generated');

/* Both themes are emitted as light-dark() colors; the page's color-scheme picks one. */
const THEMES = { light: 'github-light', dark: 'github-dark' } as const;
const LANGS = ['typescript', 'html', 'bash', 'json', 'css', 'text'] as const;
const LANG_ALIASES: Record<string, (typeof LANGS)[number]> = {
  ts: 'typescript',
  typescript: 'typescript',
  html: 'html',
  angular: 'html',
  bash: 'bash',
  sh: 'bash',
  shell: 'bash',
  json: 'json',
  css: 'css',
};

const highlighter = await createHighlighter({
  themes: Object.values(THEMES),
  langs: [...LANGS],
});

function highlight(code: string, lang?: string): string {
  const resolved = LANG_ALIASES[(lang ?? '').trim().toLowerCase()] ?? 'text';
  return highlighter.codeToHtml(code, {
    lang: resolved,
    themes: THEMES,
    defaultColor: 'light-dark()',
  });
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function parseFrontMatter(raw: string, file: string): { meta: FrontMatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    throw new Error(`${file}: missing front matter`);
  }
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx > 0) {
      data[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
  }
  if (!data['title']) {
    throw new Error(`${file}: front matter needs a title`);
  }
  return {
    meta: {
      title: data['title'],
      description: data['description'] ?? '',
      order: Number(data['order'] ?? 999),
      source: data['source'],
    },
    body: raw.slice(match[0].length),
  };
}

let toc: TocEntry[] = [];
let usedIds = new Set<string>();

/** Keeps heading ids unique within one page (e.g. repeated "Bug Fixes" sections). */
function uniqueId(base: string): string {
  let id = base || 'section';
  for (let n = 2; usedIds.has(id); n++) {
    id = `${base}-${n}`;
  }
  usedIds.add(id);
  return id;
}

const marked = new Marked({
  gfm: true,
  renderer: {
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens);
      const plain = this.parser.parseInline(tokens, this.parser.textRenderer);
      const id = uniqueId(slugify(plain));
      if (depth === 2 || depth === 3) {
        toc.push({ id, text: plain, level: depth });
      }
      return `<h${depth} id="${id}">${html}</h${depth}>\n`;
    },
    code({ text, lang }) {
      return highlight(text, lang) + '\n';
    },
  },
});

async function buildDocs(): Promise<string[]> {
  const docsDir = join(contentDir, 'docs');
  const files = (await readdir(docsDir)).filter((f) => f.endsWith('.md')).sort();
  const index: { slug: string; title: string; description: string; order: number }[] = [];

  await mkdir(join(outDir, 'docs'), { recursive: true });

  for (const file of files) {
    const path = join(docsDir, file);
    const slug = basename(file, '.md');
    const { meta, body: ownBody } = parseFrontMatter(await readFile(path, 'utf8'), file);
    let body = ownBody;
    if (meta.source) {
      const sourceText = await readFile(resolve(docsDir, meta.source), 'utf8');
      // The source is a standalone document with its own H1. Drop that H1 and
      // move every other heading one level down so the page has one title.
      body =
        ownBody +
        '\n' +
        sourceText
          .replace(/^#\s[^\n]*\n/, '')
          .replace(/^##\s/gm, '### ')
          .replace(/^#\s/gm, '## ');
    }

    toc = [];
    usedIds = new Set();
    const lead = meta.description ? `<p class="lead">${meta.description}</p>\n\n` : '';
    const html = await marked.parse(`# ${meta.title}\n\n${lead}${body}`);
    const page = {
      slug,
      title: meta.title,
      description: meta.description,
      order: meta.order,
      html,
      toc,
    };

    await writeFile(
      join(outDir, 'docs', `${slug}.ts`),
      `// Generated by scripts/build-content.mts from content/docs/${file}. Do not edit.\n` +
        `import type { DocPage } from '../../content.model';\n\n` +
        `export const page: DocPage = ${JSON.stringify(page, null, 2)};\n`
    );
    index.push({ slug, title: meta.title, description: meta.description, order: meta.order });
  }

  index.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

  await writeFile(
    join(outDir, 'docs-index.ts'),
    `// Generated by scripts/build-content.mts. Do not edit.\n` +
      `import type { DocPageEntry } from '../content.model';\n\n` +
      `export const DOCS_INDEX: DocPageEntry[] = [\n` +
      index
        .map(
          (e) =>
            `  {\n    slug: ${JSON.stringify(e.slug)},\n    title: ${JSON.stringify(e.title)},\n` +
            `    description: ${JSON.stringify(e.description)},\n    order: ${e.order},\n` +
            `    load: () => import('./docs/${e.slug}').then((m) => m.page),\n  },`
        )
        .join('\n') +
      `\n];\n`
  );

  return index.map((e) => e.slug);
}

async function buildSnippets(): Promise<string[]> {
  const snippetsDir = join(contentDir, 'snippets');
  let files: string[] = [];
  try {
    files = (await readdir(snippetsDir)).sort();
  } catch {
    files = [];
  }

  const entries: [string, string][] = [];
  for (const file of files) {
    const code = (await readFile(join(snippetsDir, file), 'utf8')).replace(/\s+$/, '');
    entries.push([file, highlight(code, extname(file).slice(1))]);
  }

  const names = entries.map(([name]) => JSON.stringify(name));
  await writeFile(
    join(outDir, 'snippets.ts'),
    `// Generated by scripts/build-content.mts from content/snippets. Do not edit.\n\n` +
      `export type SnippetName = ${names.length ? names.join(' | ') : 'never'};\n\n` +
      `export const SNIPPETS: Record<SnippetName, string> = {\n` +
      entries.map(([name, html]) => `  ${JSON.stringify(name)}: ${JSON.stringify(html)},`).join('\n') +
      `\n};\n`
  );

  return entries.map(([name]) => name);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
const docs = await buildDocs();
const snippets = await buildSnippets();
console.log(`build-content: ${docs.length} docs page(s), ${snippets.length} snippet(s) -> ${outDir}`);
