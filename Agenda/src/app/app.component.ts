import { Component } from '@angular/core';

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
export class AppComponent {

  // Ya que estamos implementamos también este
  ngOnDestroy() {
    console.log('Como no muere por ahora no veremos su comportamiento');
  }
}
