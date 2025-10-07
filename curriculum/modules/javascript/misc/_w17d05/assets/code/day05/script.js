function Message(options) {
  if (!options.text) {
    this.text = "[empty]";
  } else {
    this.text = options.text;
  }
  this.from = options.from;
  this.to = options.to;
  if (options.noTime) {
    this.time = "";
  } else {
    this.time = new Date();
  }
}
const msg1 = new Message({ from: "A", to: "B", text: "hello" });
const msg2 = new Message({ from: "B", to: "A" });
const msg3 = new Message({ from: "C", to: "B", text: "Hey!", noTime: true });
Message.prototype.displayMessage = function displayMessage() {
  document.body.innerHTML += "<br>" + this.text + " from: " + this.from;
}
Message.prototype.version = 3.14;
msg1.displayMessage();
msg2.displayMessage();
msg3.displayMessage();
// console.log(msg1.__proto__); // __proto__ => Message.prototype
// console.log(Message.prototype); 

// Create our own version of an Array:
function ArrayV2(array) {
  this.array = array;
}
ArrayV2.prototype.getArray = function() {
  return this.array;
}
ArrayV2.prototype.getMax = function() {
  return Math.max(...this.array);
}
ArrayV2.prototype.remove = function(value) {
  // PRACTICE: Find the value inside this.array
  // and remove it and return it
}
const a1 = new ArrayV2([10, 20, 30, 5]);
const a2 = new ArrayV2([9, 8, 7]);
// console.log(a1.getArray());
a1.getArray = function() {
  console.log("getArray prototype overriden!");
  return "Custom!";
}
// console.log(a1);
// console.log(a1.getArray());
// console.log(a2.getArray());
// console.log(a1.getMax());

// const cell = document.querySelector("td"); // td:last-child
// cell.innerText = "";
// cell.addEventListener("click", function(event) {
//   event.target.innerText = "X";
// });
function Cell(selector) {
  // {}
  const td = document.querySelector(selector); 
  this.el = td;
  this.el.addEventListener("click", function(event) {
    console.log("clicked!")
    event.target.innerText = "X";
  })
  // return {}
}
Cell.prototype.getInnerText = function() {
  return this.el.innerText;
}
Cell.prototype.setInnerText = function(value) {
  return this.el.innerText = value;
}
const cell1 = new Cell("td:first-child"); // cell1 === {}
const cell2 = new Cell("td:last-child"); // cell2 === {}
// console.log(cell1,cell2);
console.log( cell1.getInnerText() );
cell1.setInnerText("?");