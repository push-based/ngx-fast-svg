---
title: Server-side rendering
description: Render icons on the server, ship them in the HTML, and hydrate with zero icon requests.
order: 4
---

## How SSR works here

The library keeps every loaded SVG in one hidden `<div id="svg-cache">` at the end of `<body>`. On the server, each `<fast-svg>` fetches its file immediately instead of waiting for visibility, so by the time the page is serialized the cache contains every icon on it.

The client picks that `<div>` up by id, marks each child as already loaded, and renders the `<use>` references against it. No icon is requested again, and nothing is written to transfer state.

This site is prerendered this way. Open the [SSR and hydration demo](demo/features/ssr-hydration) and watch the network log stay empty.

## Provide a server strategy

The default strategy calls the global `fetch` with a relative URL, which fails on the server. Provide a strategy that can reach the files. Two options work well.

### Through HttpClient (recommended)

```typescript
// svg-load.strategies.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { SvgLoadStrategy } from '@push-based/ngx-fast-svg';

@Injectable()
export class HttpSvgLoadStrategy implements SvgLoadStrategy {
  private readonly http = inject(HttpClient);

  config(url: string) {
    return of(url);
  }

  load(url$: Observable<string>) {
    return url$.pipe(
      switchMap((url) => this.http.get(url, { responseType: 'text' }))
    );
  }
}
```

`@angular/platform-server` rewrites relative `HttpClient` URLs to the server's own origin and base href, and the Angular CLI's prerenderer serves the build's assets from memory. The same `url` option therefore works in the browser, in `ng serve` with SSR, and during `ng build` prerendering, with no filesystem path in your code.

### From the filesystem

If your server runs separately from the asset folder, read the files directly:

```typescript
import { Injectable } from '@angular/core';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { from, Observable, of, switchMap } from 'rxjs';
import { SvgLoadStrategy } from '@push-based/ngx-fast-svg';

@Injectable()
export class FsSvgLoadStrategy implements SvgLoadStrategy {
  config(url: string) {
    return of(join(process.cwd(), 'dist/app/browser', url));
  }

  load(path$: Observable<string>) {
    return path$.pipe(switchMap((path) => from(readFile(path, 'utf8'))));
  }
}
```

## Register it in the server config

```typescript
// app.config.server.ts
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';
import { provideFastSVG } from '@push-based/ngx-fast-svg';
import { appConfig } from './app.config';
import { HttpSvgLoadStrategy } from './svg-load.strategies';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideFastSVG({
      url: (name) => `assets/svg-icons/${name}.svg`,
      svgLoadStrategy: HttpSvgLoadStrategy,
    }),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
```

Pass the complete options again: the server's `provideFastSVG` replaces the browser one.

## Keep SVGs out of transfer state

When the server strategy uses `HttpClient`, Angular's HTTP transfer cache would also serialize every SVG response into the `ng-state` script. The markup is already in `#svg-cache`, so filter those requests out:

```typescript
// app.config.ts
provideClientHydration(
  withHttpTransferCacheOptions({
    filter: (req) => !req.url.includes('svg-icons/'),
  })
)
```

## Hydration

The component template is `<svg><use></use></svg>` and the cache is plain DOM, so both hydrate without special handling. `provideClientHydration()` is enough, with or without incremental hydration. Icons that were not on the server-rendered page (for example inside an `@if` that only becomes true in the browser) load lazily as usual.
