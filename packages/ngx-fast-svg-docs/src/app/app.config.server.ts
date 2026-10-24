import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';

import { provideFastSVG } from '@push-based/ngx-fast-svg';

import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { suspenseSvg } from './core/suspense-svg';
import { HttpSvgLoadStrategy } from './core/svg-load.strategies';
import { svgUrl } from './core/svg-url';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideFastSVG({
      url: svgUrl,
      suspenseSvgString: suspenseSvg,
      svgLoadStrategy: HttpSvgLoadStrategy,
    }),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
