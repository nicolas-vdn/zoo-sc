import { Animal } from "./Animal";

describe("Un animal est créé", () => {
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

  it("L'animal a un identifiant qui est défini", () => {
    const identifiant = animal.getIdentifiant();

    expect(identifiant).not.toBe(null);
    expect(identifiant.length).not.toBe(0);
  });

  it("L'animal a un nom qui est défini", () => {
    const nom = animal.getNom();

    expect(nom).not.toBe(null);
    expect(nom.length).not.toBe(0);
  });

  it("L'animal est d'une espèce qui est définie", () => {
    expect(animal.getEspece()).not.toBe(null);
    expect(animal.getEspece().length).not.toBe(0);
  });

  it("L'animal a un âge qui est défini", () => {
    const age = animal.getAge();

    expect(age).not.toBe(null);
  });

  it("L'animal a un enclos qui est défini", () => {
    const enclos = animal.getEnclos();

    expect(enclos).not.toBe(null);
    expect(enclos.length).not.toBe(0);
  });
});
