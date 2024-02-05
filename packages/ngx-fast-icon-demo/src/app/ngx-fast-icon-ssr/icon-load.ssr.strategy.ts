import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SvgLoadStrategy } from '@push-based/ngx-fast-svg';
import { join } from 'node:path';
import { readFileSync } from 'fs';

@Injectable()
export class SvgLoadStrategySsr implements SvgLoadStrategy {
  load(url: string): Observable<string> {
    const iconPath = join(
      process.cwd(),
      'packages',
      'ngx-fast-icon-demo',
      'src',
      url
    );
    const iconSVG = readFileSync(iconPath, 'utf8');
    return of(iconSVG);
  }
}
