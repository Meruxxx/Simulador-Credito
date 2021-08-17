import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComercioRoutingModule } from './comercio-routing.module';
import { ComercioPage } from './comercio.page';

@NgModule({
  declarations: [ComercioPage],
  imports: [CommonModule, ComercioRoutingModule],
})
export class ComercioModule {}
