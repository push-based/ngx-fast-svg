import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { FastSvgComponent } from './fast-svg.component';
import { provideFastSVG } from './fast-svg.provider';
import { SvgLoadStrategy } from './token/svg-load.strategy.model';

class InlineSvgLoadStrategy implements SvgLoadStrategy {
  config(url: string): Observable<string> {
    return of(url);
  }

  load(): Observable<string> {
    return of('<svg viewBox="0 0 10 10"><circle r="5" /></svg>');
  }
}

describe('FastSvgComponent', () => {
  function render(name: string) {
    TestBed.configureTestingModule({
      providers: [
        provideFastSVG({
          url: (name: string) => `assets/${name}.svg`,
          svgLoadStrategy: InlineSvgLoadStrategy,
        }),
      ],
    });
    const fixture = TestBed.createComponent(FastSvgComponent);
    fixture.componentRef.setInput('name', name);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    return {
      img: () => host.querySelector('img'),
      href: () => host.querySelector('use')?.getAttribute('href'),
    };
  }

  afterEach(() => document.getElementById('svg-cache')?.remove());

  // `us`, `pe` and `se` are substrings of the suspense svg id `#suspense`
  it.each(['us', 'pe', 'se', 'account'])(
    'should load the svg named "%s" instead of keeping the suspense svg',
    (name) => {
      const { img, href } = render(name);

      expect(href()).toBe('#suspense');
      expect(img()).not.toBeNull();

      img()?.dispatchEvent(new Event('load'));

      expect(href()).toBe(`#${name}`);
      expect(img()).toBeNull();
    }
  );
});
