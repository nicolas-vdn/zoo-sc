import { v4 as uuidv4 } from "uuid";
import { Espece } from "../enums/Espece";

export class Animal {
  private identifiant: string;
  private nom: string;
  private dateNaissance: Date;
  private espece: Espece;

  constructor(nom: string, espece: Espece, dateNaissance: Date) {
    this.identifiant = uuidv4();
    this.nom = nom;
    this.espece = espece;
    this.dateNaissance = dateNaissance;
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

  public getEspece(): Espece {
    return this.espece;
  }

  public setEspece(espece: Espece): void {
    this.espece = espece;
  }

  public getDateNaissance(): Date {
    return this.dateNaissance;
  }

  public setDateNaissance(dateNaissance: Date): void {
    this.dateNaissance = dateNaissance;
  }
}
