class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  public makeSound() {
    console.log(`The ${this.name} ${this.species} says ${this.sound}`);
  }
}

const dog = new Animal("German shepard", "dog", "ghew ghew");

console.log(dog);

dog.makeSound();
