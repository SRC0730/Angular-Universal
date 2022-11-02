import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/index', pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
