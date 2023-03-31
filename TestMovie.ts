import { Movie } from "./movie";
import { Professional } from "./professional";


let movie1 = new Movie ('Almas Perdidas', 2020, 'venezuela', 'romantico');
let profession1 = new Professional ('Maria Gutierrez', 25, 60, 1.66, false, 'italiano', 3, 'actor' );

movie1.actors = [profession1.name];
movie1.director = new Professional("Clara Huete Sanchez", 20, 54, 1.60, false, "española", 0, "actriz" );
movie1.writer = new Professional("Ariana Godoy", 32, 69, 1.65, false, "venezolana", 0, "escritora");
movie1.language = "Español";
movie1.plataforma = "Netflix";
movie1.isMCU = false;
movie1.mainCharacterName = "Dakota Johnson";
movie1.producer = "Enrique Gutierrez";
movie1.distributor = "Banatu Filmak";

movie1.printMovie();

