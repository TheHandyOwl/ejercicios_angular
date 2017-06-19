import { Injectable } from '@angular/core';

// Un servicio es una clase decorada con @Injectable.
// Este decorador no necesita que le indiquemos ningún metadato
// Es importante que no nos olvidemos de añadir el servicvio en
// la colección de providers del módulo de nuestra aplicación
@Injectable()
export class ContactosService {

  private _contactos: string[];
  
  constructor() { 
    this._contactos = [
      'Tim Cook',
      'Bill Gates',
      'Elon Musk',
      'Steve Wozniak',
      'Sundar Pichai'
    ];
  }

  /* Aquí o en el contructor */
  /*
  private _contactos = [
    'Tim Cook',
    'Bill Gates',
    'Elon Musk',
    'Steve Wozniak',
    'Sundar Pichai'
  ];
  */

  // Para exponer la lista al exterior
  obtenerContactos(): string[] {
    return this._contactos;
  }

  eliminarContacto(_contacto: string): void {
    /*
    this.contactos = this.contactos.filter( (contactoAComprobar: string): boolean => {
      return contactoAComprobar !== contacto;
    });
    */
    let posicion = this._contactos.indexOf(_contacto);
    this._contactos.splice(posicion, 1);
  }    

}