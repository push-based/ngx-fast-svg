import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialIconListComponent } from './angular-material-icon-list.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AngularMaterialIconListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: AngularMaterialIconListComponent
      }
    ])
  ]
})
export class AngularMaterialIconListModule {

}
