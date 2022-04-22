import { Component } from '@angular/core';

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

  add() {
    for (let i = 0; i < 30; i++) {
      this.lists.push(this.icons);
    }
  }
}
