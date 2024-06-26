import { Enclos } from "../classes/Enclos";
import { Espece } from "../enums/Espece";
import { creationEtExportGrandEnclosVide } from "./dummies/enclosVides";

describe("Un enclos est créé", () => {
  let enclos: Enclos;

  beforeAll(() => {
    enclos = creationEtExportGrandEnclosVide();
  });

  it("L'enclos existe", () => {
    expect(enclos).not.toBe(null);
  });

  it("L'enclos ne peut encore accueillir aucune espèce", () => {
    const especesAcceptees: Espece[] = enclos.getEspecesAcceptees();

    expect(especesAcceptees).not.toBe(null);
    expect(especesAcceptees.length).toBe(0);
  });
});
