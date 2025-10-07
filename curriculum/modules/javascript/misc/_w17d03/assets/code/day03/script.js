// updateState: function() {
//   if (this.state + 1 < this.states.length) {
//     this.state = this.state + 1;
//   } else {
//     this.state = 0;
//   }
// },
// states: ["✅", "❌", "❓"],
// getState: function() {
//   return this.states[this.state]
// }
function Cell(initialStateIndex) {
  // 1) Creating an empty object {} (embryo) (JS)
  // this === the name (a reference) of our unborn object {}

  // 2) Object construction phase (our part)
  // const state = initialStateIndex;
  // this.state = state;
  this.state = initialStateIndex;
  this.type = "Cell";

  // x) Return the constructed object (JS)
  // return { the constructed object } // Always let the constructor return
}
// const cell1 = new Cell(0); => undefined
// Prototype: Function.prototype = {...}
Cell.prototype.states = ["✅", "❌", "❓"];
Cell.prototype.getState = function(){
  return this.states[this.state]
}
Cell.prototype.updateState = function(){
    if (this.state + 1 < this.states.length) {
      this.state = this.state + 1;
    } else {
      this.state = 0;
    }
}

const cell1 = new Cell(0); // => {} is of type Cell
// console.log(cell1);
// Objective => { state: 0, type: "cell" }
// new Cell(1);
// typeof Cell === "function"
const cell2 = new Cell(1); // => 2nd place in the states[]
// console.log(cell2.getState()) // ❌
// console.log(cell2.updateState()) // (1) ❌ => (2) ❓
// console.log(cell2.getState()) // ❓


// Example #02
const student = {
  // Unique properties: => parameters
  firstName: "John",
  lastName: "Doe",
  number: 100,
  // Shared properties/methods: => prototype
  getFullName: function(){
    return this.firstName + " " + this.lastName;
  } 
}
// console.log( student.getFullName() );
function Student(firstName, lastName, number){
  // {}
  this.firstName = firstName;
  this.lastName = lastName;
  this.number = number;
  // return { ... }
}
Student.prototype.getFullName = function(){
  return this.firstName + " " + this.lastName;
}
const s1 = new Student("John","Doe", 100);
const s2 = new Student("Jane","Doe", 101);
console.log(s1.getFullName());
console.log(s2.getFullName());

const studentDetails = { firstName: "first", lastName: "last", number: 102 }

// Practice: check how/whether this works?
function StudentV2(...studentDetails){ // Rest ... function parameters
  
}
function StudentV3(studentDetails /* === Object */){
  
}
new StudentV3({ a: 1, b: 2 })
