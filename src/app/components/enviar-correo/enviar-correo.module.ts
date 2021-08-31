import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { EnviarCorreoPage } from './enviar-correo.page';

@NgModule({
  declarations: [
    EnviarCorreoPage
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
  ],
  exports: [EnviarCorreoPage]
})
export class EnviarCorreoModule { }
