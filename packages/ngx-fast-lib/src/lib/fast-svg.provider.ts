import { Provider, makeEnvironmentProviders } from '@angular/core';
import {
  SvgLoadStrategy,
  SvgLoadStrategyImpl,
  SvgOptions,
  SvgOptionsToken,
  SvgRegistry,
} from '..';
import { FastSvgProviderOptions } from './provider-config.interface';

/**
 * @description
 * Use this function to register the FastSvg providers in your application.
 *
 * @param options {FastSvgProviderOptions} - The options for the FastSvg providers.
 * @return {EnvironmentProviders} - The providers for the FastSvg module.
 *
 * @example
 *
 * ```ts
 * bootstrapApplication(AppComponent, {
 *  providers: [
 *   provideFastSVG({
 *     url: (name: string) => `path/to/svg-assets/${name}.svg`,
 *   })
 * ]});
 * ```
 */
export const provideFastSVG = (options: FastSvgProviderOptions) => {
  const svgOptions: SvgOptions = {
    url: options.url,
    suspenseSvgString: options.suspenseSvgString || undefined,
    defaultSize: options.defaultSize || undefined,
  };

  const providers: Provider[] = [
    SvgRegistry,
    {
      provide: SvgLoadStrategy,
      useClass: options.svgLoadStrategy || SvgLoadStrategyImpl,
    },
    { provide: SvgOptionsToken, useValue: svgOptions },
  ];

  return makeEnvironmentProviders(providers);
};
