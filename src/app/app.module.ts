import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* ----- RUTAS ------ */
//Hay que importar las rutas aquí para que luego se pueda ir redirigiendo correctamente.
import{APP_ROUTING} from './app.routes'; //Se tiene que poner la ruta así porque se toma de forma relativa al lugar en el que estamos ahora mismo.

/* ----- SERVICIOS ------ */


/* ----- COMPONENTES ------ */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
