import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { InformacionCreditoComponent } from './informacion-credito.component';

@NgModule({
  declarations: [InformacionCreditoComponent],
  imports: [CommonModule, NbCardModule, NbButtonModule, NbInputModule],
  exports: [InformacionCreditoComponent],
})
export class InformacionCreditoModule {}
