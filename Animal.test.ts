import { Animal } from "./Animal";

describe("Un animal vide est créé, tous les attributs existent et sont vides", () => {
  let animalVide: Animal;

  beforeEach(() => {
    animalVide = new Animal();
  });

  it("L'animal est défini", () => {
    expect(animalVide).not.toBe(null);
  });

  it("L'animal contient l'attribut identifiant", () => {
    expect(animalVide.getIdentifiant()).not.toBe(null);
  });

  it("L'animal contient l'attribut nom", () => {
    expect(animalVide.getNom()).not.toBe(null);
  });

  it("L'animal contient l'attribut espèce", () => {
    expect(animalVide.getEspece()).not.toBe(null);
  });

  it("L'animal contient l'attribut âge", () => {
    expect(animalVide.getAge()).not.toBe(null);
  });

  it("L'animal contient l'attribut enclos", () => {
    expect(animalVide.getEnclos()).not.toBe(null);
  });
});
