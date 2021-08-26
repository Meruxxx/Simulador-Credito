import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './comercio.page.html',
  styleUrls: ['./comercio.page.css'],
})
export class ComercioPage {
  // isBold = false;
  // isItalic = true;
  // isUnderline = false;
  // title = 'simulador-credito';
  cuota: number = 0;
  _Tem: number = 1;
  // selectedItemNgModel: any;

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

  trackByButtons(index: number, option: any): any {
    return option.value;
  }

  onClick(): void {
    if (this.form.valid) {
    }
  }

  onClickNumCuotas(e: any) {
    this.form.patchValue({ numeroCuotas: e.value });
  }
}
