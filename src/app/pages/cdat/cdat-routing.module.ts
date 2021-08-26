import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdatPage } from './cdat.page';

const routes: Routes = [{ path: '', component: CdatPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdatRoutingModule {}
