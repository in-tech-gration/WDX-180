// leon the turtle coder

function TurtleF(name, weight, speed) {
  this.name = name;
  this.weight = weight;
  this.speed = speed;
}

TurtleF.prototype.calcTenacity = function() {
  return this.weight * this.speed;
}

const turtle1 = new TurtleF("Leon", 13, 10);
console.log('tenacity', turtle1.calcTenacity())

class TurtleC {
  constructor(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
  }
  calcTenacity = function() {
    return this.weight * this.speed;
  }
}

const turtle2 = new TurtleC("Kostas", 1000, 1);
console.log('tenacity', turtle2.calcTenacity())

class Amivada extends TurtleC {
  constructor(name, weight, speed) {
    super(name, weight, speed);
  }
  setSpeed() {
    return this.speed * 0.7;
  }
}

class Morio extends Amivada {
  constructor(name, weight, speed) {
    super(name, weight, speed);
    this.speed = speed * 0.11111;
  }
  updateSpeed() {
    return this.speed;
  }
}

const amivada1 = new Amivada("Anna", null, 1000);
// { name: "Anna", weight: null, speed: 1000 }
console.log('Amivada1 speed is: ', amivada1.setSpeed())

// amivada1.changeSpeed(3000); // => this.speed = 3000
// amivada1.speed = 3000

const morio1 = new Morio("morio1", null, 1000);
morio1.setSpeed();
console.log('morio1 speed is: ', morio1.updateSpeed())