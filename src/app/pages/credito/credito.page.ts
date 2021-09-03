import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { TipoDeuda } from 'src/app/core/types/credito.types';
import { CALCULOS_UTILS } from 'src/app/core/utils/calculos.utils';

@Component({
  templateUrl: './credito.page.html',
  styleUrls: ['./credito.page.scss'],
})
export class CreditoPage {
  isBold = false;
  isItalic = true;
  isUnderline = false;
  title = 'Informción Crédito';
  cuota: number = 0;
  _Tem: number = 1;
  selectedItemNgModel: any;
  valorCuota = 0;
  interes = 0;
  interesEA = 0;
  totalCredito = 0;
  haSimulado = false;
  form!: FormGroup;

  options: any = [
    {
      text: '1 año',
      value: 12,
    },
    {
      text: '2 años',
      value: 24,
    },
    {
      text: '3 años',
      value: 36,
    },
    {
      text: '5 años',
      value: 60,
    },
    {
      text: '6 años',
      value: 72,
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService
  ) {
    this.form = formBuilder.group({
      tipoDeuda: [null, [Validators.required]],
      montoPrestamo: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      numeroCuotas: ['', Validators.required],
      plazo: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      valorCuota: [''],
    });
  }

  get montoPrestamo() {
    return this.form.controls['montoPrestamo'];
  }

  get numeroCuotas() {
    return this.form.controls['numeroCuotas'];
  }

  CalcularCuota(Monto: number, Plazo: number): number {
    let tinteres: number = this._Tem / 100;
    let tplazo: number = parseFloat(
      Math.pow(1 + tinteres, -Plazo).toPrecision(2)
    );
    let tdivision: number = 1 - tplazo;
    console.log(tdivision);
    let vc: number = (tinteres * Monto) / tdivision;
    return vc;
  }

  onClick(): void {
    console.log(this.form.value);

    if (this.form.valid) {
      this.form.get('montoPrestamo')?.hasError('required');

      const tipoDeuda: Record<string, TipoDeuda> = {
        hipoteca: 'HIPOTECA',
        deudorSolidario: 'DEUDOR_SOLIDARIO',
        ninguna: 'NINGUNA',
      };

      const valorCuota = CALCULOS_UTILS.calcularValorCuota(
        'LIBRE_INVERSION',
        tipoDeuda[this.form.get('tipoDeuda')?.value],
        this.montoPrestamo.value,
        this.numeroCuotas.value
      );

      if (valorCuota) {
        this.valorCuota = valorCuota[0];
        this.interes = valorCuota[1];
        this.interesEA = valorCuota[2];
        this.totalCredito =
          this.valorCuota * parseFloat(this.numeroCuotas.value);
        this.haSimulado = true;
        console.log(valorCuota);
      } else {
        this.toastrService.show('', `'Error '${this.montoPrestamo.value}`, {
          status: 'warning',
        });
      }
    }
  }
  onClickContacto(): void {}

  onClickNumCuotas(e: any) {
    this.resetValues();
    this.form.patchValue({ numeroCuotas: e.value });
    this.haSimulado = false;
  }

  private resetValues(): void {
    this.valorCuota = 0;
    this.interes = 0;
    this.totalCredito = 0;
  }
}
