import { Animal } from "./Animal";
import { Zoo } from "./Zoo";
import { creationAnimalFrosty } from "./animal.provider";
import { ajoutFrostyZoo } from "./zoo.provider";

describe("Un zoo vide est créé", () => {
  let zoo: Zoo;

  beforeAll(() => {
    zoo = new Zoo();
  });

  it("Le zoo est défini", () => {
    expect(zoo).not.toBe(null);
  });

  it("Le zoo n'a aucun animal", () => {
    const animaux: Animal["identifiant"][] = zoo.getAnimaux();

    expect(animaux).not.toBe(null);
    expect(animaux.length).toBe(0);
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
