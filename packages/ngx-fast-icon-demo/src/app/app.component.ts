import { Component, inject } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import { filter, map } from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'ngx-fast-icon-root',
  template: `
    <div class="root" [class]="rootClass$ | async">
      <mat-toolbar class="header-toolbar sanity-check" [class.header-is-mobile]="isMobile">
        <a (click)="snav.toggle()">
          <fast-svg id="nav-icon" height="48" width="48" name="menu" />
        </a>
        <h1 class="title">ngx-fast-svg</h1>
      </mat-toolbar>
      <div class="row">
        <mat-sidenav-container [style.marginTop.px]="isMobile ? 56 : 0">
          <mat-sidenav #snav mode="side" [opened]="!isMobile" [fixedInViewport]="isMobile" fixedTopGap="56">
            <div class="sidebar">
              <div class="header">
                @for (link of links; track $index) {
                  <a
                    class="link"
                    [routerLinkActive]="'active'"
                    [ngClass]="link"
                    [routerLink]="link"
                    [queryParams]="queryParams$ | async"
                  >{{ link }}</a>
                }
              </div>
            </div>
          </mat-sidenav>
          <mat-sidenav-content>
            <div class="content">
              <router-outlet />
            </div>
          </mat-sidenav-content>
        </mat-sidenav-container>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
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
