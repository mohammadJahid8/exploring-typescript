"use strict";
// normal function
function sum(num1, num2) {
    return num1 + num2;
}
const sumarrow = (num1, num2) => {
    return num1 + num2;
};
const arr = [1, 2, 4];
const newarr = arr.map((el) => el * el);
const person = {
    name: "jahid",
    balance: 5,
    addBalance(money) {
        return this.balance + money;
    },
};
person.addBalance(5);
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
