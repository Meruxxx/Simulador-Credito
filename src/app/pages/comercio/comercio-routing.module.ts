import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComercioPage } from './comercio.page';

const routes: Routes = [{ path: '', component: ComercioPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComercioRoutingModule {}
