import { ApplicationRef, Injectable } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

enum ViewportSetting {
  OnScreen = 'On Screen',
  OffScreen = 'Off Screen',
  Distributed = 'Distributed',
}

@Injectable({ providedIn: 'root' })
export class IconTester {
  buttons = [
    ViewportSetting.OnScreen,
    ViewportSetting.OffScreen,
    ViewportSetting.Distributed,
  ];
  icons?: any[];

  setting = ViewportSetting.OnScreen;

  lists: any[][] = [];
  private distributed = false;
  private onScreen = true;
  showContainer?: boolean;
  constructor(
    private appRef: ApplicationRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {}

  setLayout(setting: ViewportSetting) {
    this.setting = setting;

    switch (setting) {
      case ViewportSetting.OnScreen:
        document.body.style.setProperty('--group-margin', '0');
        document.body.style.setProperty('--row-margin-top', '32px');
        this.onScreen = true;
        break;
      case ViewportSetting.OffScreen:
        document.body.style.setProperty('--group-margin', '0');
        document.body.style.setProperty('--row-margin-top', '100vh');
        this.onScreen = false;
        break;
      case ViewportSetting.Distributed:
        if (this.distributed) {
          document.body.style.removeProperty('--row-margin-top');
          document.body.style.removeProperty('--group-margin');
        } else {
          document.body.style.setProperty('--row-margin-top', '32px');
          document.body.style.setProperty('--group-margin', '14%');
        }
        this.distributed = !this.distributed;
        this.updateLocationParams({
          distributed: this.distributed
        });
        break;
    }
  }
  defineSet(set: any[]) {
    this.icons = set;
    this.remove();
  }

  reload() {
    window.location.reload();
  }

  add() {
    this.showContainer = true;
    this.lists.push(this.icons || []);
    this.appRef.tick();
    this.updateLocationParams({
      lists: this.lists.length
    });
  }

  remove() {
    this.lists.pop();
    this.appRef.tick();
    this.updateLocationParams({
      lists: this.lists.length
    });
  }

  private clear() {
    this.showContainer = false;
    this.lists = [];
    this.appRef.tick();
    this.updateLocationParams({
      lists: this.lists.length
    });
  }

  private updateLocationParams(queryParams: Params) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
