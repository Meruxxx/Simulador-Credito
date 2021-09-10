import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { CALCULOS_UTILS, parametrosAhorroContractuales } from 'src/app/core/utils/calculos.utils';

@Component({
  templateUrl: './contractuales.page.html',
  styleUrls: ['./contractuales.page.scss'],
})
export class ContractualesPage {
  isBold = false;
  isItalic = true;
  isUnderline = false;
  title = 'Informción Ahorro Contractuales';
  cuota: number = 0;
  _Tem: number = 1;
  selectedItemNgModel: any;
  valorCuota = 0;
  interes = 0;
  totalahorrado = 0;
  haSimulado = false;
  montominimo=0
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
    },
    {
      text: '36 MESES',
      value: 36,
    }
  ];

  constructor(private formBuilder: FormBuilder, private toastrService: NbToastrService) {
    this.form = formBuilder.group({
      montoPrestamo: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      numeroCuotas: ['', Validators.required],
      valorCuota: [''],
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.OnRadioChange('');
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
        this.valorCuota = valorCuota[0];
        this.interes = valorCuota[1];
        this.totalahorrado=parseFloat(this.montoPrestamo.value)+valorCuota[0];
        this.haSimulado = true;
      } else {
        this.toastrService.show('',`'Error '${this.montoPrestamo.value}`,
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
    this.totalahorrado = 0;
  }
  onEnter(event: any) {
    this.resetValues();
    this.haSimulado = false;
  }
  OnRadioChange(event: any) {
    console.log(event);
    // this.form.get("tipoDeuda")?.valueChanges.subscribe(selectedValue => {
    //   setTimeout(() => {
    //     console.log(this.form.value)   //shows the latest first name
    //   })
    // })
    let parametros;
    parametros = parametrosAhorroContractuales['NINGUNA'];
    this.form.controls.montoPrestamo.addValidators(
      Validators.min(parametros.montoMinimo)
    );
    this.form.controls.montoPrestamo.addValidators(
      Validators.max(4000000)
    );
    this.montominimo = parametros.montoMinimo;

    this.montoPrestamo.updateOn;
  }
}
