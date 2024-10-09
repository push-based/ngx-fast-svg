import { join } from 'node:path';
import { readFileSync } from 'node:fs';

import { mergeApplicationConfig, ApplicationConfig, Injectable } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

import { map, Observable } from 'rxjs';

import { provideFastSVG, SvgLoadStrategy } from '@push-based/ngx-fast-svg';

import { appConfig } from './app.config';

@Injectable()
export class SvgLoadStrategySsr implements SvgLoadStrategy {
  load(url$: Observable<string>): Observable<string> {
    return url$.pipe(
      map((url) => {
        const iconPath = join(process.cwd(), 'packages', 'ngx-fast-icon-demo', 'src', url);
        return readFileSync(iconPath, 'utf8')
      })
    )
  }
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideFastSVG({
      svgLoadStrategy: SvgLoadStrategySsr,
      url: (name: string) => `assets/svg-icons/${name}.svg`,
    }),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
