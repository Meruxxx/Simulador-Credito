import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { InformacionCreditoComponent } from './informacion-credito.component';
@NgModule({
  declarations: [InformacionCreditoComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
  ],
  exports: [InformacionCreditoComponent],
})
export class InformacionCreditoModule {}
