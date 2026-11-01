import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { COMPARE_LIB_NAME } from '../shared/constants';
import { SUPPORTED_ICONS } from '../shared/icon-data';
import { svgUrl } from '../../core/svg-url';
import { BaseDemoComponent } from './base-demo.component';
import { CompareControlsComponent } from './compare-controls.component';

@Component({
  template: `
    <docs-compare-controls [demoLib]="name" />
    <div class="row icons compare__icons" [class]="layout()">
      @for (list of countArr(); track $index) {
        <ul class="group">
          @for (icon of tester.icons; track $index) {
            <li>
              <mat-icon class="mat-icon-rtl-mirror" [svgIcon]="$any(icon)" />
            </li>
          }
        </ul>
      }
    </div>
  `,
  imports: [CompareControlsComponent, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MaterialCompareComponent extends BaseDemoComponent {
  protected readonly name = COMPARE_LIB_NAME.material;
  private readonly sanitizer = inject(DomSanitizer);
  private readonly iconRegistry = inject(MatIconRegistry);

  constructor() {
    super();
    this.tester.activeDemo.set('material');
    this.tester.defineSet(SUPPORTED_ICONS);
    for (const icon of SUPPORTED_ICONS) {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(svgUrl(icon))
      );
    }
  }
}
