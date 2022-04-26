import { Component } from '@angular/core';
import { IconService as AntIconService } from '@ant-design/icons-angular';
import { AccountBookFill } from '@ant-design/icons-angular/icons';

@Component({
  templateUrl: './ant.component.html',
  styleUrls: ['./ant.component.scss'],
})
export class AntComponent {
  readonly icons: string[] = [
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
  ];

  lists: string[][] = [];

  constructor(private _iconService: AntIconService) {
    this._iconService.addIcon(...[AccountBookFill]);
  }

  add() {
    for (let i = 0; i < 30; i++) {
      this.lists.push(this.icons);
    }
  }
}
