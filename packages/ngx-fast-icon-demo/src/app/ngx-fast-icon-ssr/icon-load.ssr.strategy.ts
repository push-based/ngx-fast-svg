import { Injectable } from '@angular/core';
import { from, Observable, of, switchMap } from 'rxjs';
import { IconLoadStrategy } from '@ngx-fast-icon';
import { fromFetch } from 'rxjs/fetch';

@Injectable()
export class IconLoadStrategySsr implements IconLoadStrategy {
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
