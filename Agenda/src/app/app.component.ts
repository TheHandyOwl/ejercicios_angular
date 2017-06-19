//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { ContactosService } from './contactos.service';


@Component({
  // En selector indicamos el elemento HTML donde se instanciará este componente
  selector: 'app-root',
  // En templateUrl indicamos la ruta al template del componente. Podríamos escribirlo inline en la propiedad 'template'
  templateUrl: './app.component.html',
  //La alternativa si picamos el código, cosa inmanejable
  //template: "<h1>HOLA KEEPCODERS</h1>",
  // En styleUrls indicamos las rutas de los documentos CSS que contienen los estilos que afectan a ESTE componente
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
  // Vamos a implementar el hook, pero para ello tenemos que importar el OnInit del core para que funcione
export class AppComponent implements OnInit {

  contactos: string[];

  // Para hacer una inyección de dependencias necesitamos sí o sí hacerlo en el constructor de una clase. Tenemos que indicar un parámetro con un modificador de acceso (obligatorio). Además, tenemos que anotar su tipo, que no es otro que el servicio a inyectar.
  constructor(private _contactosService: ContactosService) {
    //console.log('Dejame vacío y usa ngOnInit');
    //console.log('Puede que no esté enlazado el template y la cagues!!!');
    //console.log('Porque no puedes trabajar con el template si no está cargado');
  }

  // Como se sigue quejando vamos a ver qué falta para que se calle
  // En el hook 'OnInit' inicializamos los datos del componente.
  ngOnInit() {
    // Mejor aquí que en el constructor
    console.log('Estoy vivo!');
    //Tras meterlo en el costructor
    this.contactos = this._contactosService.obtenerContactos();
  }

  guardarContacto(contacto: string): void {
    this._contactosService.agregarContacto(contacto);
    this.contactos = this._contactosService.obtenerContactos();
  }

  eliminarContacto(contacto: string): void {
    this._contactosService.eliminarContacto(contacto);
    this.contactos = this._contactosService.obtenerContactos();
  }

  // Ya que estamos implementamos también este
  ngOnDestroy() {
    console.log('Como no muere por ahora no veremos su comportamiento');
  }
}
