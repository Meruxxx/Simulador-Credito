import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViviendaPage } from './vivienda.page';

const routes: Routes = [{ path: '', component: ViviendaPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViviendaRoutingModule {}
