import { from, Observable, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { fromFetch } from 'rxjs/fetch';
@Injectable()
export class IconLoadStrategyImpl {
  load(url: string): Observable<string> {
    return fromFetch(url).pipe(
      switchMap((res) => {
        if (!res.ok) {
          return of('');
        }
        return from(res.text());
      })
    );
  }
}
