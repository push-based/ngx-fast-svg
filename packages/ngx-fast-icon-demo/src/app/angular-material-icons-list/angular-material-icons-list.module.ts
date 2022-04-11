import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialIconListComponent } from './angular-material-icon-list.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AngularMaterialIconListComponent],
  imports: [
    RouterModule.forChild([
  /*    {
        path:'',
        component: AngularMaterialIconListComponent
      },*/
    ]),

  ]
})
export class AngularMaterialIconsListModule {

}
