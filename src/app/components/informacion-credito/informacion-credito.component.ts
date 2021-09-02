import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { EmailService } from 'src/app/core/services/email.service';
import { EnviarCorreoPage } from './../../components/enviar-correo/enviar-correo.page';

@Component({
  selector: 'app-informacion-credito',
  templateUrl: './informacion-credito.component.html',
  styleUrls: ['./informacion-credito.component.css'],
  providers: [CurrencyPipe]
})
export class InformacionCreditoComponent {
  @Input() valorCuota!: number;
  @Input() title!: any;
  @Input() intereses!: any;
  @Input() interesesEA!: any;
  @Input() TotalAhorro!: any;
  @Input() TotalCredito!: any;
  @Input() tipoSolicitud!: any;

  _Tem: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private dialogService: NbDialogService,
    private currencyPipe: CurrencyPipe
  ) {

  }

  get informacion() {
    if (this.title === 'Informción Crédito') {
      return {
        titleLabel: 'Valor de la cuota',
        title: this.valorCuota,
        footerFirstLabel: 'Interés mensuales' ,
        footerFirstValue:  `${this.intereses}%`,
        footerSecondLabel: 'Tasa efectiva anual',
        footerSecondValue: this.interesesEA,
        footerThirdLabel: 'Pago total del crédito',
        footerThirdValue: this.toCurrency(this.TotalCredito),
      }
    } else {
      return {
        titleLabel: 'Valor de la ganacia',
        title: this.TotalAhorro,
        footerFirstLabel: '% Tasa EA',
        footerFirstValue: `${this.intereses}%`,
        footerSecondLabel: 'Tasa efectiva anual',
        footerSecondValue: this.toCurrency(this.valorCuota),
      }

    }
  }

  
  open(): void {
        this.dialogService.open(EnviarCorreoPage, {
      autoFocus: true,
      context: {
        tipo_contacto:this.title,
        tipo_solicitud:this.tipoSolicitud
      }
    });
  }

  private toCurrency(value: number): string {
    return this.currencyPipe.transform(value) || '';
  }
}
