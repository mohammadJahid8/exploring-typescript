type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newTypeUnion = "age" | "roll" | "address";

const helllo: newTypeUnion = "age";

// by keyof
type PersonUnionKeyof = keyof PersonType;

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

getProperty({ name: "jahid", age: 10 }, "name");
