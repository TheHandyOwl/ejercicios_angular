import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Contacto } from '../contacto';

@Component({
  selector: 'tho-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  // Vamos a permitir que el padre nos pase datos
  // Con el decorador 'Input' exponemos atributas para que puedan enñazar datos desde otros componentes
  @Input() datos: string[];

  // Al querer notificar vemos que no hay EventEmitter
  // Con el decorador 'Output' exponemos eventos a otros componentes. Es necesario, además, que el atributo decorado sea de tipo EventEmitter<T>
  @Output() clickEnEliminar = new EventEmitter<Contacto>();

  // Para emitir datos usamos la función 'emit' del 'EventEmitter'
  notificarEliminacion(contactoParaBorrar: Contacto): void {
    // Notificamos al padre pero no tenemos EventEmitter
    // Tras crear e importar vamos al tema
    this.clickEnEliminar.emit(contactoParaBorrar);
  }
  
  obtenerNombreCompleto(dato: Contacto): string {
    return `${dato.nombre} ${dato.apellidos}`;
  }

  /* Quitamos estilos por el momento, lo dejaré para trastear como 'favoritos' */
  /*
    esGatesWozniak(contacto: string): boolean {
    return contacto.indexOf('Gates') > -1 || contacto.indexOf('Wozniak') > -1;
  }

  esCookMusk(contacto: string): string {
    return contacto.indexOf('Cook') > -1 || contacto.indexOf('Musk') > -1 ? '32px' : '14px';
  }
  */

  constructor() { }

  ngOnInit() {
  }

}
