import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { IonIcon } from '@ionic/angular/standalone';

import { ControllerComponent } from '../misc/controller.component';
import { SUPPORTED_ICONS } from '../misc/icon-data';
import { BaseDemoComponent } from '../misc/base-demo.component';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Ionic icon"' [tester]='tester' />
    <div class="row icons" [class]='layout()'>
      @for (list of countArr(); track $index) {
        <ul class='group'>
          @for (icon of tester.icons; track $index) {
            <li>
              <ion-icon size="large" [src]="$any(icon)" />
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
export class IonicComponent extends BaseDemoComponent {
  constructor() {
    super();
    this.tester.defineSet(
      SUPPORTED_ICONS.map((i) => `assets/svg-icons/${i}.svg`)
    );
  }
}
