import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

// Un servicio es una clase decorada con @Injectable.
// Este decorador no necesita que le indiquemos ningún metadato
// Es importante que no nos olvidemos de añadir el servicvio en
// la colección de providers del módulo de nuestra aplicación
@Injectable()
export class ContactosService {

  private _contactos: Contacto[];
  
  constructor(private _http: Http) { 
    this._contactos = [
      new Contacto('Tim Cook'),
      new Contacto('Bill Gates'),
      new Contacto('Elon Musk'),
      new Contacto('Steve Wozniak'),
      new Contacto('Sundar Pichai')
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
  obtenerContactos(): Observable<Contacto[]> {
    //return this._contactos;

    // Ahora tenemos un observable que tendremos que indicar
    return this._http
                .get('http://localhost:3004/contactos')
                .map((respuesta: Response) => {

                  let contactos: Contacto[];
                  let contactosJson: any[] = respuesta.json();

                  contactosJson.forEach((contactoJson: any) => {
                    contactos.push(new Contacto(contactoJson.nombre));
                  });

                  return contactos;
                });
  }

  agregarContacto(contacto: Contacto): void {
    this._contactos.push(contacto);
    console.log('Agregar contacto - Servicio: ',contacto);
  }

  eliminarContacto(_contacto: string): void {
    /*
    this.contactos = this.contactos.filter( (contactoAComprobar: string): boolean => {
      return contactoAComprobar !== contacto;
    });
    */
    //Quitamos eliminar por el momento porque hemos añadido Contacto
    // Y lo suyo es borrar por ID y no por el nombre
    //let posicion = this._contactos.indexOf(contacto);
    //this._contactos.splice(posicion, 1);
  }    

}
