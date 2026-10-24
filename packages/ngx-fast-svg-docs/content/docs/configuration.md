---
title: Configuration
description: Every option provideFastSVG accepts, with its default.
order: 2
---

## Options

```typescript
provideFastSVG({
  url: (name: string) => `assets/svg-icons/${name}.svg`,
  defaultSize: '32',
  suspenseSvgString: spinnerSvg,
  svgLoadStrategy: MyLoadStrategy,
});
```

| Option              | Type                          | Default                                     | Purpose                                                                                                          |
| ------------------- | ----------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `url`               | `(name: string) => string`    | required                                    | Maps an icon name to the URL of its SVG file. The result is passed to the load strategy's `config()`.          |
| `defaultSize`       | `string`                      | `'24'`                                      | The `size` used when a component sets none. Also sets the fallback `viewBox` to `0 0 <size> <size>`.          |
| `suspenseSvgString` | `string`                      | a built-in "face" icon                      | SVG markup shown while an icon is loading. It is cached once under the id `suspense`.                           |
| `svgLoadStrategy`   | `Type<SvgLoadStrategy>`       | `SvgLoadStrategyImpl` (native `fetch`)      | An injectable class that resolves the final URL and fetches the markup. See [load strategies](docs/load-strategies). |

`provideFastSVG` returns a `Provider[]`, so it works in `ApplicationConfig.providers`, in an `NgModule`, and in route-level `providers`.

## `url`

The function receives the `name` input of a component and returns a string. Relative URLs resolve against the document's `<base href>`, which keeps them correct when the app is served from a sub-path (this site lives under `/ngx-fast-svg/`).

```typescript
// Flat folder
url: (name) => `assets/svg-icons/${name}.svg`

// Nested names such as "social/github"
url: (name) => `assets/icons/${name}.svg`

// A CDN
url: (name) => `https://cdn.example.com/icons/v3/${name}.svg`
```

The name is also used as the `id` of the cached `<svg>` element, so it must be unique on the page and valid as an HTML id. Prefer `a-z`, `0-9`, `-` and `_`.

## `defaultSize`

Sets the default of the `size` input for every component. The value is a string because it is written straight into the `width` and `height` attributes of the rendered `<svg>`.

```typescript
provideFastSVG({ url, defaultSize: '20' });
```

```html
<fast-svg name="search" />            <!-- 20 × 20 -->
<fast-svg name="search" size="48" />  <!-- 48 × 48 -->
```

## `suspenseSvgString`

Markup rendered inside every `<fast-svg>` until its own SVG arrives. Keep it light: it is parsed once and reused through `<use href="#suspense">`. A spinner or an empty placeholder with the right proportions works well.

```typescript
export const spinnerSvg = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="9" stroke-dasharray="40 20" />
  </svg>`;

provideFastSVG({ url, suspenseSvgString: spinnerSvg });
```

Give it a `viewBox`; without one it is drawn in the default `0 0 24 24` box. The [suspense demo](demo/features/suspense) slows the network down so you can see the placeholder.

## `svgLoadStrategy`

Replaces how URLs are resolved and how markup is fetched. The default uses the browser's `fetch`. You provide your own class for server-side rendering, for `HttpClient` interceptors, or for configuration that is only known at runtime. [Load strategies](docs/load-strategies) covers the contract.

## Sizing rules

Each component applies these rules whenever `size`, `width` or `height` change:

```
width  = width  || size
height = height || width || size
```

So `width="52" height="71"` gives a 52 × 71 box, `width="40"` alone gives 40 × 40, and `size="16"` gives 16 × 16. `size` is always set (it falls back to `defaultSize`), so an icon never renders without dimensions. That avoids layout shift while the file loads.
