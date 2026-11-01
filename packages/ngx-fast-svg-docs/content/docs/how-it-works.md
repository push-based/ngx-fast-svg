---
title: How it works
description: What happens between <fast-svg name="search" /> and pixels on screen.
order: 5
---

## One cache, many references

Every `<fast-svg>` renders the same tiny template:

```html
<svg class="fast-svg" width="24" height="24" viewBox="0 0 24 24">
  <use href="#search"></use>
</svg>
```

The `href` points at an `<svg id="search">` that lives in a single hidden container appended to `<body>`:

```html
<div id="svg-cache" style="overflow: hidden; width: 0; height: 0; position: fixed; bottom: -2000px; contain: content; content-visibility: auto;">
  <svg id="suspense" viewBox="0 0 24 24">…</svg>
  <svg id="search" viewBox="0 0 24 24">…</svg>
  <svg id="account" viewBox="0 0 24 24">…</svg>
</div>
```

A file is fetched and parsed once. A hundred `<fast-svg name="search" />` elements share the same cached node, each with its own size and CSS color (`currentColor` flows through `<use>`). The container sits off screen, is 0 × 0, and is excluded from style and layout work with `contain: content` and `content-visibility: auto`.

## Lazy loading, done by the browser

The library does not use an `IntersectionObserver`. When a component mounts and its icon is not cached yet, it appends a helper image:

```html
<img src="assets/svg-icons/search.svg" loading="lazy" alt="" width="0" height="0"
     style="display: none; contain: content; content-visibility: auto;">
```

1. While `display: none`, the browser never requests the file.
2. In the browser, the component switches it to `display: block`. From here on the browser's own lazy-loading logic decides when to fetch, which is when the element nears the viewport.
3. When the image fires `load`, the component asks the registry to fetch the same URL. That second request is served from the HTTP cache, so the markup arrives at no extra network cost.
4. The registry parses the markup, sets its `id` to the icon name, appends it to `#svg-cache`, and the `<use href>` switches from `#suspense` to `#search`. The helper image is removed.

Until step 4 the component shows the suspense SVG, so the box already has its final size and nothing shifts.

On the server there is no viewport. The component calls the registry directly, so every icon on the page is in the cache when the HTML is serialized. See [SSR](docs/ssr).

## Parsing and the viewBox

The registry parses the fetched string by assigning it to the `innerHTML` of a detached element and taking the first child. Then it reads the `viewBox` from the raw text:

```typescript
const viewBox = svgString.match(/viewBox="([^"]*)"/);
// -> used as the viewBox of every <fast-svg> that references this icon,
//    or `0 0 ${defaultSize} ${defaultSize}` when the file has none
```

Consequences for your SVG files:

- The file should start with the `<svg>` element. An XML declaration or a leading comment becomes the "first child" and the icon fails to register.
- Write `viewBox` with double quotes; the first match in the file is used.
- Without a `viewBox`, a 52 × 71 logo drawn in a `0 0 24 24` box shows only its top-left corner. Add the `viewBox` to the file. The [viewBox demo](demo/features/viewbox) shows both cases side by side.
- Internal ids inside the file (`<linearGradient id="a">`) are kept as they are. Because all icons share one document, two files that both define `id="a"` will resolve `url(#a)` to whichever was cached first. Prefix internal ids per file, or export icons with unique ids.

## Sizing

`size`, `width` and `height` are written as attributes on the rendered `<svg>`:

```
width  = width  || size
height = height || width || size
```

`size` defaults to the `defaultSize` option (`'24'`). The rendered `<svg>` carries `margin: 3px` and the same `contain` / `content-visibility` hints as the cache, so large icon lists stay cheap to lay out.

## What this buys you

- **One request per distinct icon**, no matter how often it is used.
- **Requests only for icons near the viewport**, using the browser's own scheduler rather than JavaScript observers.
- **No layout shift**: dimensions are applied before the file arrives.
- **Server rendering that ships the icons**, with the client hydrating from the DOM instead of refetching.
- **1.5 KB** of library code, because the browser does the heavy lifting.

Compare it with other icon libraries in the [comparison](docs/comparison) and the [live demo](demo/compare).
