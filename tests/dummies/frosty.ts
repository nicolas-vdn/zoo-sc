import { Animal } from "../../classes/Animal";
import { Espece } from "../../enums/Espece";

export function creationEtExportFrosty(): Animal {
  const nom: string = "Frosty";
  const espece: Espece = Espece.Felide;
  const dateNaissance: Date = new Date("01/01/1951");

  return new Animal(nom, espece, dateNaissance);
}

export function creationEtExportCoco(): Animal {
  const nom: string = "Coco";
  const espece: Espece = Espece.Hominide;
  const dateNaissance: Date = new Date("24/12/2000");

  return new Animal(nom, espece, dateNaissance);
}
