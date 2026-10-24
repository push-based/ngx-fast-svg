---
title: Getting started
description: Install the package, register it once, and render your first icon.
order: 1
---

## Install

```bash
npm install @push-based/ngx-fast-svg
```

The package has three peer dependencies: `@angular/core`, `@angular/common` (17.1 or newer) and `rxjs` (7.8 or newer).

## Register the provider

`provideFastSVG` needs one thing: a function that turns an icon name into the URL of its SVG file. Everything else has a default.

### Standalone application

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideFastSVG } from '@push-based/ngx-fast-svg';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFastSVG({
      url: (name: string) => `assets/svg-icons/${name}.svg`,
    }),
  ],
};
```

### NgModule application

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { provideFastSVG } from '@push-based/ngx-fast-svg';

@NgModule({
  declarations: [AppComponent],
  providers: [
    provideFastSVG({
      url: (name: string) => `assets/svg-icons/${name}.svg`,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

`FastSvgModule.forRoot(options)` still works and takes the same options, but it is deprecated. Prefer `provideFastSVG`.

## Put your SVG files where the URL points

Each icon is a plain `.svg` file served as a static asset. With the configuration above, `<fast-svg name="search" />` loads `assets/svg-icons/search.svg`.

Two things make an SVG file work well:

- Give the root `<svg>` element a `viewBox`. The component copies it so the icon scales. Without it the icon is clipped to `0 0 24 24` (or your `defaultSize`). See [viewBox and sizing](demo/features/viewbox) in the demo.
- Use `fill="currentColor"` (or `stroke="currentColor"`) if you want to color icons with CSS.

## Render an icon

`FastSvgComponent` is standalone. Import it where you use it:

```typescript
import { Component } from '@angular/core';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';

@Component({
  selector: 'app-toolbar',
  imports: [FastSvgComponent],
  template: `
    <fast-svg name="search" />
    <fast-svg name="account" size="32" />
    <fast-svg name="logo" width="52" height="71" />
  `,
})
export class ToolbarComponent {}
```

- `name` is required and maps to the file through your `url` function.
- `size` sets width and height together. It defaults to `24`.
- `width` and `height` override `size` for non-square icons.

All inputs are strings, so `size="32"` and `[size]="iconSize"` both work. See the [API reference](docs/api) for the exact sizing rules.

## What happens next

The first `<fast-svg name="search" />` on a page fetches `search.svg` when it scrolls into view, parses it once into a hidden cache, and renders it with `<use>`. Every further `<fast-svg name="search" />` reuses that cached element with no extra request. [How it works](docs/how-it-works) walks through the mechanism; [SSR](docs/ssr) shows how to ship the cache in the server-rendered HTML.
