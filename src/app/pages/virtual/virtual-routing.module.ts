import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualPage } from './virtual.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualPageRoutingModule {}
