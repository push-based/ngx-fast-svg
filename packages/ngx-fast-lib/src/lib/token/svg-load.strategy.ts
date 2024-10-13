import { from, Observable, of, switchMap } from 'rxjs';
import { getZoneUnPatchedApi } from '../internal/get-zone-unpatched-api';
import { SvgLoadStrategy } from './svg-load.strategy.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SvgLoadStrategyImpl implements SvgLoadStrategy {
  fetch = getZoneUnPatchedApi('fetch', window as any);

  load(url$: Observable<string>): Observable<string> {
    return url$.pipe(switchMap((url) => {
      return from(fetch(url).then((res) => (!res.ok ? '' : res.text())));
    }));
  }

  config = (url: string) => of(url);
}
