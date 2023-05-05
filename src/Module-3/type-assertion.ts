let nothing: any;

nothing = "Hello how are you?";
(nothing as string).length;
// can be write as
// <string>nothing.;

// (nothing as number) = 444;

// ---func

const kmTogm = (value: number | string): number | string | undefined => {
  if (typeof value === "string") {
    const conversion = parseFloat(value) * 1000;

    return `Result ${conversion}`;
  } else if (typeof value === "number") {
    return value * 1000;
  }
};

// const result = <string>kmTogm("5");
const result1 = <number>kmTogm(5);
console.log(result1);
