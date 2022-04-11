import { Component, ViewEncapsulation } from '@angular/core';
import { SUPPORTED_ICONS } from './icon-data';

@Component({
  selector: 'icon-list',
  template: `
    <h2>angular-svg-icon</h2>
    <p>
      <button (click)="add()">add list</button>
    </p>
    <ul class="loading-demo" *ngFor="let list of lists">
      <li *ngFor="let icon of list">
        <svg-icon [src]="'assets/svg-icons/'+icon+'.svg'"></svg-icon>
      </li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.None
})
export class IconListComponent {
  readonly icons: string[] = [...SUPPORTED_ICONS];
  lists: string[][] = [];

  add() {
    this.lists.push(this.icons);
  }
}

