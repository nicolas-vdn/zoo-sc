import { Enclos } from "../classes/Enclos";
import { creationEnclosVide } from "../providers/enclos";

describe("Un enclos est créé", () => {
  let enclos: Enclos;

  beforeAll(() => {
    enclos = creationEnclosVide();
  });

  it("L'enclos existe", () => {
    expect(enclos).not.toBe(null);
  });

  it("L'enclos a un identifiant", () => {
    const identifiant: string = enclos.getIdentifiant();

    expect(identifiant).not.toBe(null);
    expect(identifiant.length).not.toBe(0);
  });

  it("L'enclos a un nom", () => {
    const nom: string = enclos.getNom();

    expect(nom).not.toBe(null);
    expect(nom.length).not.toBe(0);
  });

  it("L'enclos a une taille", () => {
    const taille: string = enclos.getTaille();

    expect(taille).not.toBe(null);
    expect(taille.length).not.toBe(0);
  });

  it("L'enclos ne peut encore accueillir aucune espèce", () => {
    const especes: string[] = enclos.getEspeces();

    expect(especes).not.toBe(null);
    expect(especes.length).toBe(0);
  });
});
