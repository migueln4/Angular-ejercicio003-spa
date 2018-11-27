//Este componente necesita chupar la información de un servicio. Para eso, lo primero que hay que hacer es importarlo.
import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit { //El OnInit es muy utilizado cuando la página está lista para ser trabajada. El constructor se ejecuta mucho antes que el ngOnInit(). 

  heroes:any[] = []; //Se le crea la propiedad de la clase en la que se va a almacenar toda la información que viene del servicio.

  constructor(private _heroesService:HeroesService) { //De primeras, hay que editar esto. Por un lado, se le da el modificador de visibilidad de private para que no se pueda acceder a esta propiedad. Por convenio, también el nombre debe comenzar por "_" y continuar por mayúscula.

    console.log("Constructor del Heroes Component");


  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes(); //Echa mano de la porpiedad _heroesService porque se ah creado en el constructor.

    console.log(this.heroes);

  }

}
