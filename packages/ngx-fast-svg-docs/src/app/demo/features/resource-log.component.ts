import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  signal,
} from '@angular/core';

interface LoggedRequest {
  file: string;
  initiator: string;
  durationMs: number;
}

/**
 * Lists icon requests the browser actually made, straight from the
 * Performance API. Client-only: nothing is observed during prerendering.
 */
@Component({
  selector: 'docs-resource-log',
  template: `
    <section class="resource-log" aria-live="polite">
      <header class="resource-log__header">
        <span class="text-caption">Icon requests</span>
        <span class="resource-log__count">{{ entries().length }}</span>
      </header>
      @if (entries().length) {
        <ol class="resource-log__list">
          @for (entry of entries(); track $index) {
            <li class="resource-log__item">
              <code>{{ entry.file }}</code>
              <span class="text-caption">{{ entry.initiator }} · {{ entry.durationMs }} ms</span>
            </li>
          }
        </ol>
      } @else {
        <p class="text-body-sm resource-log__empty">{{ emptyText() }}</p>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceLogComponent {
  /** Only requests whose URL contains this text are listed. */
  readonly match = input('svg-icons/');
  readonly emptyText = input('No icon requested yet.');

  protected readonly entries = signal<LoggedRequest[]>([]);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (typeof PerformanceObserver === 'undefined') {
        return;
      }
      const observer = new PerformanceObserver((list) => {
        const next = list
          .getEntries()
          .filter((e) => e.name.includes(this.match()))
          .map((e) => ({
            file: e.name.slice(e.name.lastIndexOf('/') + 1),
            initiator: (e as PerformanceResourceTiming).initiatorType,
            durationMs: Math.round(e.duration),
          }));
        if (next.length) {
          this.entries.update((current) => [...current, ...next]);
        }
      });
      observer.observe({ type: 'resource', buffered: true });
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
