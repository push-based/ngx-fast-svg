import { SvgOptions } from './token/icon-options.model';
import { Type } from '@angular/core';
import { SvgLoadStrategy } from './token/icon-load.strategy.model';

export interface FastSvgProviderOptions {
  url: SvgOptions['url'];
  defaultSize?: SvgOptions['defaultSize'];
  suspenseSvgString?: SvgOptions['suspenseSvgString'];
  svgLoadStrategy?: Type<SvgLoadStrategy>;
}
