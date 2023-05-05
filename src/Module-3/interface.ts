type user = {
  name: string;
  age: number;
};

type extendedUser = user & {
  role: "jahid";
};

// interface type alias

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

const myUser: IExtendedUser = {
  name: "jahid",
  age: 2,
  role: "jahid",
};

//for functions
type addType = (x: number, y: number) => number;
const addNumber: addType = (a, b) => a + b;

// by interfe type
interface IAddNum {
  (x: string, y: string): string;
}
const IaddNumber: IAddNum = (a, b) => a + b;
IaddNumber("s", "s");

// for array
type arrayNumType = number[];
type arrayStringType = string[];

const demoArr: arrayNumType = [1, 2, 6];
const demoArr2: arrayStringType = ["1", "2", "6"];

// interface
interface arrTpye {
  [index: number]: number;
}

const demoArr4: arrTpye = [1, 2, 6];
