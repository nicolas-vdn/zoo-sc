import { Animal } from "./Animal";

describe("Un animal vide est créé, tous les attributs existent et sont vides", () => {
  let animalVide: Animal;

  beforeEach(() => {
    animalVide = new Animal();
  });

  it("L'animal est défini", () => {
    expect(animalVide).not.toBe(undefined);
  });
});
