import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  OnDestroy,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

import { DocPage } from '../content/content.model';
import { DOCS_INDEX } from '../content/generated/docs-index';
import { DocsState } from './docs-state.service';

@Component({
  selector: 'docs-page',
  template: `
    <article class="prose" [innerHTML]="html()"></article>

    <nav class="doc-pager" aria-label="Previous and next page">
      @if (prev(); as p) {
        <a class="doc-pager__link doc-pager__link--prev" [routerLink]="['/docs', p.slug]">
          <span class="text-caption">Previous</span>
          <span class="doc-pager__title">{{ p.title }}</span>
        </a>
      } @else {
        <span></span>
      }
      @if (next(); as n) {
        <a class="doc-pager__link doc-pager__link--next" [routerLink]="['/docs', n.slug]">
          <span class="text-caption">Next</span>
          <span class="doc-pager__title">{{ n.title }}</span>
        </a>
      }
    </nav>
  `,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Delegated: catches clicks on links inside the generated HTML (Enter on a link fires click too).
  host: { '(click)': 'onClick($event)' },
})
export class DocPageComponent implements OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly router = inject(Router);
  private readonly state = inject(DocsState);

  /** Resolved by the route; see docs.routes.ts. */
  readonly page = input.required<DocPage>();

  // The HTML is generated at build time from Markdown files in this repository.
  protected readonly html = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.page().html)
  );

  private readonly index = computed(() =>
    DOCS_INDEX.findIndex((d) => d.slug === this.page().slug)
  );
  protected readonly prev = computed(() => DOCS_INDEX[this.index() - 1] ?? null);
  protected readonly next = computed(() => DOCS_INDEX[this.index() + 1] ?? null);

  constructor() {
    effect(() => this.state.page.set(this.page()));
  }

  ngOnDestroy() {
    this.state.page.set(null);
  }

  /** Routes relative links inside the generated HTML through the router. */
  protected onClick(event: MouseEvent) {
    const anchor = (event.target as HTMLElement).closest('a');
    const href = anchor?.getAttribute('href');
    if (!href || /^(https?:|mailto:|#)/.test(href) || anchor?.target === '_blank') {
      return;
    }
    event.preventDefault();
    this.router.navigateByUrl(`/${href.replace(/^\//, '')}`);
  }
}
