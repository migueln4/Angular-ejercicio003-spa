import { Component, OnInit, Input } from '@angular/core'; //El Input lo que permite es recibir una propiedad que se necesita desde fuera del componente.
import { Router } from '@angular/router';
import {Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-ficha-heroe',
  templateUrl: './ficha-heroe.component.html',
  styleUrls: ['./ficha-heroe.component.css']
})
export class FichaHeroeComponent implements OnInit {

  @Input() heroe:Heroe; //A esta propiedad se le añade el decorador del Input para reflejar que la propiedad heroe puede venir desde afuera. A lo mejor la inicializo yo como quiera, pero esto ya permite que puedan recibir información desde otros lados.
  @Input() indice:number;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verHeroe() {
    console.log(this.indice);
    this.router.navigate(['/heroe',this.indice]);
  }

}
