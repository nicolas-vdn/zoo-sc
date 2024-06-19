import { Animal } from "./Animal";

export class Zoo {
  private animaux: Animal[];

  constructor() {
    this.animaux = [];
  }

  public addAnimal(animal: Animal): void {
    this.animaux.push(animal);
  }

  public getAnimaux(): Animal[] {
    return this.animaux;
  }
  public setAnimaux(animaux: Animal[]) {
    this.animaux = animaux;
  }
}
