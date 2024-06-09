import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListfullPage } from './listfull.page';

const routes: Routes = [
  {
    path: '',
    component: ListfullPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListfullPageRoutingModule {}
