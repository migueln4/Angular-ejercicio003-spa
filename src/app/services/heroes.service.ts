//Así es como se crea un servicio. Esta es la sintaxis que se debe poner para poder desarrollarlo.
import{Injectable} from '@angular/core'; //Hay que importar el decorador Injectable, que es lo que se necesita para crear un servicio. De base, es lo mismo que un componente pero con otro decorador distinto.

@Injectable() 
export class HeroesService {
//Toda esta información viene de haberla copiado y pegado de un archivo de texto adjunto a la práctica.
    private heroes:Heroe[] = [ //Esto es una propiedad privada que no puede ser accesible fuera de esta clase. Hace falta un método público para poder acceder a ella.

        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
      ];

    constructor() {
        console.log("Servicio listo para usarse");
    }

    getHeroes():Heroe[] { //La propiedad es privada, pero esto tiene acceso público.
        return this.heroes;
    }

    getHeroe(id:string):Heroe {
        return this.heroes[id]; //Para devolver un héroe, se recibe el identificador y se devuelve el objeto que se corresponde con ese id dentro del array que tiene esto guardado.
    }

    buscarHeroe(texto:string):Heroe[] { //Esta es la función que va a funcionar con el buscador de la web
        let heroesArr:Heroe[] = [];
        texto = texto.toLowerCase();


        //for(let heroe of this.heroes) { <--- Este no es un bucle for normal, es del tipo foreach en el que se recorre el array de los héroes.
        for(let i=0; i<this.heroes.length; i++) { //Se usa este tipo de for para poder saber cuál es la posición que ocupa cada héroe en el array.
          let heroe = this.heroes[i];
          let nombreHeroe = heroe.nombre.toLowerCase();
          if(nombreHeroe.indexOf(texto) >= 0 ) { //Si no encuentra ninguna coincidencia devuelve un -1
            heroe.id = i; //Lo que se hace aquí es añadir una propiedad del objeto que también se ha diseñado en la interfaz
            heroesArr.push(heroe); //si encuentra uan coincidencia en el nombre, añade ese héroe al array que se va a devolver.
          }
        }

        return heroesArr;
    }
}

//Para que no se pueda insertar ningún objeto que no reúna las mismas condiciones de lo que ya hay predefinido, se hace una interfaz:

export interface Heroe { //Se le pone un export para que esto se pueda exportar fuera de este archivo.
    id?:number; //Esto es opcional para que no lo pida en la definición de toda la lista de superhéroes que hay arriba, pero sí que se le pueda dar un valor cuando se realiza una búsqueda. Así se le pasa el tipo de dato con el identificador acompañado.
    nombre:string; //Todas las propiedades son obligatorias de aquí para abajo.
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
  }
  