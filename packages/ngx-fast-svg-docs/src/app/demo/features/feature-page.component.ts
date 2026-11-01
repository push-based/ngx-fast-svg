import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Header shared by every feature page. */
@Component({
  selector: 'docs-feature-page',
  template: `
    <header class="feature__header">
      <p class="text-subtitle feature__eyebrow">Feature</p>
      <h1 class="text-section-title-lg feature__title">{{ title() }}</h1>
      <p class="text-lead feature__lead">{{ lead() }}</p>
    </header>
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePageComponent {
  readonly title = input.required<string>();
  readonly lead = input.required<string>();
}
