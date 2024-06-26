import { Animal } from "./Animal";
import { Enclos } from "./Enclos";

export class Zoo {
  private animaux: Animal["identifiant"][];
  private enclos: Enclos["identifiant"][];

  constructor(animaux: Animal[] = [], enclos: Enclos[] = []) {
    this.animaux = animaux.map((animal: Animal) => animal.getIdentifiant());
    this.enclos = enclos.map((enclos: Enclos) => enclos.getIdentifiant());
  }

  public addAnimal(animal: Animal): void {
    this.animaux.push(animal.getIdentifiant());
  }

  public deleteAnimal(animal: Animal): void {
    const indexAnimal: number = this.animaux.indexOf(animal.getIdentifiant());

    this.animaux.splice(indexAnimal, indexAnimal !== -1 ? 1 : 0);
  }

  public getAnimaux(): Animal["identifiant"][] {
    return this.animaux;
  }

  public setAnimaux(animaux: Animal[]) {
    this.animaux = animaux.map((animal: Animal) => animal.getIdentifiant());
  }

  public addEnclos(enclos: Enclos): void {
    this.enclos.push(enclos.getIdentifiant());
  }

  public deleteEnclos(enclos: Enclos): void {
    const indexEnclos: number = this.enclos.indexOf(enclos.getIdentifiant());

    this.enclos.splice(indexEnclos, indexEnclos !== -1 ? 1 : 0);
  }

  public getEnclos(): Enclos["identifiant"][] {
    return this.enclos;
  }

  public setEnclos(enclos: Enclos[]) {
    this.enclos = enclos.map((enclos: Enclos) => enclos.getIdentifiant());
  }
}
