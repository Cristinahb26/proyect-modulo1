import { Movie } from "./movie";

let movie1 = new Movie ('Almas Perdidas', 2020, 'venezuela', 'romantico');
let profession1 = new Professional('Maria Gutierrez', 25, 60, 1.66, false, 'italiano', 3, 'actor' );

class Imdb{

    peliculas: Movie[]; 

    constructor(){

        this.peliculas = [];
    }
    traerDatos(){
        this.peliculas.push(movie1);
    }

}

let Imdb1 = new Imdb();

Imdb1.traerDatos();

console.log(Imdb1.traerDatos());
