import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDialogModule, NbInputModule } from '@nebular/theme';
import { EnviarCorreoModule } from '../enviar-correo/enviar-correo.module';
import { InformacionCreditoComponent } from './informacion-credito.component';
@NgModule({
  declarations: [InformacionCreditoComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
    EnviarCorreoModule,
    NbDialogModule.forRoot(),
  ],
  exports: [InformacionCreditoComponent],
})
export class InformacionCreditoModule {}
