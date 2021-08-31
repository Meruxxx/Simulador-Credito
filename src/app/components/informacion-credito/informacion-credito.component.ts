import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { EmailService } from 'src/app/core/services/email.service';
import { EnviarCorreoPage } from './../../components/enviar-correo/enviar-correo.page';

@Component({
  selector: 'app-informacion-credito',
  templateUrl: './informacion-credito.component.html',
  styleUrls: ['./informacion-credito.component.css'],
})
export class InformacionCreditoComponent {
  @Input() valorCuota!: number;
  @Input() title!: any;
  _Tem: number = 1;

  // form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private dialogService: NbDialogService
  ) {
    // this.form = this.formBuilder.group({
    //   NombreCliente: ['', [Validators.required]],
    //   emailCliente: ['', [Validators.required, Validators.email]],
    //   TelCel: ['', [Validators.required, Validators.maxLength(256)]],
    // });
  }

  // onClickContacto(): void {
  //   const { NombreCliente, emailCliente, TelCel } = this.form.value;
  //   this.emailService
  //     .send({
  //       to: 'diegoma.04@gmail.com',
  //       params: {
  //         nombre_contacto: NombreCliente,
  //         email_contacto: emailCliente,
  //         telefono_contacto: TelCel,
  //       },
  //     })
  //     .then(console.log);
  // }

  open(): void {
    this.dialogService.open(EnviarCorreoPage)
  }

}
