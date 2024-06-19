import { Animal } from "./Animal";

export class Zoo {
  private animaux: Animal["identifiant"][];

  constructor() {
    this.animaux = [];
  }

  public addAnimal(animal: Animal): void {
    this.animaux.push(animal.getIdentifiant());
  }

  public deleteAnimal(animal: Animal): void {
    const indexAnimal: number = this.animaux.indexOf(animal.getIdentifiant());

    this.animaux.splice(indexAnimal, 1);
  }

  public getAnimaux(): Animal["identifiant"][] {
    return this.animaux;
  }

  public setAnimaux(animaux: Animal[]) {
    this.animaux = animaux.map((animal: Animal) => animal.getIdentifiant());
  }
}
