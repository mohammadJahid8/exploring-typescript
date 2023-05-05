"use strict";
const userDetails = {
    name: "jahid",
    roll: 44,
    age: "d",
};
const calculator = (num1, num2, operation) => {
    return operation(num1, num2);
};
calculator(10, 20, (x, y) => x + y);
function subtration(num1, num2) {
    let result = num1 - num2;
    return result;
}
console.log(subtration(4, 1));
