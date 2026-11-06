# bundle-stats

Measures what each icon library costs an Angular application, and keeps the
comparison page honest about it.

```bash
npm run bundle-stats         # rebuild the numbers and rewrite the JSON
npm run bundle-stats:check   # rebuild and fail if the committed JSON is stale
```

The output lands in
`packages/ngx-fast-svg-docs/content/data/bundle-stats.json`. It is committed,
and the docs build renders it into the Bundle cost table on the comparison
page.

## How it measures

`fixtures/` holds seven minimal Angular applications:

| Fixture        | What it is                                           |
| -------------- | ---------------------------------------------------- |
| `baseline`     | no icon library at all                               |
| `fast-svg`     | baseline + `@push-based/ngx-fast-svg`                |
| `angular`      | baseline + `angular-svg-icon`                        |
| `material`     | baseline + `@angular/material/icon`                  |
| `ant`          | baseline + `@ant-design/icons-angular`               |
| `font-awesome` | baseline + `@fortawesome/angular-fontawesome`        |
| `ionic`        | baseline + `@ionic/angular/standalone`               |

Every fixture renders the same 21 icons (`fixtures/icons.ts`, mirroring the
docs demo) and bootstraps the same `COMMON_PROVIDERS` (`fixtures/common.ts`).
All seven are built through one Nx target with identical production settings —
one configuration per fixture in `project.json`. **A library's cost is its
build minus the baseline build.**

The alternative, attributing lazy chunks inside the docs application, is what
this repo used to do, and it was wrong: `provideIonicAngular()` and
`provideFastSVG()` sit in the docs app's root config, so both libraries' costs
were already paid by `main.js` and their "size" was only the leftover chunk.
Shared-chunk hoisting moved more of the cost around. Separate builds have
nothing to attribute, so there is nothing to get wrong.

`COMMON_PROVIDERS` is deliberately a realistic application rather than a bare
`bootstrapApplication`: it includes the router and an `HttpClient`, which
nearly every Angular app already ships, and which pull in rxjs and
`@angular/common`. Without them, every library that touches rxjs looks ~20 KB
more expensive than it is in a real app. Anything added to that list is free
for all six libraries and shrinks every published number, so keep it boring.

## What the numbers include, and what they don't

Each fixture is the minimal **working** setup for that library's icon, and
nothing more. That line matters: measuring Ionic with `provideIonicAngular()`
put 135 KB of Ionic config, platform and overlay code into the icon row, which
is the same mistake the old chunk-attribution method made, pointing the other
way. If you add a library, give it only what its icon component needs to run.

Two known limits of the method:

- **Fixture code counts.** A fixture's own template and component differ from
  the baseline's, so roughly 500 bytes of each library's figure is fixture
  code, not library code. It is a fixed overhead rather than a per-library
  distortion, but it weighs proportionally heaviest on the smallest libraries.
- **Published vs source.** Every competitor is measured from its published
  npm artifact while `@push-based/ngx-fast-svg` is built from source via the
  `tsconfig.base.json` path mapping. Measured difference: 13 bytes. Not worth
  the complexity of building the library first, but worth re-checking if the
  packaging ever changes.

Two numbers come out of each build:

- **initial** — the scripts `index.html` loads before the app starts, raw and
  gzipped at a fixed compression level.
- **lazy** — emitted `.js` that is not loaded at startup. Only Ionic has any;
  it registers its icons as lazy-loaded web components.

## Why CI checks it

`npm run bundle-stats:check` runs on every pull request and fails when any
number differs from the committed JSON, including after a dependency bump.
When it fails, run `npm run bundle-stats` and commit the result.

Two more guards make the pipeline hard to lose:

- the docs build fails if `content/data/bundle-stats.json` is missing;
- the docs build fails if no docs page uses the `{{bundle-stats}}` token, so
  deleting the table also breaks the build rather than silently orphaning the
  tooling.

An earlier version of this tool was deleted along with the demo app it read
from, and nobody noticed for a release, because nothing referenced it. That is
what these guards are for.

## Changing a measurement

Editing `project.json` build options, `fixtures/common.ts` or any fixture
changes every published number. That is fine — just run `npm run bundle-stats`
in the same commit so the JSON, the docs table and the code move together.

Adding a library means: a `fixtures/<id>/main.ts`, a configuration in
`project.json`, and an entry in `LIBRARIES` in `measure.mts`.
