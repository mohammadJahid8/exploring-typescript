type Mendatorytype = { name: string; age: number };
// interface IMendatorytype  { name: string; age: number }

const genericFunc2 = <T extends Mendatorytype>(info: T) => {
  const hasjob = "Yes";
  const newdata = { ...info, hasjob };
  return newdata;
};

interface myInfoTpe {
  name: string;
  age: number;
  roll?: number;
}
const myInfoss2: myInfoTpe = {
  name: "jahid",
  age: 2,
  roll: 1,
};

const funresult2 = genericFunc2<myInfoTpe>(myInfoss2);

funresult2.age;
