import { Component, inject } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faPhone,
  faAt,
  faLocationDot,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { ContactosService } from '../../services/contactos.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  router = inject(Router)
  contactosService = inject(ContactosService)
  Toaster = inject(ToastrService)

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    asunto: new FormControl(''),
    mensaje: new FormControl(''),
  })



  async createContacto() {
    try {
      console.log(this.formulario.value);
      const contacto = await this.contactosService.create(this.formulario.value)
      this.Toaster.success('Mensaje enviado correctamente', 'Enviado');
    }
    catch (error) {
      console.error('Error:', error);
      this.Toaster.error('Error al enviar el mensaje', 'Error');
    }


  }




  // Add the icons to the library
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPhone,
      faAt,
      faLocationDot,
      faEnvelope,
      faGithub,
      faLinkedin,
      faInstagram,
      faTwitter
    );
  }
}
