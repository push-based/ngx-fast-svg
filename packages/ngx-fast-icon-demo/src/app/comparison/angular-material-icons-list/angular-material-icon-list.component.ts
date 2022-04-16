import { Component, ViewEncapsulation } from '@angular/core';
import { SUPPORTED_ICONS } from '../../icon-data';

@Component({
  selector: 'angular-material-icon',
  template: `
    <h2>angular-material-icon</h2>
    <p>
      <button (click)="add()">add list</button>
    </p>
    <ul class="loading-demo" *ngFor="let list of lists">
      <li *ngFor="let icon of list">
        <mat-icon [name]="icon">{{icon}}</mat-icon>
      </li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AngularMaterialIconListComponent {
  readonly icons: string[] = [...SUPPORTED_ICONS];
  lists: string[][] = [];

  add() {
    this.lists.push(this.icons);
  }
}
