import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'calc',
    loadChildren: () => import('./pages/calc/calc.module').then( m => m.CalcPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'jft',
    loadChildren: () => import('./pages/jft/jft.module').then( m => m.JftPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/listfull/listfull.module').then( m => m.ListfullPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map-search/map-search.module').then( m => m.MapSearchPageModule)
  },
  {
    path: 'mapmodal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'virtual',
    loadChildren: () => import('./pages/virtual/virtual.module').then( m => m.VirtualPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
