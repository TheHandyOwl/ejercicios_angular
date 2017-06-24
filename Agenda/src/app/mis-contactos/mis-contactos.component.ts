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
  //Como es un observable se pone un $
  //1. Traemos la variable que contendrá los contactos
  contactos$: Observable<Contacto[]>;

  //2. Traemos el constructor
  //constructor() { }

  // Para hacer una inyección de dependencias necesitamos sí o sí hacerlo en el constructor de una clase. Tenemos que indicar un parámetro con un modificador de acceso (obligatorio). Además, tenemos que anotar su tipo, que no es otro que el servicio a inyectar.
  constructor(private _contactosService: ContactosService) {
    //console.log('Dejame vacío y usa ngOnInit');
    //console.log('Puede que no esté enlazado el template y la cagues!!!');
    //console.log('Porque no puedes trabajar con el template si no está cargado');
  }

  //3. Inicializamos los contactos a través del servicio en el hook OnInit
  //ngOnInit() { }
  
  // En el hook 'OnInit' inicializamos los datos del componente.
  ngOnInit() {
    // Mejor aquí que en el constructor
    console.log('Estoy vivo!');
    //Tras meterlo en el costructor
    //this.contactos$ = this._contactosService.obtenerContactos();
    this.contactos$ = this._contactosService
      .obtenerContactos()
      // El pipe | async haría ésto,
      // pero no hemos llegado a picar esta parte porque no hace falta.
      /*
      .subscribe((contactos: Contacto[]) => {
        this.contactos= contactos;
      })
      */
      ;
  }

  // 4. Por tiempo nos saltamos esta parte
  // Por tiempo eliminamos el botón de eliminar
  // Y DEL HTML 
  //  (clickEnEliminar)="eliminarContacto($event)"

  /*
  eliminarContacto(contacto: string): void {
    this._contactosService.eliminarContacto(contacto);
    this.contactos$ = this._contactosService.obtenerContactos();
  }
  */

}
