"use strict";
let nothing;
nothing = "Hello how are you?";
nothing.length;
// can be write as
// <string>nothing.;
// (nothing as number) = 444;
// ---func
const kmTogm = (value) => {
    if (typeof value === "string") {
        const conversion = parseFloat(value) * 1000;
        return `Result ${conversion}`;
    }
    else if (typeof value === "number") {
        return value * 1000;
    }
};
// const result = <string>kmTogm("5");
const result1 = kmTogm(5);
console.log(result1);
