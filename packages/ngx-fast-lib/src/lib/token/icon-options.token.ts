import { InjectionToken } from '@angular/core';
import { SvgOptions } from './icon-options.model';

export const SvgOptionsToken = new InjectionToken<SvgOptions>(
  '__SvgOptionsToken__'
);
