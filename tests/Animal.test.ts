import { Animal } from "../classes/Animal";
import { Espece } from "../enums/Espece";
import { creationEtExportFrosty } from "./dummies/frosty";

describe("Un animal est créé", () => {
  let animal: Animal;

  beforeAll(() => {
    animal = creationEtExportFrosty();
  });

  it("Un animal a été initialisé", () => {
    expect(animal).not.toBe(null);
    expect(animal).toBeInstanceOf(Animal);
  });
});

describe("Un animal est créé et ses informations sont modifiées", () => {
  let animal: Animal;

  beforeAll(() => {
    animal = creationEtExportFrosty();
  });

  it("L'animal s'appelle maintenant Coco", () => {
    animal.setNom("Coco");

    expect(animal.getNom()).toBe("Coco");
  });

  it("L'animal est maintenant un hominidé", () => {
    animal.setEspece(Espece.Hominide);

    expect(animal.getEspece()).toBe(Espece.Hominide);
  });

  it("L'animal est maintenant né le 24 décembre 2000", () => {
    animal.setDateNaissance(new Date("24/12/2000"));

    expect(animal.getDateNaissance().toJSON()).toBe(
      new Date("24/12/2000").toJSON()
    );
  });
});
