import { Component, inject } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import { filter, map } from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'ngx-fast-icon-root',
  template: `
    <app-shell
      [rootClass]='(rootClass$ | async) || ""'
      [isMobile]='isMobile'
      [links]='links'
      [queryParams]='(queryParams$ | async) || {}'
    >
      <router-outlet />
    </app-shell>
  `,
})
export class AppComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly queryParams$ = this.route.queryParams;
  readonly isMobile = inject(MediaMatcher).matchMedia('(max-width: 600px)').matches;
  readonly rootClass$ = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map((e) => e.urlAfterRedirects.split('?')[0].replace('/', ''))
  )

  readonly links = [
    'description',
    'fast-svg',
    'material',
    'ionic',
    'font-awesome',
    'angular',
    'ant',
  ];
}
