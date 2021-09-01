import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbToastrModule,
} from '@nebular/theme';
import { EnviarCorreoPage } from './enviar-correo.page';

@NgModule({
  declarations: [EnviarCorreoPage],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    NbToastrModule.forRoot(),
  ],
  exports: [EnviarCorreoPage],
})
export class EnviarCorreoModule {}
