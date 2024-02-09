import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {filter, map, Observable, switchMap } from 'rxjs';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
  icons?: string[] | IconDefinition[];

  readonly setting = this.activatedRoute.queryParams.pipe(map(({ls}) => this._reverseKebab(ls)));

  readonly layout = this.activatedRoute.queryParams.pipe(map(({ls}) => ls));

  readonly lists = this.activatedRoute.queryParams.pipe(map(({list}) => Array(Number(list)).fill(this.icons)));

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const queryParams$ = router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      switchMap(() => activatedRoute.queryParams)
    )
    this._handleNavigationWithInvalidQueryParams(queryParams$, activatedRoute);
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

  defineSet(set: string[] | IconDefinition[]) {
    this.icons = set;
  }

  reload() {
    window.location.reload();
  }

  updateList(number: number): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        list: Number(this.activatedRoute.snapshot.queryParams['list']) + number
      },
      queryParamsHandling: 'merge',
    });
  }

  private _handleNavigationWithInvalidQueryParams(queryParams$: Observable<Params>, activatedRoute: ActivatedRoute): void {
    queryParams$
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
