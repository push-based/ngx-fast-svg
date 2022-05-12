import { ModuleWithProviders, NgModule } from '@angular/core';
import { FastSvgComponent } from './fast-svg.component';
import { SvgRegistry } from './svg-registry.service';
import { CommonModule } from '@angular/common';
import { FastSvgProviderOptions } from './provider-config.interface';
import { SvgLoadStrategyImpl } from './token/svg-load.strategy';
import { SvgLoadStrategy } from './token/svg-load.strategy.model';
import { SvgOptionsToken } from './token/svg-options.token';
import { SvgOptions } from './token/svg-options.model';

@NgModule({
  imports: [CommonModule],
  declarations: [FastSvgComponent],
  exports: [FastSvgComponent],
})
export class FastSvgModule {
  static forRoot(
    providers: FastSvgProviderOptions
  ): ModuleWithProviders<FastSvgModule> {
    const svgOptions: SvgOptions = {
      url: providers.url,
    };
    providers?.suspenseSvgString &&
      (svgOptions.suspenseSvgString = providers.suspenseSvgString);
    providers?.defaultSize && (svgOptions.defaultSize = providers.defaultSize);

    return {
      ngModule: FastSvgModule,
      providers: [
        {
          provide: SvgLoadStrategy,
          useClass: providers.svgLoadStrategy || SvgLoadStrategyImpl,
        },
        {
          provide: SvgOptionsToken,
          useValue: svgOptions,
        },
        SvgRegistry,
      ],
    };
  }

  static forChild(): ModuleWithProviders<FastSvgModule> {
    return {
      ngModule: FastSvgModule,
      providers: [],
    };
  }
}
