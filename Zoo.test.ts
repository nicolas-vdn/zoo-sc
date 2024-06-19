import { Zoo } from "./Zoo";

describe("Un zoo est créé, tous les attributs existent et sont vides", () => {
  let zoo: Zoo;

  beforeAll(() => {
    zoo = new Zoo();
  });

  it("Le zoo est défini", () => {
    expect(zoo).not.toBe(null);
  });
});
