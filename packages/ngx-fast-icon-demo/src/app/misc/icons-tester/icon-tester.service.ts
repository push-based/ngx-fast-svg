import { ApplicationRef, Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map} from 'rxjs';

enum ViewportSetting {
  OnScreen = 'On Screen',
  OffScreen = 'Off Screen',
  Distributed = 'Distributed',
}

@Injectable({ providedIn: 'root' })
export class IconTester {
  lsOptions = ['on-screen', 'off-screen', 'distributed'];
  buttons = [
    ViewportSetting.OnScreen,
    ViewportSetting.OffScreen,
    ViewportSetting.Distributed,
  ];
  icons?: any[];

  readonly setting = this.activatedRoute.queryParams.pipe(map(({ls}) => this._reverseKebab(ls)));

  readonly lists = this.activatedRoute.queryParams.pipe(map(({list}) => Array(Number(list)).fill(this.icons)));

  constructor(private appRef: ApplicationRef, private activatedRoute: ActivatedRoute, private router: Router) {
    this._handleNavigationWithInvalidQueryParams(activatedRoute);
    this._handleLayoutSetting();
  }

  setLayout(setting: ViewportSetting) {
    this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {
          ls: this._toKebab(setting),
        },
        queryParamsHandling: 'merge',
    });
  }

  defineSet(set: any[]) {
    this.icons = set;
  }

  reload() {
    window.location.reload();
  }

  add() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        list: Number(this.activatedRoute.snapshot.queryParams['list']) + 1
      },
      queryParamsHandling: 'merge',
    });
  }

  remove() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        list: Number(this.activatedRoute.snapshot.queryParams['list']) - 1
      },
      queryParamsHandling: 'merge',
    });
  }

  private _handleLayoutSetting(): void {
    this.activatedRoute.queryParams.subscribe(({ls}) => {
      switch (this._reverseKebab(ls)) {
        case ViewportSetting.OnScreen:
          document.body.style.setProperty('--group-margin', '0');
          document.body.style.setProperty('--row-margin-top', '32px');
          break;
        case ViewportSetting.OffScreen:
          document.body.style.setProperty('--group-margin', '0');
          document.body.style.setProperty('--row-margin-top', '100vh');
          break;
        case ViewportSetting.Distributed:
          document.body.style.setProperty('--row-margin-top', '32px');
          document.body.style.setProperty('--group-margin', '14%');
          break;
      }
    })
  }

  private _handleNavigationWithInvalidQueryParams(activatedRoute: ActivatedRoute): void {
    activatedRoute.queryParams
      .pipe(filter(({ls, list}) => !this.lsOptions.includes(ls) || !list))
      .subscribe(() => {
        this.router.navigate(
          [],
          {
            relativeTo: activatedRoute,
            queryParams: {
              ls: this._toKebab(ViewportSetting.OnScreen),
              list: 0
            },
            queryParamsHandling: 'merge',
          });
      });
  }

  private _reverseKebab(str: string): string {
    return str.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
  }

  private _toKebab(str: string): string {
    return str.replace(' ','-').toLowerCase();
  }
}
