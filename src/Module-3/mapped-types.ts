// type Volume = {
//   width: number;
//   height: number;
//   depth: number;
// };

// type Area = {
//   [key in keyof Volume]: Volume[key];
// };

// mapped-type.ts
type GenericArea<T> = {
  readonly [key in keyof T]: T[key];
};

type ObjDemoType = {
  width: number;
  height: number;
  depth: number;
};

const ObjDemo: GenericArea<ObjDemoType> = {
  width: 1,
  height: 2,
  depth: 5,
};

// ObjDemo.height = "5";

// T hocche kon data type array
// index hocche array er index
// key hocche obj er property

function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}

const users = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

console.log(getArrayItem(users, 0, "name"));
