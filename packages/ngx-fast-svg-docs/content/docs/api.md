---
title: API reference
description: Everything exported from @push-based/ngx-fast-svg.
order: 6
---

## `FastSvgComponent`

Standalone component, selector `fast-svg`, `OnPush` change detection.

```typescript
import { FastSvgComponent } from '@push-based/ngx-fast-svg';
```

| Input    | Type     | Default              | Description                                                                 |
| -------- | -------- | -------------------- | --------------------------------------------------------------------------- |
| `name`   | `string` | required             | Icon name, passed to the `url` option. Also the id of the cached `<svg>`.  |
| `size`   | `string` | `defaultSize` (`'24'`) | Width and height when `width` / `height` are not set.                     |
| `width`  | `string` | `''`                 | Overrides the rendered width.                                               |
| `height` | `string` | `''`                 | Overrides the rendered height. Falls back to `width`, then `size`.         |

All inputs are signal inputs and may change at runtime; changing `name` loads the new icon and keeps the old one cached. An empty `name` throws.

Host styles: the host element is `display: contents`; the inner `<svg class="fast-svg">` has `margin: 3px; contain: content; content-visibility: auto`. Color the icon through CSS `color` on an ancestor when the file uses `currentColor`.

## `provideFastSVG(options)`

```typescript
import { provideFastSVG } from '@push-based/ngx-fast-svg';

provideFastSVG({
  url: (name: string) => string,     // required
  defaultSize?: string,              // '24'
  suspenseSvgString?: string,        // built-in placeholder
  svgLoadStrategy?: Type<SvgLoadStrategy>, // SvgLoadStrategyImpl
}): Provider[];
```

Returns plain providers. Provide it at the application root; providing it again (for example in the server config) replaces the earlier options. Details in [configuration](docs/configuration).

## `SvgLoadStrategy`

Abstract class and injection token for custom loading. Implement both methods and pass the class as `svgLoadStrategy`.

```typescript
import { SvgLoadStrategy } from '@push-based/ngx-fast-svg';

export abstract class SvgLoadStrategy {
  abstract config(url: string): Observable<string>;
  abstract load(url: Observable<string>): Observable<string>;
}
```

## `SvgLoadStrategyImpl`

The default strategy: `config` returns the URL unchanged, `load` fetches it with the global `fetch` and resolves to `''` for non-2xx responses. Exported so you can extend it. See [load strategies](docs/load-strategies).

## `SvgRegistry`

Root-provided service behind every component. You rarely need it directly, but it is public:

| Member                 | Description                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| `defaultSize`          | The configured `defaultSize` or `'24'`.                                                                       |
| `url(name)`            | `Observable<string>` of the resolved URL (`url` option piped through the strategy's `config`).                |
| `fetchSvg(name)`       | Loads and caches the icon if it is not cached or in flight. Used by components after the helper image loads. |
| `isSvgCached(name)`    | `true` once the icon has been requested (not necessarily arrived).                                            |
| `svgCache$(name)`      | `Observable<{ name: '#id'; viewBox: string }>`. Emits `#suspense` first, then `#name` when the icon is cached. |

Calling `fetchSvg` ahead of time is a simple way to preload icons that are about to appear.

## `SvgOptionsToken` and `SvgOptions`

The injection token and interface that hold `url`, `defaultSize` and `suspenseSvgString`. `provideFastSVG` sets them for you. Inject the token if another part of your app needs the configured `url` function.

```typescript
import { inject } from '@angular/core';
import { SvgOptionsToken } from '@push-based/ngx-fast-svg';

const options = inject(SvgOptionsToken);
options.url('search'); // 'assets/svg-icons/search.svg'
```

## `FastSvgModule` (deprecated)

```typescript
FastSvgModule.forRoot(options) // same options as provideFastSVG
FastSvgModule.forChild()       // provides nothing; import the component instead
```

Kept for NgModule-based apps that have not migrated. New code should import `FastSvgComponent` and call `provideFastSVG`.
