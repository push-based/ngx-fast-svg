import { ModuleWithProviders, NgModule } from '@angular/core';
import { FastSvgComponent } from './fast-svg.component';
import { FastSvgProviderOptions } from './provider-config.interface';
import { provideFastSVG } from './fast-svg.provider';

@NgModule({
  imports: [FastSvgComponent],
  exports: [FastSvgComponent],
})
export class FastSvgModule {
  static forRoot(
    options: FastSvgProviderOptions
  ): ModuleWithProviders<FastSvgModule> {
    return {
      ngModule: FastSvgModule,
      providers: [provideFastSVG(options)],
    };
  }

  static forChild(): ModuleWithProviders<FastSvgModule> {
    return {
      ngModule: FastSvgModule,
      providers: [],
    };
  }
}
