import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import {
  IconDefinition,
  IconService as AntIconService,
} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'ngx-fast-icon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faCircleUser = faCircleUser;
  iconUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
    'assets/svg-icons/account.svg'
  );

  links = [
    'description',
    'fast-icon',
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
  constructor(
    private _iconService: AntIconService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    const antDesignIcons = AllIcons as {
      [key: string]: IconDefinition;
    };
    this._iconService.addIcon(
      ...Object.keys(antDesignIcons).map((key) => antDesignIcons[key])
    );

    this.matIconRegistry.addSvgIcon('account', this.iconUrl);
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
    if (url.includes('fast-icon')) {
      return 'fast-icon';
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
