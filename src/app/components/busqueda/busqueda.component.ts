import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  heroes:Heroe[] = [];

  textoBuscado:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService: HeroesService,
              private router:Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['texto'].length > 0) {
        console.log(parametros['texto']);
        this.textoBuscado = parametros['texto'];
        this.heroes = this._heroeService.buscarHeroe(parametros['texto']);
        console.log(this.heroes);
      } else {
        this.router.navigate(['/home']);
      }
    });

  }

  verHeroe(id:number) {
    this.router.navigate(['/heroe',id]);
  }

}
