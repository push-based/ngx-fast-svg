import { Component, ViewEncapsulation } from '@angular/core';
import { SUPPORTED_ICONS } from '../../icon-data';

@Component({
  selector: 'fast-svg-list',
  template: `
    <h2>ngx-fast-svg</h2>
    <p>
      <button data-test="add" (click)="add()">add list</button>
    </p>
    <ul data-test="list" class="loading-demo" *ngFor="let list of lists">
      <li *ngFor="let icon of list">
        <fast-svg [name]="icon"></fast-svg>
      </li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class FastSvgListComponent {
  readonly icons: string[] = [...SUPPORTED_ICONS];
  lists: string[][] = [];

  add() {
    this.lists.push(this.icons);
  }
}
