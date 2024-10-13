import { join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { cwd } from 'node:process';

import { ApplicationConfig, Injectable, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

import { from, Observable, of, switchMap } from 'rxjs';

import { provideFastSVG, SvgLoadStrategy } from '@push-based/ngx-fast-svg';

import { appConfig } from './app.config';

@Injectable()
export class SvgLoadStrategySsr implements SvgLoadStrategy {
  config(url: string) {
    return of(join(cwd(), 'packages', 'ngx-fast-icon-demo', 'src', 'assets', 'svg-icons', url));
  }
  load(iconPath$: Observable<string>) {
    return iconPath$.pipe(switchMap((iconPath) => from(readFile(iconPath, { encoding: 'utf8' }))))
  }
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideFastSVG({
      svgLoadStrategy: SvgLoadStrategySsr,
      url: (name: string) => `${name}.svg`,
    }),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
