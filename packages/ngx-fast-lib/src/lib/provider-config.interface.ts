import { SvgOptions } from './token/svg-options.model';
import { Type } from '@angular/core';
import { SvgLoadStrategy } from './token/svg-load.strategy.model';

export interface FastSvgProviderOptions {
  url: SvgOptions['url'];
  defaultSize?: SvgOptions['defaultSize'];
  suspenseSvgString?: SvgOptions['suspenseSvgString'];
  svgLoadStrategy?: Type<SvgLoadStrategy>;
}
