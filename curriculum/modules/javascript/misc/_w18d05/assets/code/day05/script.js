// Function syntax:
function Car(model){
  this.engine = "gas"
  this.model = model;
}

Car.prototype.honk = function(){ return ("The model " + this.model) };
const car = new Car("Ford");

// Class Syntax:
class ClassCar {
  constructor(model){
    this.engine = "gas"
    this.model = model;
  }
  honk(){
    return "The model " + this.model;
  }
}