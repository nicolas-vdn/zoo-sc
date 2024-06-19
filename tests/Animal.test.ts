import { Animal } from "../classes/Animal";
import { creationAnimalFrosty } from "../providers/animal";

describe("Un animal est créé", () => {
  let animal: Animal;

  beforeAll(() => {
    animal = creationAnimalFrosty();
  });

  it("L'animal existe", () => {
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

describe("Un animal est créé et ses informations sont modifiées", () => {
  let animal: Animal;

  beforeAll(() => {
    animal = creationAnimalFrosty();
  });

  it("L'animal s'appelle maintenant Coco", () => {
    animal.setNom("Coco");

    expect(animal.getNom()).toBe("Coco");
  });

  it("L'animal est maintenant un singe", () => {
    animal.setEspece("Singe");

    expect(animal.getEspece()).toBe("Singe");
  });

  it("L'animal a maintenant 3 ans", () => {
    animal.setAge(3);

    expect(animal.getAge()).toBe(3);
  });

  it("L'animal est maintenant dans un petit enclos", () => {
    animal.setEnclos("Petit enclos");

    expect(animal.getEnclos()).toBe("Petit enclos");
  });
});
