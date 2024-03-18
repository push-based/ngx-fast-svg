import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { filter, map, Observable, startWith } from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';
import {ShellComponent} from './misc/shell.component';
import {AsyncPipe, isPlatformServer} from '@angular/common';

@Component({
  selector: 'ngx-fast-icon-root',
  standalone: true,
  template: `
    <app-shell [rootClass]='(rootClass$ | async) || ""' [isMobile]='isMobile'>
      <router-outlet />
    </app-shell>
  `,
  imports: [
    ShellComponent,
    AsyncPipe,
    RouterOutlet
  ]
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);

  readonly isMobile = inject(MediaMatcher).matchMedia('(max-width: 600px)').matches;

  private readonly navUrl$: Observable<string> = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map((e) => e.urlAfterRedirects),
  )
  readonly rootClass$ = this.navUrl$.pipe(
    startWith(isPlatformServer(this._PLATFORM_ID) ? '' : window.location.pathname),
    map((pathname) => pathname.split('?')[0].split('/').filter(Boolean)),
  );
}
