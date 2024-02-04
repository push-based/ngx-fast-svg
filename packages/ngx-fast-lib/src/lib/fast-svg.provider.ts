import { Provider } from '@angular/core';
import { SvgLoadStrategy, SvgOptions, SvgOptionsToken } from '..';
import { FastSvgProviderOptions } from './provider-config.interface';

/**
 * @description
 * Use this function to register the FastSvg providers in your application.
 *
 * @param options {FastSvgProviderOptions} - The options for the FastSvg providers.
 * @return { Provider[] } - The providers for the FastSvg module.
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
export const provideFastSVG = (options: FastSvgProviderOptions): Provider[] => {
  const providers: Provider[] = [
    {
      provide: SvgOptionsToken,
      useValue: {
        url: options.url,
        suspenseSvgString: options.suspenseSvgString || undefined,
        defaultSize: options.defaultSize || undefined,
      } as SvgOptions,
    },
  ];

  if (options.svgLoadStrategy) {
    providers.push(
      { provide: SvgLoadStrategy, useClass: options.svgLoadStrategy } as Provider
    );
  }

  return providers;
};
