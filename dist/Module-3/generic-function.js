"use strict";
const genarray = (param) => {
    return [param];
};
genarray("hello");
const genarray2 = (param1, param2) => {
    return [param1, param2];
};
genarray2(1, [true]);
const genericFunc = (info) => {
    const hasjob = "Yes";
    const newdata = Object.assign(Object.assign({}, info), { hasjob });
    return newdata;
};
const myInfoss = {
    name: "jahid",
    age: 2,
};
const funresult = genericFunc(myInfoss);
funresult.age;
