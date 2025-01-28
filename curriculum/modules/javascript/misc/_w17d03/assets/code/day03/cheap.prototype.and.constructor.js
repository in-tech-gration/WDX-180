// Our own 'cheap' simple version of an
// object constructor (function) and the prototype (prototype is a set of properties/methods that can be shared across multiple objects)

const CellPrototype = {
  updateState: function() {
    // Off-by-one Errors (OBOE, OBO)
    // "Obi-wan" errors
    if (this.state + 1 < this.states.length) {
      this.state = this.state + 1;
    } else {
      this.state = 0;
    }
  },
  //         0     1      2
  states: ["✅", "❌", "❓"],
  getState: function() {
    return this.states[this.state]
  }
}
function CellConstructor(initialStateIndex) {
  // Check for initialStateIndex to be 0, 1 or 2
  // If not throw an Error "Index cannot be other than 0, 1 or 2"
  return {
    state: initialStateIndex,
    ...CellPrototype,
    //neOne:CellPrototype.newFn.newFn()
  }
}
const cell1 = CellConstructor(0);
const cell2 = CellConstructor(1);
const cell3 = CellConstructor(2);

console.log(cell1.getState());
console.log(cell1.updateState()); // X
console.log(cell1.getState());
console.log(cell1.updateState()); // ?
console.log(cell1.getState());
console.log(cell1.updateState()); // CHECK
console.log(cell1.getState());


