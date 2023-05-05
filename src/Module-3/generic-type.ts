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

type GenericTuple<X, Y> = [X, Y];

const tupleArr: GenericTuple<string, string> = ["s", "d"];

interface IUserType {
  name: string;
  age: number;
  isMarried: boolean;
}

const tupleObj: GenericTuple<IUserType, string> = [
  {
    name: "jahid",
    age: 1,
    isMarried: false,
  },
  "hello",
];
