// interface abstraction

interface IVehicle {
  start(): void;
  stop(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(public name: string, public model: string) {}

  start(): void {
    console.log("Startingg");
  }

  stop(): void {
    console.log("stopping");
  }
  move(): void {
    console.log("moving");
  }
}

const vehicleIns = new Vehicle("jahid", "s");

// abstract class
abstract class Vehicle1 {
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}

  abstract start(): void;
  abstract stop(): void;
  abstract move(): void;
}

class Car extends Vehicle1 {
  start(): void {
    console.log("starting");
  }
  stop(): void {
    console.log("stopiing");
  }
  move(): void {
    console.log("moving");
  }
}
