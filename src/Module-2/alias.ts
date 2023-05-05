// type UserType = {
//   name: string;
//   roll: number;
//   age: string;
// };

// const userDetails: UserType = {
//   name: "jahid",
//   roll: 44,
//   age: "d",
// };

// type OperationType = (x: number, y: number) => number;

// const calculator = (num1: number, num2: number, operation: OperationType) => {
//   return operation(num1, num2);
// };

// calculator(10, 20, (x, y) => x + y);

function subtration(num1: number, num2: number): number {
  let result = num1 - num2;
  return result;
}

const subresult = subtration(4, 1);
console.log("subresult", subresult);
