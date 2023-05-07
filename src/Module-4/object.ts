class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = sound;
    this.species = name;
    this.sound = species;
  }
  makeSound() {
    console.log(`The ${this.name} ${this.species} says ${this.sound}`);
  }
}
