//  NULL
const searchName = (value: string | null) => {
  if (value === null) {
    console.log("not found");
  } else {
    console.log("searchingg..");
  }
};

// searchName(null);

// UNKNOWN
const getSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertToSpeed = (speed * 1000) / 3600;
    console.log("speed is", convertToSpeed);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertToSpeed = (parseInt(value) * 1000) / 3600;
    console.log("speed is", convertToSpeed);
  }
};

// getSpeed(10);
// getSpeed("10 km");

// NEVER
function throwErr(message: string): never {
  throw new Error(message);
}

// throwErr("something went wrong");
