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
import { EducativoRoutingModule } from './educativo-routing.module';
import { EducativoPage } from './educativo.page';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [EducativoPage],
  imports: [
    CommonModule,
    EducativoRoutingModule,
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
export class EducativoModule {}
