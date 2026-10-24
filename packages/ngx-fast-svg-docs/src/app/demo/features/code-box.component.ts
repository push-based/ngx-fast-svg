import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SnippetName, SNIPPETS } from '../../content/generated/snippets';

/** A highlighted snippet from content/snippets with a copy button. */
@Component({
  selector: 'docs-code-box',
  template: `
    <figure class="code-box">
      <figcaption class="code-box__caption">
        <span class="text-caption">{{ title() || snippet() }}</span>
        <button type="button" class="pb-btn pb-btn-tertiary code-box__copy" (click)="copy()">
          {{ copied() ? 'Copied' : 'Copy' }}
        </button>
      </figcaption>
      <div class="prose code-box__body" [innerHTML]="html()"></div>
    </figure>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBoxComponent {
  readonly snippet = input.required<SnippetName>();
  readonly title = input<string>();

  private readonly sanitizer = inject(DomSanitizer);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  // Generated at build time from files in this repository.
  protected readonly html = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(SNIPPETS[this.snippet()])
  );
  protected readonly copied = signal(false);

  async copy() {
    const text = this.host.nativeElement.querySelector('pre')?.innerText ?? '';
    await navigator.clipboard.writeText(text);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 1500);
  }
}
