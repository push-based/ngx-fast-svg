import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
  withNoIncrementalHydration,
} from '@angular/platform-browser';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';

import { provideFastSVG } from '@push-based/ngx-fast-svg';
import { provideIonicAngular } from '@ionic/angular/standalone';

import { appRoutes } from './app.routes';
import { suspenseSvg } from './core/suspense-svg';
import { DemoSvgLoadStrategy } from './core/svg-load.strategies';
import { svgFile } from './core/svg-url';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    // Anchor scrolling ignores scroll-margin-top; keep headings clear of the sticky header.
    provideAppInitializer(() => inject(ViewportScroller).setOffset([0, 88])),
    provideClientHydration(
      withNoIncrementalHydration(),
      // Prerendered SVGs already ship inside <div id="svg-cache">; keep them
      // out of the transfer-state script so they are not sent twice.
      withHttpTransferCacheOptions({
        filter: (req) => !req.url.includes('svg-icons/'),
      })
    ),
    provideHttpClient(withFetch()),
    provideRouter(
      appRoutes,
      withRouterConfig({
        urlUpdateStrategy: 'eager',
        paramsInheritanceStrategy: 'always',
      }),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      withComponentInputBinding()
    ),
    provideIonicAngular({}),
    // `url` returns only the file; DemoSvgLoadStrategy.config() prefixes the folder.
    provideFastSVG({
      url: svgFile,
      suspenseSvgString: suspenseSvg,
      svgLoadStrategy: DemoSvgLoadStrategy,
    }),
  ],
};
