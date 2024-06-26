import { Animal } from "../classes/Animal";
import { Enclos } from "../classes/Enclos";
import { Zoo } from "../classes/Zoo";
import { creationEtExportCoco, creationEtExportFrosty } from "./dummies/frosty";
import {
  creationEtExportGrandEnclosVide,
  creationEtExportPetitEnclosVide,
} from "./dummies/enclosVides";

describe("Un zoo vide est créé", () => {
  let zoo: Zoo;

  beforeAll(() => {
    zoo = new Zoo();
  });

  it("Le zoo existe", () => {
    expect(zoo).not.toBe(null);
  });
});

describe("Un zoo est créé et des animaux sont ajoutés ou retirés", () => {
  let zoo: Zoo;
  let frosty: Animal;

  beforeEach(() => {
    zoo = new Zoo();

    frosty = creationEtExportFrosty();

    zoo.addAnimal(frosty);
  });

  it("Un animal est ajouté au zoo", () => {
    const animaux: Animal["identifiant"][] = zoo.getAnimaux();

    expect(animaux.length).toBe(1);
  });

  it("Un animal est supprimé du zoo", () => {
    zoo.deleteAnimal(frosty);

    const animaux: Animal["identifiant"][] = zoo.getAnimaux();

    expect(animaux.length).toBe(0);
  });

  it("Un animal qui n'est pas dans le zoo n'est pas supprimé de la liste des animaux du zoo", () => {
    const secondAnimal: Animal = creationEtExportCoco();

    zoo.deleteAnimal(secondAnimal);

    const animauxZoo: Animal["identifiant"][] = zoo.getAnimaux();

    expect(animauxZoo.length).toBe(1);
  });
});

describe("Un enclos est créé et il peut être ajouté ou supprimé", () => {
  let zoo: Zoo;
  let enclos: Enclos;

  beforeEach(() => {
    zoo = new Zoo();

    enclos = creationEtExportGrandEnclosVide();

    zoo.addEnclos(enclos);
  });

  it("Un enclos est ajouté au zoo", () => {
    const enclosZoo: Enclos["identifiant"][] = zoo.getEnclos();

    expect(enclosZoo.length).toBe(1);
  });

  it("Un enclos est supprimé du zoo", () => {
    zoo.deleteEnclos(enclos);

    const enclosZoo: Enclos["identifiant"][] = zoo.getEnclos();

    expect(enclosZoo.length).toBe(0);
  });

  it("Un enclos qui n'est pas dans le zoo n'est pas supprimé de la liste des enclos du zoo", () => {
    const secondEnclos: Enclos = creationEtExportPetitEnclosVide();

    zoo.deleteEnclos(secondEnclos);

    const enclosZoo: Enclos["identifiant"][] = zoo.getEnclos();

    expect(enclosZoo.length).toBe(1);
  });
});
