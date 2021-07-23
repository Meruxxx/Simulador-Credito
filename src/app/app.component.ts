import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'simulador-credito';
  cuota: number = 0;
  _Tem: number = 1;
  selectedItemNgModel: any;

  form!: FormGroup;

  options: number[] = [12, 24, 36, 48, 60, 72];

  constructor(
    private formBuilder: FormBuilder,
    private iconLibraries: NbIconLibraries
  ) {
    this.iconLibraries.registerFontPack('font-awesome', {
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.setDefaultPack('font-awesome');
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
}
