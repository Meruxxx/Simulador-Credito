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
import { CreditoRoutingModule } from './credito-routing.module';
import { CreditoPage } from './credito.page';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [CreditoPage],
  imports: [
    CommonModule,
    CreditoRoutingModule,
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
export class CreditoModule {}
