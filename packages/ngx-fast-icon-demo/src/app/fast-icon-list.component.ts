import { Component, ViewEncapsulation } from '@angular/core';
import { SUPPORTED_ICONS } from './icon-data';

@Component({
  selector: 'fast-icon-list',
  template: `
    <h2>ngx-fast-icon</h2>
    <p>
      <button (click)="add()">add list</button>
    </p>
    <ul class="loading-demo" *ngFor="let list of lists">
      <li *ngFor="let icon of list">
        <fast-icon [name]="icon"></fast-icon>
      </li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.None
})
export class FastIconListComponent {
  readonly icons: string[] = [...SUPPORTED_ICONS];
  lists: string[][] = [];

  add() {
    this.lists.push(this.icons);
  }
}
