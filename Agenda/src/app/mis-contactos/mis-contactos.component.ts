import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  //contactos: Observable<Contacto[]>;
  //Como es un observable se one un $
  //1.
  contactos$: Observable<Contacto[]>;

  //constructor() { }
  //2.

  // Para hacer una inyección de dependencias necesitamos sí o sí hacerlo en el constructor de una clase. Tenemos que indicar un parámetro con un modificador de acceso (obligatorio). Además, tenemos que anotar su tipo, que no es otro que el servicio a inyectar.
  constructor(private _contactosService: ContactosService) {
    //console.log('Dejame vacío y usa ngOnInit');
    //console.log('Puede que no esté enlazado el template y la cagues!!!');
    //console.log('Porque no puedes trabajar con el template si no está cargado');
  }

  //ngOnInit() { }
  //3
    // Como se sigue quejando vamos a ver qué falta para que se calle
  // En el hook 'OnInit' inicializamos los datos del componente.
  ngOnInit() {
    // Mejor aquí que en el constructor
    console.log('Estoy vivo!');
    //Tras meterlo en el costructor
    //this.contactos$ = this._contactosService.obtenerContactos();
    this.contactos$ = this._contactosService
      .obtenerContactos()
      // El pipe | ayns haría ésto,
      // pero no hemos llagado a picar esta parte porque no hace falta.
      /*
      .subscribe((contactos: Contacto[]) => {
        this.contactos= contactos;
      })
      */
      ;
  }

  // Por tienoi eliminamos el botónd e eliminar
  // DEL HTML 
  //  (clickEnEliminar)="eliminarContacto($event)"

  /*
  eliminarContacto(contacto: string): void {
    this._contactosService.eliminarContacto(contacto);
    this.contactos$ = this._contactosService.obtenerContactos();
  }
*/

}
