"use strict";
// interface IMendatorytype  { name: string; age: number }
const genericFunc2 = (info) => {
    const hasjob = "Yes";
    const newdata = Object.assign(Object.assign({}, info), { hasjob });
    return newdata;
};
const myInfoss2 = {
    name: "jahid",
    age: 2,
    roll: 1,
};
const funresult2 = genericFunc2(myInfoss2);
funresult2.age;
