import { from, Observable } from 'rxjs';
import { getZoneUnPatchedApi } from '../internal/get-zone-unpatched-api';
import { SvgLoadStrategy } from './svg-load.strategy.model';

export class SvgLoadStrategyImpl extends SvgLoadStrategy {
  fetch = getZoneUnPatchedApi('fetch', window as any);

  load(url: string): Observable<string> {
    return from(fetch(url).then((res) => (!res.ok ? '' : res.text())));
  }
}
