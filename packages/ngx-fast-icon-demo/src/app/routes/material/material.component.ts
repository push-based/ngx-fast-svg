import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
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
