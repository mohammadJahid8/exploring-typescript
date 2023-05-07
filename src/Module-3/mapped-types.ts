type Volume = {
  width: number;
  height: number;
  depth: number;
};

type Area = {
  [key in keyof Volume]: Volume[key];
};

type GenericArea<T> = {
  [key in keyof T]: T[key];
};

type ObjDemoType = {
  width: string;
  height: string;
  depth: string;
};

const ObjDemo: GenericArea<ObjDemoType> = {
  width: "jahid",
  height: "f",
  depth: "",
};
