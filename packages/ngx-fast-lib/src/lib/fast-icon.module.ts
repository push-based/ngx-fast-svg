import { ModuleWithProviders, NgModule } from '@angular/core';
import { FastSvgComponent } from './fast-icon.component';
import { SvgRegistry } from './icon-registry.service';
import { CommonModule } from '@angular/common';
import { FastSvgProviderOptions } from './provider-config.interface';
import { SvgLoadStrategyImpl } from './token/icon-load.strategy';
import { SvgLoadStrategy } from './token/icon-load.strategy.model';
import { SvgOptionsToken } from './token/icon-options.token';
import { SvgOptions } from './token/icon-options.model';

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
