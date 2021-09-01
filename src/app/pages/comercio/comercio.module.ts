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
import { InformacionCreditoModule } from 'src/app/components/informacion-credito/informacion-credito.module';
import { ComercioRoutingModule } from './comercio-routing.module';
import { ComercioPage } from './comercio.page';


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
  ],
})
export class ComercioModule {}
