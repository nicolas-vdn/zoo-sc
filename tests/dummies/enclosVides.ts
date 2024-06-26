import { Enclos } from "../../classes/Enclos";
import { Espece } from "../../enums/Espece";

export function creationEtExportGrandEnclosVide(): Enclos {
  const nom: string = "Grand enclos vide";
  const taille: string = "Grand";
  const especesAcceptees: Espece[] = [];

  return new Enclos(nom, taille, especesAcceptees);
}

export function creationEtExportPetitEnclosVide(): Enclos {
  const nom: string = "Petit enclos vide";
  const taille: string = "Petit";
  const especesAcceptees: Espece[] = [];

  return new Enclos(nom, taille, especesAcceptees);
}
