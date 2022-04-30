import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IconOptionsToken } from './token/icon-options.token';
import { suspenseIcon } from './token/default-token-values';
import { IconOptions } from './token/icon-options.model';
import { IconLoadStrategy } from './token/icon-load.strategy.model';

// @TODO compose icons in 1 sprite and fetch by id as before

const element: HTMLElement | undefined = undefined;

function createDomParser(document: Document): (s: string) => HTMLElement {
  const e = element || document.createElement('DIV');
  return (s: string) => {
    e && (e.innerHTML = s);
    return e.firstChild as HTMLElement;
  };
}

@Injectable()
export class IconRegistry {
  private readonly domParser = createDomParser(this.document);
  private readonly svgDomCache: HTMLElement = (() => {
    // The DOM cache could be already created on SSR or due to multiple instances of the registry
    const domCache =
      this.document.getElementById('svg-cache') ||
      this.domParser(`<template id="svg-cache"></template>`);
    this.document.body.appendChild(domCache);
    return domCache;
  })();

  private readonly _iconHrefCache = new Map<string, BehaviorSubject<string>>();
  private readonly _cachedIcons = new Set();

  public defaultSize = this.iconOptions?.defaultSize || '24';
  public url = this.iconOptions.url;

  constructor(
    @Optional()
    @Inject(DOCUMENT)
    private document: Document,
    @Optional()
    @Inject(IconLoadStrategy)
    private iconLoadStrategy: IconLoadStrategy,
    @Optional()
    @Inject(IconOptionsToken)
    private iconOptions: IconOptions
  ) {
    // configure suspense icon
    const suspenseIconId = this.iconId('suspense');
    !this._cachedIcons.has(suspenseIconId) &&
      this.cacheSvgInDOM(
        suspenseIconId,
        this.iconOptions.suspenseIconString || suspenseIcon
      );

    this.hydrateFromDom();
  }

  private hydrateFromDom(): void {
    // hydrate DOM cache
    Array.from(this.svgDomCache.children).forEach((i) => {
      // add to fetchedIcons
      this._cachedIcons.add(i.id);
      // publish to components and render it
      this.getIconSubject(i.id).next(i.id);
    });
  }

  fetchIcon = (iconName: string): void => {
    const iconId = this.iconId(iconName);
    // if the svg is already fetched we return early
    if (this._cachedIcons.has(iconId)) {
      return;
    }
    this._cachedIcons.add(iconId);

    // trigger fetch
    this.iconLoadStrategy
      .load(this.iconOptions.url(iconName))
      .subscribe(
        (body: string) => this.cacheSvgInDOM(iconId, body),
        console.error
      );
  };

  isIconCached(name: string): boolean {
    return this._cachedIcons.has(this.iconId(name));
  }

  iconHref$(name: string): Observable<string> {
    // start by displaying the suspense icon immediately
    return this.getIconSubject(this.iconId(name)).pipe(map((id) => `#${id}`));
  }

  private cacheSvgInDOM(iconId: string, svgString: string): void {
    // create HTML
    const svgElem = this.domParser(svgString);

    // the SVG element needs to be accessible over a href and end with a specific anchor to select the element by id
    svgElem?.setAttribute && svgElem.setAttribute('id', iconId);
    this.svgDomCache.appendChild(svgElem);
    // notify subscribers about change
    this.getIconSubject(iconId).next(iconId);
  }
  /*
  private removeSvgInDOM(iconId: string): void {
    this.svgDomCache.querySelector(`#${iconId}`)?.remove();
  }*/

  private getIconSubject(iconId: string): BehaviorSubject<string> {
    if (!this._iconHrefCache.has(iconId)) {
      this._iconHrefCache.set(
        iconId,
        new BehaviorSubject<string>(this.iconId('suspense'))
      );
    }
    return this._iconHrefCache.get(iconId) as BehaviorSubject<string>;
  }

  // pattern has to be `<iconName>`
  private iconId(name: string): string {
    return `${name}`;
  }
}
