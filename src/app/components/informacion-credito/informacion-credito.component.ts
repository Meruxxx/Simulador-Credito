import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-informacion-credito',
  templateUrl: './informacion-credito.component.html',
  styleUrls: ['./informacion-credito.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformacionCreditoComponent {
  valorCuota: any;
  _Tem: number = 1;

  constructor() {}

  onClickContacto(): void {}
}
