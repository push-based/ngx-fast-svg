import { Injectable } from '@angular/core';
import { from, Observable, of, switchMap } from 'rxjs';
import { SvgLoadStrategy } from '@ngx-fast-svg';
import { fromFetch } from 'rxjs/fetch';

@Injectable()
export class SvgLoadStrategySsr implements SvgLoadStrategy {
  load(url: string): Observable<string> {
    return fromFetch('http://localhost:4200' + url).pipe(
      switchMap((res) => {
        if (!res.ok) {
          return of('');
        }
        return from(res.text());
      })
    );
  }
}
