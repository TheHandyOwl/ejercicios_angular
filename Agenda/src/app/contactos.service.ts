import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { environment } from '../environments/environment';

// Un servicio es una clase decorada con @Injectable.
// Este decorador no necesita que le indiquemos ningún metadato
// Es importante que no nos olvidemos de añadir el servicvio en
// la colección de providers del módulo de nuestra aplicación
@Injectable()
export class ContactosService {

  //private _contactos: Contacto[];
  
  constructor(private _http: Http) { }

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

    // El cliente HTTP trabaja con objetos 'Response'. Este objeto tiene datos relacionados
    // con la respuesta del servidor: cabeceras, status, body, etc. Nunca debemos subir este
    // objeto a la capa de arriba (componentes - no es su problema -).
    // Por tanto debemos transformar este objeto en el que realmente nos ha pedido el componente
    // que en este caso es una colección de contactos 'Contacto[]'; para
    // hacer esta operación nos apoyamos en la función 'map', que es un operador de los objetos
    // 'Observables'. Este operador transforma un 'Observable' en otro.
    // Un observable de response se transforma en un observable de contactos
    // OJO: Tenemos un observable que tendremos que importar e instanciar
    return this._http
                //.get('http://localhost:3004/contactos')
                .get(`${environment.apiUri}/contactos`)
                .map((respuesta: Response) => {
                  /*
                  let contactos: Contacto[];
                  let contactosJson: any[] = respuesta.json();

                  contactosJson.forEach((contactoJson: any) => {
                    //contactos.push(new Contacto(contactoJson.nombre));
                    contactos.push(Contacto.nuevoDesdeJson(contactoJson));
                  });

                  return contactos;
                  */
                  //return respuesta.json() as Contacto[];
                  return Contacto.nuevaColeccionDesdeJson(respuesta.json());
              });
  }

  agregarContacto(contacto: Contacto): Observable<Contacto> {
    //this._contactos.push(contacto);
    //console.log('Agregar contacto - Servicio: ',contacto);

    // En aquellas peticiones HTTP que envíen datos al servidor (POST, PUT, PATCH), debemos
    // indicarlos (los datos) como segundo parámetro de la función correspondiente. En este caso, estamos enviando el contacto a crear en el cuerpo de la petición 'post'
    return this._http
               //.post('http://localhost:3004/contactos', contacto)
               .post(`${environment.apiUri}/contactos`, contacto)
               .map((respuesta: Response) => {
                 return Contacto.nuevoDesdeJson(respuesta.json());
               });
  }

  eliminarContacto(contacto: string): void {
    /*
    this._contactos = this._contactos.filter( (contactoAComprobar: string): boolean => {
      return contactoAComprobar !== contacto;
    });
    */
    //Quitamos eliminar por el momento porque hemos añadido Contacto
    // Y lo suyo es borrar por ID y no por el nombre
    //let posicion = this._contactos.indexOf(contacto);
    //this._contactos.splice(posicion, 1);
  }    

}
