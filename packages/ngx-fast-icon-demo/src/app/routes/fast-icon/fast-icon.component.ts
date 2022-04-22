import { Component } from '@angular/core';

@Component({
  templateUrl: './fast-icon.component.html',
  styleUrls: ['./fast-icon.component.scss'],
})
export class FastIconRouteComponent {
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
