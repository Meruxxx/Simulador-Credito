import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { TipoDeuda } from 'src/app/core/types/credito.types';
import { CALCULOS_UTILS } from 'src/app/core/utils/calculos.utils';
@Component({
  templateUrl: './vivienda.page.html',
  styleUrls: ['./vivienda.page.scss'],
})
export class ViviendaPage {
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
    {
      text: '7 años',
      value: 84,
    },
  ];

  constructor(private formBuilder: FormBuilder, private toastrService: NbToastrService) {
    this.form = formBuilder.group({
      tipoDeuda: ['ninguna', [Validators.required]],
      montoPrestamo: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      numeroCuotas: [''],
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
  get plazo() {
    return this.form.controls['plazo'];
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
        'VIVIENDA',
        tipoDeuda[this.form.get('tipoDeuda')?.value],
        this.montoPrestamo.value,
        this.plazo.value
      );

      if (valorCuota) {
        if (valorCuota[3]) {
          this.toastrService.show(`${valorCuota[3]}`,'Advertencia' , {
            status: 'warning',
          });
        }
        else {
        this.valorCuota = valorCuota[0];
        this.interes = valorCuota[1];
        this.interesEA = valorCuota[2];
        this.totalCredito = this.valorCuota * parseFloat(this.plazo.value)
        this.haSimulado = true;
        console.log(valorCuota);
      } }else {
        this.toastrService.show('No se ha generado datos para simular la cuota',`'Error '${this.montoPrestamo.value}`,
                {
                  status: 'warning'
                }
              );
      }
    }
  }
  onClickContacto(): void {}

  onClickNumCuotas(e: any) {
    this.resetValues()
    this.form.patchValue({ numeroCuotas: e.value });
    this.haSimulado = false;
  }

  private resetValues(): void {
    this.valorCuota = 0;
    this.interes = 0;
    this.totalCredito = 0;
  }
  onEnter(event: any) {
    this.resetValues()
    this.haSimulado = false;
  }
}
