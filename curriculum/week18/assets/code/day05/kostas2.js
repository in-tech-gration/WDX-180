console.clear();
class Parent {
  constructor(surname) {
    this.surname = surname;
  }

  type = "Human";
  livesIn = "Greece";

  getName() {
    console.log("Name is " + this.surname);
  }
}

const person = new Parent("Papadopoulos");
person.getName();
console.log(person);

// Child inheriting from Parent
class Child extends Parent {
  constructor(name) {
    // How can we call the Parent constructor(surname)?
    super("Colias"); // <=== Parent.constructor();
    // What is super() doing?
    // 1) Finds the class we're extending: Parent
    // 2) Calls the Parent's constructor() with
    // the argument that we pass to super()
    // "Colias" => Parent => constructor("Colias");
    this.name = name;
  }
  yell() {
    console.log("AAAAAAAhhhhh!");
  }
}

const child = new Child("Leon");
console.log(child);
child.yell();
child.getName();

// Extending classes (example #2)
class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
}
const oldCalc = new Calculator();
console.log(oldCalc.add(2, 4));
class ScientificCalculator extends Calculator {
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}
const newCalc = new ScientificCalculator();
console.log(newCalc.add(2, 4));
console.log(newCalc.multiply(2, 4));

// Extending Classes: Example #3
class ParentAnimal { }
class ChildAnimal extends ParentAnimal { }
class GrandchildAnimal extends ChildAnimal { }