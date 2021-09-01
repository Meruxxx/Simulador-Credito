import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { EmailService } from 'src/app/core/services/email.service';

@Component({
  selector: 'app-enviar-correo',
  templateUrl: './enviar-correo.page.html',
  styleUrls: ['./enviar-correo.page.css'],
})
export class EnviarCorreoPage {
  tipo_contacto: string = '';
  tipo_solicitud: string = '';
  buttonVisible = true;
  checked = false;
  form: FormGroup;
  constructor(
    private emailService: EmailService,
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService
  ) {
    this.form = this.formBuilder.group({
      NombreCliente: ['', [Validators.required]],
      apellidoCliente: ['', [Validators.required]],
      identificacion: ['', [Validators.required, Validators.maxLength(256)]],
      tel: ['', [Validators.required, Validators.maxLength(256)]],
      cel: ['', [Validators.required, Validators.maxLength(256)]],
      emailCliente: ['', [Validators.required, Validators.email]],
    });
  }

  onClickContacto(): void {
    if (this.form.valid) {
      const {
        NombreCliente,
        apellidoCliente,
        identificacion,
        tel,
        cel,
        emailCliente,
      } = this.form.value;
      this.emailService
        .send({
          to: 'diegoma.04@gmail.com;e.alexisceballos@gmail.com',
          params: {
            tipo_contacto: this.tipo_contacto,
            nombre_contacto: NombreCliente,
            apellido_contacto: apellidoCliente,
            tipo_solicitud: this.tipo_solicitud,
            numero_identificacion: identificacion,
            telefono_contacto: tel,
            celular_contacto: cel,
            email_contacto: emailCliente,
          },
        })
        .then((x) =>
          x.status > 0
            ? this.toastrService.show('', 'Envio correcto',{ status: 'primary'})
            : // alert('Envio correcto.')
              this.toastrService.show('','No se puedo enviar la información.',
                {
                  status: 'danger'
                }
              )
        );
    }
  }

  toggle(checked: boolean) {
    if (checked === true) {
      this.buttonVisible = false;
    } else {
      this.buttonVisible = true;
    }
  }
}
