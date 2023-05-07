// keyof guard

type Alphanumeric = string | number;
function addFunc(num1: Alphanumeric, num2: Alphanumeric): Alphanumeric {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}

addFunc("1", 1);

// in guard
type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

const normalUser1: NormalUserType = {
  name: "jahid",
};
const adminUser: AdminUserType = {
  name: "jahid",
  role: "admin",
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am an admin and my role is ${user.role}`;
  } else {
    return `I am a normal user`;
  }
}

// console.log(getUser(adminUser));

// instanceof guard
class Animal1 {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`I am making sound`);
  }
}

class Dog extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`I am marking`);
  }
}
class Cat extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeaw() {
    console.log(`I am Meawing`);
  }
}

function isDog(animal: Animal1): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: Animal1): animal is Cat {
  return animal instanceof Cat;
}

function getAnimalSound(animal: Animal1) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound;
  }
}

const dogIns = new Dog("german", "dog");
const catIns = new Cat("german", "dog");

getAnimalSound(catIns);
