/* eslint-disable @typescript-eslint/ban-types */
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SvgRegistry } from './svg-registry.service';
import { isPlatformServer } from '@angular/common';
import { getZoneUnPatchedApi } from './internal/get-zone-unpatched-api';

/**
 * getZoneUnPatchedApi
 *
 * @description
 *
 * This function returns the zone un-patched API for the a specific Browser API.
 * If no element is passed the window is used instead
 *
 * @param name {string} - The name of the API to check.
 * @param elem {any} - The elem to get un-patched API from.
 * @return {Function} - The zone un-patched API in question.
 *
 */

const addEventListener = (
  elem: HTMLElement,
  name: string,
  listener: Function
) => getZoneUnPatchedApi('addEventListener', elem).bind(elem)(name, listener);

let element: HTMLElement = undefined as any;
function createGetImgFn(renderer: Renderer2): (src: string) => HTMLElement {
  if (element === undefined) {
    element = renderer.createElement('img');
    element.setAttribute(
      'style',
      'display: none; contain: content; content-visibility: auto;'
    );
    element.setAttribute('loading', 'lazy');
    element.setAttribute('width', '0');
    element.setAttribute('height', '0');
  }

  return (src: string) => {
    const e = element.cloneNode(true) as HTMLElement;
    e.setAttribute('src', src);
    return e;
  };
}

/**
 * ngx-fast-svg enables lazy loading features of the browser for SVG.
 * It also manages the caching of SVG's in the DOM for multiple usage and different stylings
 * This component also Supports lazy loading with SSR and http transfer cache
 * */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'fast-svg',
  template: `
    <!-- Svg - Displayed lazy or at bootstrap time from cache due to SSR or already loaded resources
    We use a DOM caching mechanism to display svg over the 'use' tag and an href attribute.
    - We display an empty SVG at the beginning. Invisible and without dimensions
    - On View init the size is applied even if no svg is loaded to avoid flickering in dimensions
    - A suspense svg is displayed at the same time to reduce visual flickering
    - when the real svg is loaded it is directly cached in the DOM and displayed over a new href value
     -->
    <svg class="fast-svg">
      <use></use>
    </svg>
  `,
  styles: [
    `
      :host {
        display: contents;
      }

      .fast-svg {
        margin: 3px;
        /* leverage css perf features for older browsers not supporting content-visibility */
        contain: content;
        /* leverage contain:content improvements, exclude node completely from recalc styles if offscreen */
        content-visibility: auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FastSvgComponent implements AfterViewInit, OnDestroy {
  private sub = new Subscription();
  private readonly getImg = createGetImgFn(this.renderer);

  @Input()
  name = '';
  @Input()
  size: string = this.registry.defaultSize;
  @Input()
  width = '';
  @Input()
  height = '';
  // When the browser loaded the svg resource we trigger the caching mechanism
  // re-fetch -> cache-hit -> get SVG -> cache in DOM
  loadedListener = () => {
    this.registry.fetchSvg(this.name);
  };

  constructor(
    @Inject(PLATFORM_ID)
    private platform: Record<string, unknown>,
    private renderer: Renderer2,
    private registry: SvgRegistry,
    private element: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit() {
    if (!this.name) {
      throw new Error('svg component needs a name to operate');
    }
    // Setup view refs and init them
    const elem = this.element.nativeElement;

    const svg = elem.querySelector('svg') as SVGElement;
    // apply size
    if (this.size && svg) {
      // We apply fixed dimensions
      // Additionally to SEO rules, to avoid any scroll flicker caused by `content-visibility:auto` defined in component styles
      svg.setAttribute('width', this.width || this.size);
      svg.setAttribute('height', this.height || this.width || this.size);
    }

    let img: HTMLImageElement | null = null;

    // if svg is not in cache we append
    if (!this.registry.isSvgCached(this.name)) {
      /**
       CSR - Browser native lazy loading hack

       We use an img element here to leverage the browsers native features:
       - lazy loading (loading="lazy") to only load the svg that are actually visible
       - priority hints to down prioritize the fetch to avoid delaying the LCP

       While the SVG is loading we display a fallback SVG.
       After the image is loaded we remove it from the DOM. (IMG load event)
       When the new svg arrives we append it to the template.

       Note:
       - the image is styled with display none. this prevents any loading of the resource ever.
       on component bootstrap we decide what we want to do. when we remove display none it performs the browser native behavior
       - the image has 0 height and with and containment as well as contnet-visibility to recuce any performance impact


       Edge cases:
       - only resources that are not loaded in the current session of the browser will get lazy loaded (same URL to trigger loading is not possible)
       - already loaded resources will get emitted from the cache immediately, even if loading is set to lazy :o
       - the image needs to have display other than none

       */
      const i = this.getImg(this.registry.url(this.name));
      this.renderer.appendChild(this.element.nativeElement, i);

      // get img
      img = elem.querySelector('img') as HTMLImageElement;
      addEventListener(img, 'load', this.loadedListener);
    }

    // Listen to svg changes
    // This potentially could already receive the svg from the cache and drop the img from the DOM before it gets activated for lazy loading.
    // NOTICE:
    // If the svg is already cached the following code will execute synchronously. This gives us the chance to add
    this.sub = this.registry.svgHref$(this.name).subscribe((href) => {
      // The first child is the `use` tag. The value of href gets displayed as SVG
      svg.children[0].setAttribute('href', href);

      // early exvit no image
      if (!img) return;

      // If the img is present
      // and the name in included in the href (svg is fully loaded, not only the suspense svg)
      // Remove the element from the DOM as it is no longer needed
      if (href.includes(this.name)) {
        img.removeEventListener('load', this.loadedListener);
        // removeEventListener.bind(img, 'load', this.loadedListener);
        img.remove();
      }
    });

    // SSR
    if (isPlatformServer(this.platform)) {
      // if SSR load svgs on server => ends up in DOM cache and ships to the client
      this.registry.fetchSvg(this.name);
    }
    // CSR
    else {
      // Activate the lazy loading hack
      // Loading is triggered in the template over loading="lazy" and onload
      // Than the same image is fetched over fromFetch and rendered as SVG. (This will result in a cache hit for this svg)
      //
      // If the img is present activate it
      img && img.style.setProperty('display', 'block');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.element.nativeElement
      .querySelector('img')
      ?.removeEventListener('load', this.loadedListener);
  }
}
