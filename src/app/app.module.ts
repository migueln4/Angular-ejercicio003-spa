import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* ----- RUTAS ------ */
//Hay que importar las rutas aquí para que luego se pueda ir redirigiendo correctamente.
import{APP_ROUTING} from './app.routes'; //Se tiene que poner la ruta así porque se toma de forma relativa al lugar en el que estamos ahora mismo.

/* ----- SERVICIOS ------ */
import{HeroesService} from './services/heroes.service';

/* ----- COMPONENTES ------ */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FichaHeroeComponent } from './components/ficha-heroe/ficha-heroe.component';

@NgModule({
  declarations: [ //Aquí van los componentes
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent,
    FichaHeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING //Aquí es donde se mete lo de las rutas
  ],
  providers: [HeroesService],//Todos los servicios deben ir aquí dentro
  bootstrap: [AppComponent],

})
export class AppModule { }
