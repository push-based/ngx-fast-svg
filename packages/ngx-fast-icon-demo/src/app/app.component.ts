import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import { filter, map, startWith } from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'ngx-fast-icon-root',
  template: `
    <div class="root" [ngClass]="(navClass$ | async) || ''">
      <mat-toolbar class="header-toolbar sanity-check" [class.header-is-mobile]="mobileQuery.matches">
        <a (click)="snav.toggle()">
          <fast-svg id="nav-icon" height="48" width="48" name="menu" />
        </a>
        <h1 class="title">ngx-fast-svg</h1>
      </mat-toolbar>
      <div class="row">
        <mat-sidenav-container [style.marginTop.px]="mobileQuery.matches ? 56 : 0">
          <mat-sidenav #snav mode="side" [opened]="!mobileQuery.matches" [fixedInViewport]="mobileQuery.matches" fixedTopGap="56">
            <div class="sidebar">
              <div class="header">
                <a
                  class="link"
                  *ngFor="let link of links"
                  [routerLinkActive]="'active'"
                  [ngClass]="link"
                  [routerLink]="link"
                  [queryParams]="queryParams | async"
                >
                  {{ link }}
                </a>
              </div>
            </div>
          </mat-sidenav>
          <mat-sidenav-content>
            <div class="content">
              <router-outlet></router-outlet>
            </div>
          </mat-sidenav-content>
        </mat-sidenav-container>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  readonly links = [
    'description',
    'fast-svg',
    'material',
    'ionic',
    'font-awesome',
    'angular',
    'ant',
  ];
  readonly queryParams = this.activatedRoute.queryParams;
  mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  navClass$ = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    startWith({ urlAfterRedirects: this.router.url }),
    map((e) => this.getClassFromUrl((e as NavigationEnd).urlAfterRedirects))
  );

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getClassFromUrl(url: string): string {
    if (url.includes('angular')) {
      return 'angular';
    }

    if (url.includes('material')) {
      return 'material';
    }

    if (url.includes('ant')) {
      return 'ant';
    }
    if (url.includes('fast-svg')) {
      return 'fast-svg';
    }

    if (url.includes('font-awesome')) {
      return 'font-awesome';
    }

    if (url.includes('ionic')) {
      return 'ionic';
    }

    if (url.includes('description')) {
      return 'description';
    }

    return '';
  }
}
