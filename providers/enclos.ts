import { Animal } from "../classes/Animal";
import { Enclos } from "../classes/Enclos";

export const creationEnclosVide = (): Enclos => {
  const nom: string = "Premier enclos";
  const taille: string = "Grand";
  const especes: string[] = [];

  return new Enclos(nom, taille, especes);
};
