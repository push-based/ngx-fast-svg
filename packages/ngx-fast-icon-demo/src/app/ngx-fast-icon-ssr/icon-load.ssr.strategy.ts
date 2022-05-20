import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SvgLoadStrategy } from '@ngx-fast-svg';

@Injectable()
export class SvgLoadStrategySsr implements SvgLoadStrategy {
  constructor(private http: HttpClient) {}

  load(url: string): Observable<string> {
    return this.http.get(url, {
      responseType: 'text',
    });
  }
}
