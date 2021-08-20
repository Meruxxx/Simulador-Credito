import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbSelectModule,
} from '@nebular/theme';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { InformacionCreditoModule } from 'src/app/components/informacion-credito/informacion-credito.module';
import { ViviendaRoutingModule } from './vivienda-routing.module';
import { ViviendaPage } from './vivienda.page';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [ViviendaPage],
  imports: [
    CommonModule,
    ViviendaRoutingModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbLayoutModule,
    NgxMaskModule.forRoot(maskConfig),
    NbButtonGroupModule,
    NbCardModule,
    InformacionCreditoModule,
  ],
})
export class ViviendaModule {}
