export class Professional {

name: string;
age: number;
weight: number;
height: number;
isRetired: boolean;
nationality: string;
oscarsNumber: number;
profession: string;

constructor (name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string){

    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;

}

printProfessional(){
    console.log( `  Name: ${this.name} \n  Age: ${this.age} \n  Weight: ${this.weight} \n  Height: ${this.height} \n  IsRetired: ${this.isRetired} \n  Nacionality: ${this.nationality} \n  OscarsNumber: ${this.oscarsNumber} \n  Profession: ${this.profession} \n`);
    
    
}

}

let profession1 = new Professional ('Maria Gomez', 25, 60, 1.66, false, 'italiano', 3, 'actor' );

// profession1.printProfessional();

