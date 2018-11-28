import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'; //Esto hay que importarlo para poder recibir parámetros por URL
import {Heroe, HeroesService} from '../../services/heroes.service'; //Me tengo que importar esto para poder utilizar la interfaz que he definido en el servicio 

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  heroe:Heroe; //Esta es la propiedad con la que vamos a trabajar en la vista de los héroes.


      //Como ocurre en el compontente de los héroes, lo que se hace es crear una propiedad del tipo del objeto que se ha importado (ActivatedRoute)
  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService: HeroesService,
              private router:Router) {

    //params lo que hace es devolver un observador
      this.activatedRoute.params.subscribe(parametros => { 
        console.log(parametros['id']); //Se utiliza una función de flecha y, de esta forma, se obtiene exclusivamente el identificador del parámetro. Si se pusiera únicamente el parámetro, vendría como un objeto que tiene como propiedad un número de identificación. El nombre "id" en este caso se pone porque es exactamente lo que se ha puesto en el archivo app.routes.ts
        
        if(this.datoCorrecto(parametros['id'])) {
          
            this.heroe = this._heroeService.getHeroe(parametros['id']);

              console.log(this.heroe);
        } else {
          this.redireccionaListaHeroes();
        }
      });
    
       }

       private datoCorrecto(entrada:string):boolean {
          if(isNaN(parseInt(entrada)) || parseInt(entrada) >= this._heroeService.getHeroes().length ||  parseInt(entrada) < 0) {;
            return false;
          } else {
            return true;
          }
       }

       private redireccionaListaHeroes() {
        this.router.navigate(['/heroes']);
       }

}
