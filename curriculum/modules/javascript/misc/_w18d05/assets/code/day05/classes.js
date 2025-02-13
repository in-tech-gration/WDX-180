const obj = { a: 42 }
const obj2 = new Object(); // {}
obj2.a = 42;

function Car(model){
  // Begin: {} => this
  // construction process:
  this.engine = "gas"
  this.model = model;
  // Returning: return this
}
Car.prototype.honk = function(){ return ("The model " + this.model) };
Car.prototype.wheels = 4;

const ford = new Car("Ford Punto");
console.log( ford ); // <== This is an object instance (of the Car constructor)
const ferrari = new Car("Ferrari Testarossa");
console.log( ford.honk() );
console.log( ferrari.honk() );

// CLASSES:
// JS Classes
// Object-Oriented Programming
// Object-Oriented Languages
class Car {
  // Begin: {} => this
  constructor(model){
    // construction process:
    this.engine = "gas"
    this.model = model;
  }
  // prototype. methods
  honk(){
    return "The model " + this.model;
  }
  drive(){
    console.log("I am driving!");
  }
  // Returning: return this
} 

const car = new Car("Ford Punto");
console.log(car);
console.log(car.honk())
const beetle = new Car("VW Beetle");
console.log( beetle.honk() );
console.log( typeof Car )