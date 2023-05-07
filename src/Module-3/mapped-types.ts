type Volume = {
  width: number;
  height: number;
  depth: number;
};

type Area = {
  [key in keyof Volume]: Volume[key];
};
