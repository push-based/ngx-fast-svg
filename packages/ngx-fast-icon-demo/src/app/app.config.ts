import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withRouterConfig
} from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withNoIncrementalHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideFastSVG } from '@push-based/ngx-fast-svg';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { provideIonicAngular } from '@ionic/angular/standalone';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    provideAnimations(),
    provideClientHydration(withNoIncrementalHydration()),
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
    }),
  ],
};
