import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Contacto } from '../contacto';
@Component({
  selector: 'tho-formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() clickEnGuardar = new EventEmitter<Contacto>();

  notificarContacto(formulario: FormGroup): void {
    // Este log son cadenas tal cual, pero mejor tunearlo a contacto
    //console.log(formulario.value);
    //this.clickEnGuardar.emit(formulario.value.nombre);

    let contacto = new Contacto(
        formulario.value.nombre,
        formulario.value.apellidos,
        formulario.value.movil,
        formulario.value.email,
        formulario.value.facebook,
        formulario.value.twitter
      );
    console.log('Formulario alta - Notificación: ', contacto);
    this.clickEnGuardar.emit(contacto);

    // Otras validaciones del formulario, como limpiar si corresponde
    formulario.reset();
  }
}
