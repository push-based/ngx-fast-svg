import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { FEATURES } from './features';

@Component({
  selector: 'docs-features-layout',
  template: `
    <div class="features">
      <nav class="features__nav" aria-label="Features">
        <p class="text-subtitle docs__nav-title">Features</p>
        <ul class="docs__nav-list">
          @for (feature of features; track feature.slug) {
            <li>
              <a
                class="docs__nav-link"
                [routerLink]="['/demo/features', feature.slug]"
                routerLinkActive="active"
                >{{ feature.title }}</a
              >
            </li>
          }
        </ul>
      </nav>
      <div class="features__content">
        <router-outlet />
      </div>
    </div>
  `,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesLayoutComponent {
  protected readonly features = FEATURES;
}
