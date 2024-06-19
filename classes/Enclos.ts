import { v4 as uuidv4 } from "uuid";

export class Enclos {
  private identifiant: string;
  private nom: string;
  private taille: string;
  private especes: string[];

  constructor(nom: string, taille: string, especes: string[]) {
    this.identifiant = uuidv4();
    this.nom = nom;
    this.taille = taille;
    this.especes = especes;
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

  public getEspeces(): string[] {
    return this.especes;
  }

  public setEspeces(especes: string[]): void {
    this.especes = especes;
  }
}
