import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OkPage } from './ok.page';

const routes: Routes = [
  {
    path: '',
    component: OkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OkPageRoutingModule {}
