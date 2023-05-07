class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `THis ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const newStudent = new Student("jahid", 10, "A block");

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(numberOfClass: number): string {
    return `This ${this.name} will take ${numberOfClass} class`;
  }
}

const newTeacher = new Teacher("jahid", 20, "CTG", "Teacher");
console.log(newTeacher.makeSleep(2));
console.log(newTeacher.takeClasses(7));
