import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //El Input lo que permite es recibir una propiedad que se necesita desde fuera del componente.
//El Output siempre va de la mano con el EventEmitter. Ambos sirven para poder enviar información del hijo al padre.
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
  @Output() heroeSeleccionado:EventEmitter<number>; //El Output lo que hace es ponerse en el evento que debe estar escuchando el padre. Hay que especificar qué tipo de información va a emitir la función que se está acompañando del decorador @Output(). En este caso, devuelve un number.

  constructor(private router:Router,) {
    this.heroeSeleccionado = new EventEmitter(); //Esta función debe 'inicializarse' en el constructor. Ya se ha convertido en un observable al que nos podemos suscribir. Además, ahora se puede disparar y emitir una información determinada (que va a ser del tipo number, como se ha especificado en su declaración, más arriba).
   }

  ngOnInit() {
  }

  verHeroe() {
    //this.router.navigate(['/heroe',this.indice]);
    this.heroeSeleccionado.emit(this.indice); //Así es como se debe emitir la información por parte de ese Output que se ha personalizado en la clase.
  }

}
