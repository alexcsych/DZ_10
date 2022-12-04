// Реалізація
class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  getFullInfo() {
    return `${this.brand}, ${this.model}, ${this.getAge()}`;
  }
  getAge() {
    return new Date().getYear() - this.manufactureDate.getYear();
  }
}

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger() {
    if (this.passengerCount < this.passengerLimit) {
      this.passengerCount++;
      return true;
    } else return false;
  }
  getFullInfo() {
    return `${this.brand}, ${this.model}, ${this.getAge()}, ${
      this.passengerLimit
    }`;
  }
}
class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return weight <= this.capacity;
  }
  getFullInfo() {
    return `${this.brand}, ${this.model}, ${this.getAge()}, ${this.capacity}`;
  }
}

// Робота

const vehSimple = new Vehicle(
  { lenth: 2, width: 2, height: 2 },
  "Tesla",
  "007",
  new Date("December 20, 2020 20:20:20")
);

console.log("vehSimple.getAge():", vehSimple.getAge());
console.log("vehSimple.getFullInfo:", vehSimple.getFullInfo());

const pasTransSimple = new PassengerTransport(
  { lenth: 2, width: 2, height: 2 },
  "Tesla",
  "007",
  new Date("December 20, 2020 20:20:20"),
  10,
  8
);

console.log("pasTransSimple.addPassenger:", pasTransSimple.addPassenger());
console.log("pasTransSimple.addPassenger:", pasTransSimple.addPassenger());
console.log("pasTransSimple.addPassenger:", pasTransSimple.addPassenger());
console.log("pasTransSimple.getFullInfo:", pasTransSimple.getFullInfo());

const freightTransport = new FreightTransport(
  { lenth: 2, width: 2, height: 2 },
  "Tesla",
  "007",
  new Date("December 20, 2020 20:20:20"),
  100
);

console.log(
  "freightTransport.checkLoadingPossibility:",
  freightTransport.checkLoadingPossibility(80)
);
console.log(
  "freightTransport.checkLoadingPossibility:",
  freightTransport.checkLoadingPossibility(180)
);
console.log("freightTransport.getFullInfo:", freightTransport.getFullInfo());
