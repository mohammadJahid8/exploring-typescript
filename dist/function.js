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
