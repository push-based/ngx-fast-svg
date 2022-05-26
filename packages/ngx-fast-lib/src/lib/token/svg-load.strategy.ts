import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { getZoneUnPatchedApi } from '../internal/get-zone-unpatched-api';

@Injectable()
export class SvgLoadStrategyImpl {
  fetch = getZoneUnPatchedApi('fetch', window as any);

  load(url: string): Observable<string> {
    return from(fetch(url).then((res) => (!res.ok ? '' : res.text())));
  }
}
