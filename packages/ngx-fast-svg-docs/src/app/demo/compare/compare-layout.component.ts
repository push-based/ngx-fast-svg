import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { COMPARE_BASE, COMPARE_LIB_NAME, COMPARE_LIBS } from '../shared/constants';
import { IconTester } from './icon-tester.service';

@Component({
  selector: 'docs-compare-layout',
  template: `
    <div class="compare" [attr.data-lib]="tester.activeDemo() ?? null">
      <nav class="compare__nav" aria-label="Libraries">
        <p class="text-subtitle docs__nav-title">Libraries</p>
        <ul class="docs__nav-list">
          @for (lib of libs; track lib) {
            <li>
              <a
                class="docs__nav-link compare__nav-link"
                [attr.data-lib]="lib"
                [routerLink]="[base, lib, tester.activeLayoutSetting(), tester.iconListCount()]"
                routerLinkActive="active"
                >{{ names[lib] }}</a
              >
            </li>
          }
        </ul>
      </nav>
      <div class="compare__content">
        <router-outlet />
      </div>
    </div>
  `,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareLayoutComponent {
  protected readonly tester = inject(IconTester);
  protected readonly libs = COMPARE_LIBS;
  protected readonly names = COMPARE_LIB_NAME;
  protected readonly base = COMPARE_BASE;
}
