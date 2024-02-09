import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AsyncPipe } from '@angular/common';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';
import { SUPPORTED_ICONS } from '../misc/icon-data';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Material icon"' [tester]='tester'/>
    <div class='row icons' [class]='tester.layout | async'>
      @for (list of (tester.lists | async); track $index) {
        <ul class="group">
          @for (icon of list; track $index) {
            <li>
              <mat-icon class='mat-icon-rtl-mirror' [svgIcon]='icon' />
            </li>
          }
        </ul>
      }
    </div>
  `,
  imports: [AsyncPipe, ControllerComponent, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MaterialComponent {
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    public tester: IconTester
  ) {
    this.tester.defineSet(SUPPORTED_ICONS);
    SUPPORTED_ICONS.forEach((i) => {
      this.matIconRegistry.addSvgIcon(
        i,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/svg-icons/${i}.svg`
        )
      );
    });
  }
}
