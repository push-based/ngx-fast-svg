import { Component } from '@angular/core';
import { SUPPORTED_ICONS } from '../icon-data';
import { IconTester } from '../misc/icon-tester.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ControllerComponent } from '../misc/controller.component';

@Component({
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    IonicModule,
    ControllerComponent
  ],
  template: `
    <app-controller [demoLib]='"Ionic icon"' [tester]='tester' />
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
