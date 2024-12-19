import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AsyncPipe } from '@angular/common';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';
import { SUPPORTED_ICONS } from '../misc/icon-data';
import { BaseDemoComponent } from '../misc/base-demo.component';
import { DEMO_ROUTE } from '../misc/constants';

@Component({
    template: `
    <app-controller [demoLib]='"Material icon"' [tester]='tester'/>
    <div class='row icons' [class]='layout()'>
      @for (list of countArr(); track $index) {
        <ul class='group'>
          @for (icon of tester.icons; track $index) {
            <li>
              <mat-icon class='mat-icon-rtl-mirror' [svgIcon]='$any(icon)' />
            </li>
          }
        </ul>
      }
    </div>
  `,
    imports: [AsyncPipe, ControllerComponent, MatIconModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class MaterialComponent extends BaseDemoComponent {
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
  ) {
    super();
    this.tester.activeDemo.set(DEMO_ROUTE.MATERIAL);
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
