import { Animal } from "./Animal";

describe("Un animal est créé, tous les attributs existent et sont définis", () => {
  let animal: Animal;

  beforeAll(() => {
    const nom: string = "Frosty";
    const espece: string = "Tigre";
    const age: number = 0;
    const enclos: string = "Grand enclos";

    animal = new Animal(nom, espece, age, enclos);
  });

  it("L'animal est défini", () => {
    expect(animal).not.toBe(null);
  });

  it("L'animal contient l'attribut identifiant qui est défini", () => {
    const identifiant = animal.getIdentifiant();

    expect(identifiant).not.toBe(null);
    expect(identifiant.length).not.toBe(0);
  });

  it("L'animal contient l'attribut nom qui est défini", () => {
    const nom = animal.getNom();

    expect(nom).not.toBe(null);
    expect(nom.length).not.toBe(0);
  });

  it("L'animal contient l'attribut espèce qui est défini", () => {
    expect(animal.getEspece()).not.toBe(null);
    expect(animal.getEspece().length).not.toBe(0);
  });

  it("L'animal contient l'attribut âge qui est défini", () => {
    const age = animal.getAge();

    expect(age).not.toBe(null);
  });

  it("L'animal contient l'attribut enclos qui est défini", () => {
    const enclos = animal.getEnclos();

    expect(enclos).not.toBe(null);
    expect(enclos.length).not.toBe(0);
  });
});
