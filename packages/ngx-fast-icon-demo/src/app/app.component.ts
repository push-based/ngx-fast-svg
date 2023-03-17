import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import { filter, map, startWith } from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'ngx-fast-icon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  links = [
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
  private _mobileQueryListener: () => void;
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
