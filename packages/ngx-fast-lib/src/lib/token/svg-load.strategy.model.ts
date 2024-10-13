import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class SvgLoadStrategy {
  abstract config(url: string): Observable<string>;
  abstract load(url: Observable<string>): Observable<string>;
}
