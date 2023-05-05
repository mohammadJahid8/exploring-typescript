type GenericArray<T> = Array<T>;

const num1: GenericArray<number> = [1, 2];
const num2: GenericArray<string> = ["s"];
const bool: GenericArray<boolean> = [false];

type UserType = { name: string; age: number; married: boolean };

const arrObj: GenericArray<UserType> = [
  {
    name: "jahid",
    age: 1,
    married: false,
  },
];
