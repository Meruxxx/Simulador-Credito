import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViviendaRoutingModule } from './vivienda-routing.module';
import { ViviendaPage } from './vivienda.page';

@NgModule({
  declarations: [ViviendaPage],
  imports: [CommonModule, ViviendaRoutingModule],
})
export class ViviendaModule {}
