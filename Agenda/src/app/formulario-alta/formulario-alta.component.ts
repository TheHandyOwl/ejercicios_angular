import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tho-formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() clickEnGuardar = new EventEmitter<string>();

  notificarContacto(formulario: FormGroup): void {
    console.log(formulario);
    this.clickEnGuardar.emit(formulario.value.nombre);
  }
}
