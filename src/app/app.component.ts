import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isBold = false;
  isItalic = true;
  isUnderline = false;
  title = 'simulador-credito';
  cuota: number = 0;
  _Tem: number = 1;
  selectedItemNgModel: any;

  campo3: string = ' $3.000.000';

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
      campo1: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      campo2: ['', Validators.required],
      campo3: [''],
    });
  }

  get campo1() {
    return this.form.controls['campo1'];
  }
  get campo2() {
    return this.form.controls['campo2'];
  }
  ngOnInit(): void {}

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
      this.form.get('campo1')?.hasError('required');

      this.cuota = this.CalcularCuota(this.campo1.value, this.campo2.value);

      this.form.patchValue({ campo3: this.cuota });
    }
  }
  onClickContacto(): void {}
}
