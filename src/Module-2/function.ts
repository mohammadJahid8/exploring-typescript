// normal function

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

const sumarrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

const arr = [1, 2, 4];

const newarr = arr.map((el: number) => el * el);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "jahid",
  balance: 5,
  addBalance(money) {
    return this.balance + money;
  },
};

person.addBalance(5);

function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
