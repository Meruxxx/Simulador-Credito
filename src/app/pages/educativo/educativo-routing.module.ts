import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducativoPage } from './educativo.page';

const routes: Routes = [{ path: '', component: EducativoPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducativoRoutingModule {}
