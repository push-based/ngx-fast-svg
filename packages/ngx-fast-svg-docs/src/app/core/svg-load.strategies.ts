import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toObservable } from '@angular/core/rxjs-interop';
import { delay, map, Observable, of, switchMap, take } from 'rxjs';

import { SvgLoadStrategy, SvgLoadStrategyImpl } from '@push-based/ngx-fast-svg';

import { DemoSettings } from '../demo/features/demo-settings.service';

/**
 * Server-side load strategy used while prerendering.
 *
 * It resolves the same relative `assets/svg-icons/<name>.svg` URLs as the
 * browser config: platform-server rewrites relative HttpClient URLs against
 * the base href, and the prerender worker serves the build's own assets from
 * memory. No filesystem path is involved, so the app can live anywhere.
 */
@Injectable()
export class HttpSvgLoadStrategy implements SvgLoadStrategy {
  private readonly http = inject(HttpClient);

  config(url: string): Observable<string> {
    return of(url);
  }

  load(url$: Observable<string>): Observable<string> {
    return url$.pipe(
      switchMap((url) => this.http.get(url, { responseType: 'text' }))
    );
  }
}

/**
 * Browser load strategy of this site. It extends the default strategy and
 * reads two demo settings: `config` prefixes the current base path (a lazy
 * configuration: it resolves from a signal, not a constant), and `load` adds
 * an artificial delay so the suspense placeholder can be seen.
 */
@Injectable()
export class DemoSvgLoadStrategy extends SvgLoadStrategyImpl {
  private readonly settings = inject(DemoSettings);
  private readonly basePath$ = toObservable(this.settings.basePath);

  override config(url: string): Observable<string> {
    return this.basePath$.pipe(
      take(1),
      map((base) => `${base}/${url}`)
    );
  }

  override load(url$: Observable<string>): Observable<string> {
    return super.load(url$).pipe(delay(this.settings.latencyMs()));
  }
}
