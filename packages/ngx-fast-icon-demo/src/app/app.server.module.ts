import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FastSvgModule } from '@push-based/ngx-fast-svg';
import { SvgLoadStrategySsr } from './ngx-fast-icon-ssr/icon-load.ssr.strategy';
@NgModule({
  declarations: [],
  imports: [
    AppModule,
    /**
     * **🚀 Perf Tip for LCP, CLS:**
     *
     * Setup SSR to increase LCP by shipping rendered HTML on first load.
     */
    ServerModule,
    ServerTransferStateModule,
    FastSvgModule.forRoot({
      svgLoadStrategy: SvgLoadStrategySsr,
      url: (name: string) => `assets/svg-icons/${name}.svg`,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
