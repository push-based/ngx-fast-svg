import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { DOCS_INDEX } from '../content/generated/docs-index';
import { DocsState } from './docs-state.service';

@Component({
  selector: 'docs-layout',
  template: `
    <div class="container docs">
      <nav class="docs__nav" aria-label="Documentation">
        <p class="text-subtitle docs__nav-title">Documentation</p>
        <ul class="docs__nav-list">
          @for (doc of docs; track doc.slug) {
            <li>
              <a
                class="docs__nav-link"
                [routerLink]="['/docs', doc.slug]"
                routerLinkActive="active"
                >{{ doc.title }}</a
              >
            </li>
          }
        </ul>
      </nav>

      <div class="docs__content">
        <router-outlet />
      </div>

      <aside class="docs__toc" aria-label="On this page">
        @if (state.page(); as page) {
          @if (page.toc.length) {
            <p class="text-subtitle docs__nav-title">On this page</p>
            <ul class="docs__toc-list">
              @for (entry of page.toc; track entry.id) {
                <li [class.docs__toc-item--sub]="entry.level === 3">
                  <a
                    class="docs__toc-link"
                    [routerLink]="['/docs', page.slug]"
                    [fragment]="entry.id"
                    >{{ entry.text }}</a
                  >
                </li>
              }
            </ul>
          }
        }
      </aside>
    </div>
  `,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsLayoutComponent {
  protected readonly docs = DOCS_INDEX;
  protected readonly state = inject(DocsState);
}
