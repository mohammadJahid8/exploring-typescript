// keyof guard

type Alphanumeric = string | number;
function addFunc(num1: Alphanumeric, num2: Alphanumeric): Alphanumeric {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}

addFunc("1", 1);

// in guard
type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

const normalUser1: NormalUserType = {
  name: "jahid",
};
const adminUser: AdminUserType = {
  name: "jahid",
  role: "admin",
};
