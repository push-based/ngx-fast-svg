import { InjectionToken } from '@angular/core';
import { SvgOptions } from './svg-options.model';

export const SvgOptionsToken = new InjectionToken<SvgOptions>(
  '__SvgOptionsToken__',
  {
    providedIn: 'root',
    factory: () => ({
      url: () => '',
      defaultSize: undefined,
      suspenseSvgString: undefined,
    }),
  }
);
