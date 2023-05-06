const genarray = (param: string): string[] => {
  return [param];
};

genarray("hello");

const genarray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

genarray2<number, Array<boolean>>(1, [true]);

const genericFunc = <T>(info: T) => {
  const hasjob = "Yes";
  const newdata = { ...info, hasjob };
  return newdata;
};

const myInfoss = {
  name: "jahid",
  age: 2,
};

const funresult = genericFunc(myInfoss);

funresult.age;
