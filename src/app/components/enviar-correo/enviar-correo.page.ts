import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/core/services/email.service';

@Component({
  selector: 'app-enviar-correo',
  templateUrl: './enviar-correo.page.html',
  styleUrls: ['./enviar-correo.page.css'],
})
export class EnviarCorreoPage {
  @Input() visible = false;
  @Input() title: any;
  buttonVisible = true;
  checked = false;
  form: FormGroup;
  constructor(
    private emailService: EmailService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      NombreCliente: ['', [Validators.required]],
      emailCliente: ['', [Validators.required, Validators.email]],
      TelCel: ['', [Validators.required, Validators.maxLength(256)]],
    });
  }

  onClickContacto(): void {
    const { NombreCliente, emailCliente, TelCel } = this.form.value;
    this.emailService
      .send({
        to: 'diegoma.04@gmail.com',
        params: {
          nombre_contacto: NombreCliente,
          email_contacto: emailCliente,
          telefono_contacto: TelCel,
        },
      })
      .then(console.log);
  }

  toggle(checked: boolean) {
    this.buttonVisible = false;
    this.checked = checked;
  }
}
