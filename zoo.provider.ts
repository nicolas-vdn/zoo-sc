import { Animal } from "./Animal";
import { Zoo } from "./Zoo";
import { creationAnimalFrosty } from "./animal.provider";

export const ajoutFrostyZoo = (zoo: Zoo): Animal => {
  const animal: Animal = creationAnimalFrosty();

  zoo.addAnimal(animal);

  return animal;
};
