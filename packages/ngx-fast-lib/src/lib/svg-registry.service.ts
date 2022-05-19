import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { SvgOptionsToken } from './token/svg-options.token';
import { suspenseSvg } from './token/default-token-values';
import { SvgOptions } from './token/svg-options.model';
import { SvgLoadStrategy } from './token/svg-load.strategy.model';

// @TODO compose svgs in 1 sprite and fetch by id as before

const element: HTMLElement | undefined = undefined;

function createDomParser(document: Document): (s: string) => HTMLElement {
  const e = element || document.createElement('DIV');
  return (s: string) => {
    e && (e.innerHTML = s);
    return e.firstChild as HTMLElement;
  };
}

@Injectable()
export class SvgRegistry {
  private readonly domParser = createDomParser(this.document);
  private readonly svgDomCache: HTMLElement = (() => {
    // The DOM cache could be already created on SSR or due to multiple instances of the registry
    const domCache =
      this.document.getElementById('svg-cache') ||
      this.domParser(`<template id="svg-cache"></template>`);
    this.document.body.appendChild(domCache);
    return domCache;
  })();

  private readonly _svgHrefCache = new Map<string, BehaviorSubject<string>>();
  private readonly _cachedSvgs = new Set();

  public defaultSize = this.svgOptions?.defaultSize || '24';
  public url = this.svgOptions.url;

  constructor(
    @Optional()
    @Inject(DOCUMENT)
    private document: Document,
    @Optional()
    @Inject(SvgLoadStrategy)
    private svgLoadStrategy: SvgLoadStrategy,
    @Optional()
    @Inject(SvgOptionsToken)
    private svgOptions: SvgOptions
  ) {
    // configure suspense svg
    const suspenseSvgId = this.svgId('suspense');
    !this._cachedSvgs.has(suspenseSvgId) &&
      this.cacheSvgInDOM(
        suspenseSvgId,
        this.svgOptions.suspenseSvgString || suspenseSvg
      );

    this.hydrateFromDom();
  }

  private hydrateFromDom(): void {
    // hydrate DOM cache
    Array.from(this.svgDomCache.children).forEach((i) => {
      // add to fetchedSvgs
      this._cachedSvgs.add(i.id);
      // publish to components and render it
      this.getSvgSubject(i.id).next(i.id);
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
      .subscribe(
        (body: string) => this.cacheSvgInDOM(svgId, body),
        console.error
      );
  };

  isSvgCached(name: string): boolean {
    return this._cachedSvgs.has(this.svgId(name));
  }

  svgHref$(name: string): Observable<string> {
    // start by displaying the suspense svg immediately
    return this.getSvgSubject(this.svgId(name)).pipe(map((id) => `#${id}`));
  }

  private cacheSvgInDOM(svgId: string, svgString: string): void {
    // create HTML
    const svgElem = this.domParser(svgString);

    // the SVG element needs to be accessible over a href and end with a specific anchor to select the element by id
    svgElem?.setAttribute && svgElem.setAttribute('id', svgId);
    this.svgDomCache.appendChild(svgElem);
    // notify subscribers about change
    this.getSvgSubject(svgId).next(svgId);
  }
  /*
  private removeSvgInDOM(svgId: string): void {
    this.svgDomCache.querySelector(`#${svgId}`)?.remove();
  }*/

  private getSvgSubject(svgId: string): BehaviorSubject<string> {
    if (!this._svgHrefCache.has(svgId)) {
      this._svgHrefCache.set(
        svgId,
        new BehaviorSubject<string>(this.svgId('suspense'))
      );
    }
    return this._svgHrefCache.get(svgId) as BehaviorSubject<string>;
  }

  // pattern has to be `<svgName>`
  private svgId(name: string): string {
    return `${name}`;
  }
}
