import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'credito',
    pathMatch: 'full',
  },
  {
    path: 'credito',
    loadChildren: () =>
      import('./pages/credito/credito.module').then((m) => m.CreditoModule),
  },
  {
    path: 'comercio',
    loadChildren: () =>
      import('./pages/comercio/comercio.module').then((m) => m.ComercioModule),
  },
  {
    path: 'vivienda',
    loadChildren: () =>
      import('./pages/vivienda/vivienda.module').then((m) => m.ViviendaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
