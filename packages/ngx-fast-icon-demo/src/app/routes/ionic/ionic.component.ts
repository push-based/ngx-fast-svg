import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.scss'],
})
export class IonicComponent {
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

  add() {
    for (let i = 0; i < 30; i++) {
      this.lists.push(this.icons);
    }
  }
}
