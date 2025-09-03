class Car {
  #brand;
  #model;
  speed;
  isTrunkOpen;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    this.speed = carDetails.speed;
    this.isTrunkOpen = carDetails.isTrunkOpen
  }

  displayInfo() {
    let trunkStatus = '';
    if(!this.isTrunkOpen) {
      trunkStatus = 'closed'
    } else {
      trunkStatus = 'open'
    }

    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, trunk is ${trunkStatus}`)
  }

  go() {
    if(this.speed >= 200) {
      return
    }
    if(this.isTrunkOpen) {
      return
    }
    this.speed += 5;
  }

  brake() {
    if(this.speed <= 0) {
      return
    }
    this.speed -= 5;
  }

  openTrunk() {
    if(this.speed = 0){
    this.isTrunkOpen = true
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration
  }

  go() {
    if(this.speed >= 300) {
      return
    }
    if(this.isTrunkOpen) {
      return
    }
    this.speed += this.acceleration;
  }

  openTrunk() {
    return
  }

  closeTrunk() {
    return
  }
}

const car1 = new Car({
  brand: 'Toyota', 
  model: 'corolla', 
  speed: 0, 
  isTrunkOpen: false
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3', 
  speed: 0,
  isTrunkOpen: true
});

const car3 = new RaceCar({
  brand: 'McLaren',
  model: 'F1', 
  speed: 0,
  isTrunkOpen: true,
  acceleration: 20
});

car1.openTrunk();
car1.brake();
car1.displayInfo();

car2.closeTrunk();
car2.go();
car2.displayInfo();

car3.displayInfo();