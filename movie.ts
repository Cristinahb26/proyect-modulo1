import { Professional } from "./professional";



export class Movie{

title: string;
releaseYear: number;
actors: Professional[];
nacionality: string;
director: Professional;
writer: Professional;
language: string;
plataforma: string;
isMCU: boolean;
mainCharacterName: string;
producer: string;
distributor: string;
genre: string;


constructor(title: string, releaseYear: number, nacionality: string, genre: string){
    
    this.title = title;
    this.releaseYear = releaseYear;
    this.nacionality = nacionality;
    this.genre = genre;
    
}

printMovie(){


    console.log(` Title: ${this.title}`);
    console.log(` Release Year: ${this.releaseYear}`);
    console.log(` Genre: ${this.genre} `);
    console.log(` Actors: ${this.actors} `);  
    console.log(` Nacionality: ${this.nacionality} `);
    console.log(` Director: ${this.director} `); 
    console.log(` Writer: ${this.writer}`);
    console.log(` Language: ${this.language}`);   
    console.log(` Plataforma: ${this.plataforma}`);
    console.log(` IsMCU: ${this.isMCU}`);
    console.log(` MainCharacterName: ${this.mainCharacterName}`);
    console.log(` Producer: ${this.producer}`);
    console.log(` Distributor: ${this.distributor}`);
   
}
}


let movie1 = new Movie ('Almas Perdidas', 2020, 'venezuela', 'romantico');
let profession1 = new Professional ('Maria Gutierrez', 25, 60, 1.66, false, 'italiano', 3, 'actor' );

// movie1.actors = [profession1.name];
movie1.director = new Professional("Clara Huete Sanchez", 20, 54, 1.60, false, "española", 0, "actriz" );
movie1.writer = new Professional("Ariana Godoy", 32, 69, 1.65, false, "venezolana", 0, "escritora");
movie1.language = "Español";
movie1.plataforma = "Netflix";
movie1.isMCU = false;
movie1.mainCharacterName = "Dakota Johnson";
movie1.producer = "Enrique Gutierrez";
movie1.distributor = "Banatu Filmak";

movie1.printMovie();