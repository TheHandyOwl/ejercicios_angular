import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent {

  //constructor() { }
  // Inyección de dependencias para que no se queje contantos
  constructor(
    private _contactosService: ContactosService,
    private _router: Router
  ) { }

  guardarContacto(contacto: Contacto): void {
  this._contactosService
      .agregarContacto(contacto) // Devuelve un observable!!!
      // Cambiamos esta parte
      /*
      // Tenemos que suscribirnos
      // Si no nos suscribimos no se invoca!!!
      .subscribe(() => {
        this.contactos$ = this._contactosService.obtenerContactos(); // Podríamos pasar un contacto pero lo pasamos vacío si queremos hacer algo con el contacto, pero no es el caso. Tan sólo actualizamos lista cuando finaliza
      }) // Si no hacemos esto no se invoca. Aquí no hay pipe
      */
      //.subscribe(); // Invoca un observable, y se ejecuta tras la operación asíncrona que estaba ejecutando
      .subscribe( () => {
        alert('El contacto se ha creado correctamente :-)');
        // Navegar al path por partes: /contactos/3/detalles
        //this._router.navigate(['contactos', '3', 'detalles']);
        // Igualmente un array aunque sea 1 sólo elemento
        this._router.navigate(['/mis-contactos']);
      });
  }

}
