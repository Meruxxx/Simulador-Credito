import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredifacilPage } from './credifacil.page';

const routes: Routes = [{ path: '', component: CredifacilPage }];
// ¨¨¨¨
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredifacilRoutingModule {}
