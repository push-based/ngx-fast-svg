import { ApplicationRef, Injectable } from '@angular/core';

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
  showContainer?: boolean;
  constructor(private appRef: ApplicationRef) {}
  private distributed = false;

  setLayout(setting: ViewportSetting) {
    this.setting = setting;

    switch (setting) {
      case ViewportSetting.OnScreen:
        document.body.style.setProperty('--group-margin', '0');
        document.body.style.setProperty('--row-margin-top', '32px');
        break;
      case ViewportSetting.OffScreen:
        document.body.style.setProperty('--group-margin', '0');
        document.body.style.setProperty('--row-margin-top', '100vh');
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
  }

  remove() {
    this.lists.pop();
    this.appRef.tick();
  }

  private clear() {
    this.showContainer = false;
    this.lists = [];
    this.appRef.tick();
  }
}
