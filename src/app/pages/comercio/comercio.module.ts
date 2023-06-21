import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbRadioModule,
  NbSelectModule
} from '@nebular/theme';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { InformacionCreditoModule } from 'src/app/components/informacion-credito/informacion-credito.module';
import { ComercioRoutingModule } from './comercio-routing.module';
import { ComercioPage } from './comercio.page';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [ComercioPage],
  imports: [
    CommonModule,
    ComercioRoutingModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbLayoutModule,
    NbButtonGroupModule,
    NbCardModule,
    InformacionCreditoModule,
    NbRadioModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
})
export class ComercioModule {}
