import { Animal } from "./Animal";

export const creationAnimalFrosty = (): Animal => {
  const nom: string = "Frosty";
  const espece: string = "Tigre";
  const age: number = 0;
  const enclos: string = "Grand enclos";

  return new Animal(nom, espece, age, enclos);
};
