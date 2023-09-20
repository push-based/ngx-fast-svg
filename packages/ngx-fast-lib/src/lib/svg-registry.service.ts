import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { SvgOptionsToken } from './token/svg-options.token';
import { suspenseSvg } from './token/default-token-values';
import { SvgLoadStrategy } from './token/svg-load.strategy.model';
import { SvgLoadStrategyImpl } from "./token/svg-load.strategy";

// @TODO compose svg in 1 sprite and fetch by id as before

interface SvgCache {
  name: string;
  viewBox: string;
}

function createDomParser(document: Document): (s: string) => HTMLElement {
  const e = document.createElement('DIV');
  return (s: string) => {
    e && (e.innerHTML = s);
    return e.firstChild as HTMLElement;
  };
}

function styleDomCacheForPerformance(el: HTMLElement): HTMLElement {
  /**
   * reduce paint area with width/height 0 and overflow hidden
   * fixed position of -2000px to always have it offscreen and outside any native trigger (viewport observer in content visibilities)
   * contain:content to leverage css perf features for older browsers not supporting content-visibility   * : auto to exclude it completely from styles recalculation
   */
  el.setAttribute(
    'style',
    `
      overflow: hidden;
      width: 0px;
      height: 0px;
      position: fixed;
      bottom: -2000px;
      contain: content;
      content-visibility: auto;
    `
  );
  return el;
}

@Injectable({ providedIn: 'root' })
export class SvgRegistry {
  private document = inject(DOCUMENT);
  private svgOptions = inject(SvgOptionsToken);

  private svgLoadStrategy =
    inject(SvgLoadStrategy, { optional: true }) // custom strategy if provided
    || new SvgLoadStrategyImpl(); // default strategy

  private readonly domParser = createDomParser(this.document);

  private readonly svgDomCache: HTMLElement = (() => {
    // The DOM cache could be already created on SSR or due to multiple instances of the registry
    const domCache =
      this.document.getElementById('svg-cache') ||
      this.domParser('<div id="svg-cache"></div>');
    styleDomCacheForPerformance(domCache);
    this.document.body.appendChild(domCache);
    return domCache;
  })();

  private readonly _svgHrefCache = new Map<string, BehaviorSubject<SvgCache>>();
  private readonly _cachedSvgs = new Set();

  public defaultSize = this.svgOptions?.defaultSize || '24';
  private _defaultViewBox = `0 0 ${this.defaultSize} ${this.defaultSize}`;

  public url = this.svgOptions.url;

  constructor() {
    // configure suspense svg
    const suspenseSvgId = this.svgId('suspense');
    if (!this._cachedSvgs.has(suspenseSvgId)) {
      this.cacheSvgInDOM(
        suspenseSvgId,
        this.svgOptions.suspenseSvgString || suspenseSvg
      );
    }

    this.hydrateFromDom();
  }

  private hydrateFromDom(): void {
    // hydrate DOM cache
    Array.from(this.svgDomCache.children).forEach((i) => {
      // add to fetchedSvgs
      this._cachedSvgs.add(i.id);
      // i.
      // publish to components and render it
      this.getSvgSubject(i.id).next({
        name: i.id,
        viewBox: i.getAttribute('viewBox') || this._defaultViewBox,
      });
    });
  }

  fetchSvg = (svgName: string): void => {
    const svgId = this.svgId(svgName);
    // if the svg is already fetched we return early
    if (this._cachedSvgs.has(svgId)) {
      return;
    }
    this._cachedSvgs.add(svgId);

    // trigger fetch
    this.svgLoadStrategy
      .load(this.svgOptions.url(svgName))
      .subscribe({
        next: (body: string) => this.cacheSvgInDOM(svgId, body),
        error: console.error
      });
  };

  isSvgCached(name: string): boolean {
    return this._cachedSvgs.has(this.svgId(name));
  }

  svgCache$(name: string): Observable<SvgCache> {
    // start by displaying the suspense svg immediately
    return this.getSvgSubject(this.svgId(name)).pipe(
      map((svg) => ({ name: `#${svg.name}`, viewBox: svg.viewBox }))
    );
  }

  private cacheSvgInDOM(svgId: string, svgString: string): void {
    // create HTML
    const svgElem = this.domParser(svgString);
    // parse the svg string and get a viewBox
    const viewBox = svgString.match(/viewBox="([^"]*)"/);

    // the SVG element needs to be accessible over a href and end with a specific anchor to select the element by id
    svgElem?.setAttribute && svgElem.setAttribute('id', svgId);
    this.svgDomCache.appendChild(svgElem);
    // notify subscribers about change
    this.getSvgSubject(svgId).next({
      name: svgId,
      viewBox: viewBox?.[1] || this._defaultViewBox,
    });
  }
  /*
  private removeSvgInDOM(svgId: string): void {
    this.svgDomCache.querySelector(`#${svgId}`)?.remove();
  }*/

  private getSvgSubject(svgId: string): BehaviorSubject<SvgCache> {
    if (!this._svgHrefCache.has(svgId)) {
      this._svgHrefCache.set(
        svgId,
        new BehaviorSubject<SvgCache>({
          name: this.svgId('suspense'),
          viewBox: this._defaultViewBox,
        })
      );
    }
    return this._svgHrefCache.get(svgId) as BehaviorSubject<SvgCache>;
  }

  // pattern has to be `<svgName>`
  private svgId(name: string): string {
    return `${name}`;
  }
}
