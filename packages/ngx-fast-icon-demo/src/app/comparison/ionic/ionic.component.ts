import { Component } from '@angular/core';
import { SUPPORTED_ICONS } from '../../icon-data';
import { IconTester } from '../../misc/icons-tester/icon-tester.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    IonicModule
  ],
  template: `
    <h1>Ionic icon demo</h1>
    <h4>Layout setting</h4>
    <div class="buttons-wrapper">
      @for (button of tester.buttons; track $index) {
        <button
          [ngClass]="{ active: button === (tester.setting | async)}"
          (click)="tester.setLayout(button)"
        >{{ button }}</button>
      }
    </div>
    <h4>Content controls</h4>
    <div class="buttons-wrapper">
      <button (click)="tester.updateList(1)">Add</button>
      <button (click)="tester.updateList(-1)">Remove</button>
      <button (click)="tester.reload()">Reload page</button>
    </div>
    <div class="row icons" [ngClass]="tester.layout | async">
      @for (list of (tester.lists | async); track $index) {
        <ul class="group">
          @for (icon of list; track $index) {
            <li>
              <ion-icon size="large" [src]="icon" />
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: [`
    .group {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class IonicComponent {
  constructor(public tester: IconTester) {
    this.tester.defineSet(
      SUPPORTED_ICONS.map((i) => `assets/svg-icons/${i}.svg`)
    );
  }
}
