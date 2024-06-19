import { Animal } from "./Animal";
import { Zoo } from "./Zoo";
import { creationAnimalFrosty } from "./animal.provider";

describe("Un zoo est créé, tous les attributs existent et sont vides", () => {
  let zoo: Zoo;

  beforeAll(() => {
    zoo = new Zoo();
  });

  it("Le zoo est défini", () => {
    expect(zoo).not.toBe(null);
  });

  it("Le zoo n'a aucun animal", () => {
    const animaux: Animal[] = zoo.getAnimaux();

    expect(animaux).not.toBe(null);
    expect(animaux.length).toBe(0);
  });

  it("Un animal est ajouté au zoo", () => {
    const animal: Animal = creationAnimalFrosty();
    zoo.addAnimal(animal);

    const animaux: Animal[] = zoo.getAnimaux();

    expect(animaux).not.toBe(null);
    expect(animaux.length).toBe(1);
  });
});
