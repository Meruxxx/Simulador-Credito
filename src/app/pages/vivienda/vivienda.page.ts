import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './vivienda.page.html',
  styleUrls: ['./vivienda.page.css'],
})
export class ViviendaPage {
  isBold = false;
  isItalic = true;
  isUnderline = false;
  title = 'simulador-credito';
  cuota: number = 0;
  _Tem: number = 1;
  selectedItemNgModel: any;

  form!: FormGroup;

  tipoCredito = ['Vivienda', 'Prestamo', 'Estudio'];

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
      text: '3                                                                       años',
      value: 36,
    },
    {
      text: '5 años',
      value: 60,
    },
    {
      text: '10 años',
      value: 120,
    },
    {
      text: '20 años',
      value: 240,
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      valorPropiedad: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
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
  get valorCuota() {
    return this.form.controls['valorCuota'];
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
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.get('montoPrestamo')?.hasError('required');

      this.cuota = this.CalcularCuota(
        this.montoPrestamo.value,
        this.numeroCuotas.value
      );

      this.form.patchValue({ valorCuota: this.cuota });
    }
  }
  onClickContacto(): void {}

  onClickNumCuotas(e: any) {
    this.form.patchValue({ numeroCuotas: e.value });
  }
}
