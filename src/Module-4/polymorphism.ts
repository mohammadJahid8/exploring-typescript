class Person {
  takeNap(): void {
    console.log(`I am sleeping 1hrs`);
  }
}

class TeacherP extends Person {
  takeNap(): void {
    console.log(`I am sleeping 5hrs`);
  }
}

class Student1 extends Person {
  takeNap(): void {
    console.log(`I am sleeping 10hrs`);
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const personIns1 = new Person();
const teacherIns1 = new TeacherP();
const studentIns1 = new Student1();
getNap(personIns1);
getNap(teacherIns1);
getNap(studentIns1);

class Shape {
  getArea(): number {
    return 0;
  }
}

// area -> pie r^2
class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfShape(param: Shape): void {
  console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 5));
