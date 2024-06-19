import { Animal } from "../classes/Animal";
import { Enclos } from "../classes/Enclos";
import { Zoo } from "../classes/Zoo";
import { creationEnclosVide } from "../providers/enclos";
import { ajoutFrostyZoo } from "../providers/zoo";

describe("Un zoo vide est créé", () => {
  let zoo: Zoo;

  beforeAll(() => {
    zoo = new Zoo();
  });

  it("Le zoo existe", () => {
    expect(zoo).not.toBe(null);
  });

  it("Le zoo n'a aucun animal", () => {
    const animaux: Animal["identifiant"][] = zoo.getAnimaux();

    expect(animaux).not.toBe(null);
    expect(animaux.length).toBe(0);
  });

  it("Le zoo n'a aucun enclos", () => {
    const enclos: Enclos["identifiant"][] = zoo.getEnclos();

    expect(enclos).not.toBe(null);
    expect(enclos.length).toBe(0);
  });
});

describe("Un zoo est créé et des animaux sont ajoutés ou retirés", () => {
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  it("Un animal est ajouté au zoo", () => {
    ajoutFrostyZoo(zoo);

    const animaux: Animal["identifiant"][] = zoo.getAnimaux();

    expect(animaux).not.toBe(null);
    expect(animaux.length).toBe(1);
  });

  it("Un animal est supprimé du zoo", () => {
    const animal: Animal = ajoutFrostyZoo(zoo);

    zoo.deleteAnimal(animal);

    const animaux: Animal["identifiant"][] = zoo.getAnimaux();

    expect(animaux).not.toBe(null);
    expect(animaux.length).toBe(0);
  });
});

describe("Un enclos est créé et il peut être ajouté ou supprimé", () => {
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });
  it("Un enclos est ajouté au zoo", () => {
    const enclos: Enclos = creationEnclosVide();

    zoo.addEnclos(enclos);

    const enclosZoo: Enclos["identifiant"][] = zoo.getEnclos();

    expect(enclosZoo).not.toBe(null);
    expect(enclosZoo.length).toBe(1);
  });

  it("Un enclos est supprimé du zoo", () => {
    const enclos: Enclos = creationEnclosVide();

    zoo.deleteEnclos(enclos);

    const enclosZoo: Enclos["identifiant"][] = zoo.getEnclos();

    expect(enclosZoo).not.toBe(null);
    expect(enclosZoo.length).toBe(0);
  });
});
