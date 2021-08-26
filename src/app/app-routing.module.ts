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
  {
    path: 'educativo',
    loadChildren: () =>
      import('./pages/educativo/educativo.module').then(
        (m) => m.EducativoModule
      ),
  },
  {
    path: 'credifacil',
    loadChildren: () =>
      import('./pages/credifacil/credifacil.module').then(
        (m) => m.CredifacilModule
      ),
  },
  {
    path: 'cdat',
    loadChildren: () =>
      import('./pages/cdat/cdat.module').then((m) => m.CdatModule),
  },
  {
    path: 'contractuales',
    loadChildren: () =>
      import('./pages/contractuales/contractuales.module').then(
        (m) => m.ContractualesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
