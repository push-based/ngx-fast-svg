---
title: Comparison
description: How ngx-fast-svg compares with other ways of rendering SVG icons in Angular.
order: 7
---

## At a glance

| Library            | SSR        | Lazy loading       | Optimized render performance | Size     |
| ------------------ | ---------- | ------------------ | ---------------------------- | -------- |
| `ngx-fast-svg`     | easy       | browser native     | ✔️                           | 1.52 KB  |
| `font-awesome`     | hard       | ❌                 | ❌                           | 64.75 KB |
| `ant`              | moderate   | ❌                 | ❌                           | 24.38 KB |
| `material`         | easy       | ❌                 | ❌                           | 16.92 KB |
| `angular-svg-icon` | moderate   | ❌                 | ❌                           | 1.54 KB  |
| `ionic`            | moderate   | ❌                 | ✔️                           | 1.44 KB  |

**SSR.** All six can render on the server. The rating is about how much setup it takes: `easy` means a provider or a module, `moderate` means a custom loader or extra configuration, `hard` means working around the library.

**Lazy loading.** Loading an icon's file only when the icon is near the viewport. `ngx-fast-svg` delegates this to the browser's `loading="lazy"` image logic; the others fetch when the component is created.

**Optimized render performance.** Whether rendering many instances stays cheap: one shared DOM node per icon, `contain` and `content-visibility` hints, and no per-instance parsing.

**Size.** Minified JavaScript the library adds to the main bundle of the demo app, measured with the production build's stats.

## Try it yourself

The [library comparison demo](demo/compare) renders the same 21 icons with each library. Pick a library, open the Performance panel of your browser's devtools, start recording and press **Add** to render another batch. The **Off screen** layout pushes every icon below the fold, which is where lazy loading and `content-visibility` make the difference; **Distributed** spreads them so only some are visible.

Each page keeps the same URL shape, `/demo/compare/<library>/<layout>/<count>`, so you can reload a scenario or compare two libraries side by side in two tabs.
