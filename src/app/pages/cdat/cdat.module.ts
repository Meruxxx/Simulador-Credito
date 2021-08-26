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
  NbSelectModule,
} from '@nebular/theme';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { InformacionCreditoModule } from 'src/app/components/informacion-credito/informacion-credito.module';
import { CdatRoutingModule } from './cdat-routing.module';
import { CdatPage } from './cdat.page';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [CdatPage],
  imports: [
    CommonModule,
    CdatRoutingModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbLayoutModule,
    NgxMaskModule.forRoot(maskConfig),
    NbButtonGroupModule,
    NbCardModule,
    NbRadioModule,
    InformacionCreditoModule,
  ],
})
export class CdatModule {}
