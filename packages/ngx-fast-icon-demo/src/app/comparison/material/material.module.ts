import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MaterialComponent } from './material.component';

@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: MaterialComponent,
      },
    ]),
  ],
})
export class MaterialComponentModule {}
