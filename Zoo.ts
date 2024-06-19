import { Animal } from "./Animal";

export class Zoo {
  private animaux: Animal[];

  constructor() {
    this.animaux = [];
  }

  public getAnimaux(): Animal[] {
    return this.animaux;
  }
  public setAnimaux(animaux: Animal[]) {
    this.animaux = animaux;
  }
}
