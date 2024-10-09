import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class SvgLoadStrategy {
  abstract load(url: string | Observable<string>): Observable<string>;
}
