//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';

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

  // Como norma dejamos los constructores vacíos
  constructor() {
    //console.log('Dejame vacío y usa ngOnInit');
    //console.log('Puede que no esté enlazado el template y la cagues!!!');
    //console.log('Porque no puedes trabajar con el template si no está cargado');
  }

  contactos: string[];

  // Como se sigue quejando vamos a ver qué falta para que se calle
  // En el hook 'OnInit' inicializamos los datos del componente.
  ngOnInit() {
    // Mejor aquí que en el constructor
    console.log('Estoy vivo!');

    //contactos = [];
    // Mejor usar esta forma
    this.contactos = [
      'Tim Cook',
      'Bill Gates',
      'Elon Musk',
      'Steve Wozniak',
      'Sundar Pichai'
    ];

  }

  eliminarContacto(contacto: string): void {
    /*
    this.contactos = this.contactos.filter( (contactoAComprobar: string): boolean => {
      return contactoAComprobar !== contacto;
    });
    */
    let posicion = this.contactos.indexOf(contacto);
    this.contactos.splice(posicion, 1);
  }

  // Ya que estamos implementamos también este
  ngOnDestroy() {
    console.log('Como no muere por ahora no veremos su comportamiento');
  }
}
