// Static Methods: They appear on Classes and Function Constructors
class Car {
  // Methods inherited by instances of this class:
  drive(){} 
  accelerate(){}

  // This is only available to the Car object
  static canProduceCars(){}
  static version = 3.2; 
}
function Ship(){}
// Method inherited by instances of this class:
Ship.prototype.steer = function(){}
Ship.prototype.alarm = ()=>{}
// Static methods are kept for the Objects themselves
Ship.canBuildShips = function(){}
Ship.type = "Cruiser";

const car = new Car();
const ship = new Ship();
// We call the methods on the object instances:
car.drive();
ship.steer();

// We call static methods directly from the Objects:
Car.canProduceCars();
Ship.canBuildShips();

// An easy way to quickly identify static properties
// is to look for a Capital letter Object at the left:
Object.hasOwn(); 
Promise.resolve();