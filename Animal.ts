import { v4 as uuidv4 } from "uuid";

export class Animal {
  private identifiant: string;
  private nom: string;
  private espece: string;
  private age: number;
  private enclos: string;

  constructor() {
    this.identifiant = uuidv4();
    this.nom = "";
    this.espece = "";
    this.age = 0;
    this.enclos = "";
  }

  public getIdentifiant(): string {
    return this.identifiant;
  }

  public getNom(): string {
    return this.nom;
  }

  public setNom(nom: string): void {
    this.nom = nom;
  }

  public getEspece(): string {
    return this.espece;
  }

  public setEspece(espece: string): void {
    this.espece = espece;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getEnclos(): string {
    return this.enclos;
  }

  public setEnclos(enclos: string): void {
    this.enclos = enclos;
  }
}
