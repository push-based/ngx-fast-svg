import { TestBed } from '@angular/core/testing';
import { Observable, of, Subject } from 'rxjs';
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

/** Resolves urls only when `urls` emits, to exercise a non-synchronous config(). */
const urls = new Subject<string>();

class AsyncConfigSvgLoadStrategy extends InlineSvgLoadStrategy {
  override config(): Observable<string> {
    return urls;
  }
}

describe('FastSvgComponent', () => {
  function render(name: string, svgLoadStrategy = InlineSvgLoadStrategy) {
    TestBed.configureTestingModule({
      providers: [
        provideFastSVG({
          url: (name: string) => `assets/${name}.svg`,
          svgLoadStrategy,
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

  it('should point the lazy-loading helper img at the configured url', () => {
    const { img } = render('account');

    expect(img()?.getAttribute('src')).toBe('assets/account.svg');
  });

  it('should activate the helper img so the browser loads it', () => {
    const { img } = render('account');

    // display:none on the template element is what stops the browser fetching
    // it; the component flips it once the url is known.
    expect(img()?.style.getPropertyValue('display')).toBe('block');
  });

  // No detectChanges() after the url resolves: resolving the url in the
  // subscription rather than through a signal means the img is appended as
  // soon as config() emits, instead of on the next change detection cycle.
  it('should append the helper img as soon as an asynchronous config() resolves', () => {
    const { img, href } = render('account', AsyncConfigSvgLoadStrategy);

    expect(img()).toBeNull();

    urls.next('assets/account.svg');

    expect(img()?.getAttribute('src')).toBe('assets/account.svg');
    expect(img()?.style.getPropertyValue('display')).toBe('block');

    img()?.dispatchEvent(new Event('load'));

    expect(href()).toBe('#account');
    expect(img()).toBeNull();
  });
});
