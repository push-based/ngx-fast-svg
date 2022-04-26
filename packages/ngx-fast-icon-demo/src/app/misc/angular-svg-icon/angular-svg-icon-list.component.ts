import { Component, ViewEncapsulation } from '@angular/core';
import { SUPPORTED_ICONS } from '../../icon-data';

@Component({
  selector: 'angular-svg-icon-list',
  template: `
    <h2>angular-svg-icon</h2>
    <p>
      <button data-test="add" (click)="add()">add list</button>
    </p>
    <ul data-test="list" class="loading-demo" *ngFor="let list of lists">
      <li *ngFor="let icon of list">
        <svg-icon [src]="'assets/svg-icons/'+icon+'.svg'"></svg-icon>
      </li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AngularSvgIconListComponent {
  readonly icons: string[] = [...SUPPORTED_ICONS];
  lists: string[][] = [];

  add() {
    this.lists.push(this.icons);
  }
}

