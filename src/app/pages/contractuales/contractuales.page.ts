import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CALCULOS_UTILS } from 'src/app/core/utils/calculos.utils';

@Component({
  templateUrl: './contractuales.page.html',
  styleUrls: ['./contractuales.page.css'],
})
export class ContractualesPage {
  isBold = false;
  isItalic = true;
  isUnderline = false;
  title = 'simulador-credito';
  cuota: number = 0;
  _Tem: number = 1;
  selectedItemNgModel: any;
  valorCuota = 0;

  form!: FormGroup;

  tipoCredito = ['Vivienda', 'Prestamo', 'Estudio'];

  options: any = [
    {
      text: '6 MESES',
      value: 6,
    },
    {
      text: '9 MESES',
      value: 9,
    },
    {
      text: '12 MESES',
      value: 12,
    },
    {
      text: '15 MESES',
      value: 15,
    },
    {
      text: '18 MESES',
      value: 18,
    },
    {
      text: '24 MESES',
      value: 24,
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      montoPrestamo: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      numeroCuotas: ['', Validators.required],
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

      const valorCuota = CALCULOS_UTILS.calcularInteresAhorro(
        'CONTRACTUALES',
        this.montoPrestamo.value,
        this.numeroCuotas.value
      );

      if (valorCuota) {
        this.valorCuota = valorCuota;
        console.log(valorCuota);
      } else {
        alert('error');
      }
    }
  }
  onClickContacto(): void {}

  onClickNumCuotas(e: any) {
    this.form.patchValue({ numeroCuotas: e.value });
  }
}
