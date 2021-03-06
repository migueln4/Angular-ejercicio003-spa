//Este componente necesita chupar la información de un servicio. Para eso, lo primero que hay que hacer es importarlo.
import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service'; //Aquí se importa todo lo que tenga export dentro de la ruta. Por eso, además del servicio, también nos traemos la interfaz.
import { Router } from '@angular/router'; //Esto hay que importarlo para que se pueda hacer la redirección en una página igual que ya se hace con el menú. Esto es como usar un servicio para poder crear una variable de este tipo en el constructor.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit { //El OnInit es muy utilizado cuando la página está lista para ser trabajada. El constructor se ejecuta mucho antes que el ngOnInit(). 

  heroes:Heroe[] = []; //Se le crea la propiedad de la clase en la que se va a almacenar toda la información que viene del servicio.
  

  constructor(private _heroesService:HeroesService,
              private router:Router) {
  //De primeras, hay que editar esto. Por un lado, se le da el modificador de visibilidad de private para que no se pueda acceder a esta propiedad. Por convenio, también el nombre debe comenzar por "_" y continuar por mayúscula.
  //Se crea también como propiedad la opción del enrutamiento que se ha importado.
    console.log("Constructor del Heroes Component");
  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes(); //Echa mano de la porpiedad _heroesService porque se ha creado en el constructor.
    console.log(this.heroes);
  }

  verHeroe(id:number) {
    this.router.navigate(['/heroe',id]); //Lo que se hace es usar el objeto que se ha metido como propiedad en el constructor, invocar su función navigate y pasarle como parámetro exactamente el mismo array que se ha diseñado en el enlace de los botones de la página de los héroes.
  }

}