import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisContactosComponent } from '../mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from '../nuevo-contacto/nuevo-contacto.component';

// Definimos las rutas de la aplicación. Cada una de ellas tiene que tener un a propiedad 'path', que es donde indicamos la ruta a navegar, y otra propiedad 'component', que es el compoennte qe responde de la ruta.
const routes: Routes = [
  {
    path: 'mis-contactos',
    component: MisContactosComponent
  },
  {
    path: 'nuevo-contacto',
    component: NuevoContactoComponent
  },
  {
    path: '**', // ** Cualquier cosa. PONER AL FINAL PORQUE EL ORDEN IMPORTA!!!
    pathMatch: 'full', // Cómo se comporta la ruta: que matchee hasta la ruta, hasta las opciones. Todo
    redirectTo: '/mis-contactos'
  }
];

// Con 'RouterModule.forRoot()' registramos rutas en el módulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//export class AppRoutingRoutingModule { }
export class AppRoutingModule { }
