import { v4 as uuidv4 } from "uuid";
import { Espece } from "../enums/Espece";

export class Enclos {
  private identifiant: string;
  private nom: string;
  private taille: string;
  private especesAcceptees: Espece[];

  constructor(nom: string, taille: string, especesAcceptees: Espece[]) {
    this.identifiant = uuidv4();
    this.nom = nom;
    this.taille = taille;
    this.especesAcceptees = especesAcceptees;
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

  public getTaille(): string {
    return this.taille;
  }

  public setTaille(taille: string): void {
    this.taille = taille;
  }

  public getEspecesAcceptees(): Espece[] {
    return this.especesAcceptees;
  }

  public setEspecesAcceptees(especesAcceptees: Espece[]): void {
    this.especesAcceptees = especesAcceptees;
  }
}
