import { Animal } from "../classes/Animal";
import { Zoo } from "../classes/Zoo";
import { creationAnimalFrosty } from "./animal";

export const ajoutFrostyZoo = (zoo: Zoo): Animal => {
  const animal: Animal = creationAnimalFrosty();

  zoo.addAnimal(animal);

  return animal;
};
