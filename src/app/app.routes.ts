//Este archivo tiene una forma prestablecida para figurar las rutas.

import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';

const APP_ROUTES: Routes = [ //Lo que se encuentra dentro de esta constante es un array de rutas.
    {path: 'home', component: HomeComponent}, //Todas las rutas que hacen falta movilizar deben importarse al comienzo del archivo.
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent}, //Al crear esta URL, lo que hace es pedir que se añada un identificador para hacer referencia a un héroe
    {path: '**',pathMatch:'full',redirectTo:'home'//Esto está para que, si no se encuentra la ruta que se establece, redirecciona a un lugar determinado
    }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
/*Tal y como está hecho, coge de la ruta que se introduce en el navegador lo que se necesita para poder redirigir y mostrar el contenido adecuado. Sin embargo, si se quieren pasar parámetros por la URL a la vieja usanza, hay que poner lo siguiente:

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
Eso introduce un /#/ entre la raíz y la ruta que se ha especificado. Esto es muy eficiente y se soporta por la mayoría de los navegadores web.

Sin usar el hash puede que falle. Entonces, haría falta hacer modificaciones en la parte del servidor.

Además, cuando no se utiliza el routing con hash, en el html debe aparecer lo siguiente dentro del <head>:
<base href="/">

Sin poner eso y sin usar el hash va a provocar fallos que se pueden ver por la consola.
*/