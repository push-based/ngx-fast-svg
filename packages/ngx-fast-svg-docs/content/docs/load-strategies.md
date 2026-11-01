---
title: Load strategies
description: Control how an icon URL is resolved and how its markup is fetched.
order: 3
---

## The contract

A load strategy is an injectable class with two methods:

```typescript
import { Observable } from 'rxjs';

export abstract class SvgLoadStrategy {
  /** Turns the URL from your `url` option into the final URL. May be async. */
  abstract config(url: string): Observable<string>;
  /** Fetches the SVG markup for a resolved URL. */
  abstract load(url: Observable<string>): Observable<string>;
}
```

The registry calls them in this order for every icon it has not cached yet:

```
url(name)  ->  strategy.config(url)  ->  strategy.load(url$)  ->  cache in DOM
```

`load` receives `config`'s observable, not a plain string, so a strategy can wait for configuration before it fetches anything.

## The default strategy

`SvgLoadStrategyImpl` is used when you provide none. `config` returns the URL as is, and `load` uses the browser's `fetch`:

```typescript
@Injectable()
export class SvgLoadStrategyImpl implements SvgLoadStrategy {
  config(url: string) {
    return of(url);
  }

  load(url$: Observable<string>): Observable<string> {
    return url$.pipe(
      switchMap((url) => from(fetch(url).then((res) => (res.ok ? res.text() : ''))))
    );
  }
}
```

It is exported, so you can extend it and override only the part you need.

## Fetch through HttpClient

If your interceptors add headers or auth tokens, go through `HttpClient`:

```typescript
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

```typescript
provideFastSVG({
  url: (name) => `assets/svg-icons/${name}.svg`,
  svgLoadStrategy: HttpSvgLoadStrategy,
});
```

This is also the strategy that works best for prerendering; see [SSR](docs/ssr).

## Resolve the URL lazily

`config` can be asynchronous. Use it when the asset base path, a CDN host or a version comes from a config file that loads after bootstrap:

```typescript
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SvgLoadStrategyImpl } from '@push-based/ngx-fast-svg';

@Injectable()
export class LazyConfigSvgLoadStrategy extends SvgLoadStrategyImpl {
  private readonly runtimeConfig = inject(RuntimeConfigService);

  override config(url: string): Observable<string> {
    // emits once the config file has loaded
    return this.runtimeConfig.assetBase$.pipe(map((base) => `${base}/${url}`));
  }
}
```

```typescript
provideFastSVG({
  url: (name) => `${name}.svg`,
  svgLoadStrategy: LazyConfigSvgLoadStrategy,
});
```

Icons that are already on screen render the suspense SVG until `config` emits, then load as usual. The [load strategy demo](demo/features/load-strategy) switches the base path and the latency at runtime.

## Where to provide it

A strategy is provided through the `svgLoadStrategy` option, which registers it under the `SvgLoadStrategy` token. Because `provideFastSVG` returns plain providers, you can give the server a different strategy than the browser:

```typescript
// app.config.server.ts
export const config = mergeApplicationConfig(appConfig, {
  providers: [
    provideServerRendering(),
    provideFastSVG({ url, svgLoadStrategy: HttpSvgLoadStrategy }),
  ],
});
```

The last `provideFastSVG` wins, so pass the full options again on the server.
