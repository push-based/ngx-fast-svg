import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FastSvgModule } from '@ngx-fast-icon';
import { FastIconRouteComponent } from './fast-icon.component';

@NgModule({
  declarations: [FastIconRouteComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FastIconRouteComponent,
      },
    ]),
    CommonModule,
    FastSvgModule.forRoot({
      url: (name: string) => `assets/svg-icons/${name}.svg`,
    }),
  ],
})
export class FastIconRouteModule {}
