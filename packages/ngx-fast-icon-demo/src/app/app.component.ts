import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'ngx-fast-icon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    'description',
    'fast-svg',
    'material',
    'ionic',
    'font-awesome',
    'angular',
    'ant',
  ];

  navClass$ = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    startWith({ urlAfterRedirects: this.router.url }),
    map((e) => this.getClassFromUrl((e as NavigationEnd).urlAfterRedirects))
  );
  constructor(private router: Router) {}

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
