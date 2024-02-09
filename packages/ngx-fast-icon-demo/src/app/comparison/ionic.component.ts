import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { IonIcon } from '@ionic/angular/standalone';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';
import { SUPPORTED_ICONS } from '../misc/icon-data';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Ionic icon"' [tester]='tester' />
    <div class="row icons" [class]="tester.layout | async">
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
  imports: [ControllerComponent, AsyncPipe, IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class IonicComponent {
  constructor(public tester: IconTester) {
    this.tester.defineSet(
      SUPPORTED_ICONS.map((i) => `assets/svg-icons/${i}.svg`)
    );
  }
}
