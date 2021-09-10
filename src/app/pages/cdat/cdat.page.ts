import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { CALCULOS_UTILS, parametrosAhorro } from 'src/app/core/utils/calculos.utils';

@Component({
  templateUrl: './cdat.page.html',
  styleUrls: ['./cdat.page.scss'],
})
export class CdatPage {
  isBold = false;
  isItalic = true;
  isUnderline = false;
  title = 'Informción Ahorro CDAT';
  cuota: number = 0;
  _Tem: number = 1;
  selectedItemNgModel: any;
  valorCuota = 0;
  interes = 0;
  totalahorrado = 0;
  montominimo = 0;
  haSimulado = false;
  form!: FormGroup;


  tipoCredito = ['Vivienda', 'Prestamo', 'Estudio'];

  options: any = [
    {
      text: '30 DÍAS',
      value: 30,
    },
    {
      text: '60 DÍAS',
      value: 60,
    },
    {
      text: '90 DÍAS',
      value: 90,
    },
    {
      text: '120 DÍAS',
      value: 120,
    },
    {
      text: '180 DÍAS',
      value: 180,
    },
    {
      text: '270 DÍAS',
      value: 270,
    },
    {
      text: '360 DÍAS',
      value: 360,
    },
    {
      text: '450 DÍAS',
      value: 450,
    },
    {
      text: '540 DÍAS',
      value: 540,
    },
    {
      text: '720 DÍAS',
      value: 720,
    },
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
        'CDAT',
        this.montoPrestamo.value,
        this.numeroCuotas.value
      );

      if (valorCuota) {
        this.valorCuota = valorCuota[0];
        this.interes = valorCuota[1];
        this.totalahorrado=parseFloat(this.montoPrestamo.value)+valorCuota[0];
        this.haSimulado = true;
      } else {
        this.toastrService.show('',`'Error '${this.montoPrestamo.value}`, { status: 'warning' });
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
      parametros = parametrosAhorro['NINGUNA'];
      this.form.controls.montoPrestamo.addValidators(
        Validators.min(parametros.montoMinimo)
      );
      this.montominimo = parametros.montoMinimo;

      this.montoPrestamo.updateOn;
    }
  }

