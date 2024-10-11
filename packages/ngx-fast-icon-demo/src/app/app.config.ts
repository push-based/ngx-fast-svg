import { ApplicationConfig, Injectable } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withRouterConfig
} from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideFastSVG, SvgLoadStrategyImpl } from '@push-based/ngx-fast-svg';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { provideIonicAngular } from '@ionic/angular/standalone';

import { appRoutes } from './app.routes';
import { Observable, of, switchMap, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService extends SvgLoadStrategyImpl {
  lazy$ = timer(10_000)
  override config(url: string): Observable<string> {
    return this.lazy$.pipe(switchMap(() => of(url)))
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideRouter(
      appRoutes,
      withRouterConfig({
        urlUpdateStrategy: 'eager',
        paramsInheritanceStrategy: 'always'
      }),
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ),
    provideAngularSvgIcon(),
    provideIonicAngular({}),
    provideFastSVG({
      url: (name: string) => `assets/svg-icons/${name}.svg`,
      svgLoadStrategy: ConfigService
    }),
  ],
};
