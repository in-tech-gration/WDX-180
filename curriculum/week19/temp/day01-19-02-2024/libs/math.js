const { test } = require("../test.js");
console.log("test", test);

function add(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
const a = 36;
// console.log(4*9);
// console.log(add.toString());
// TODO: mul()
// TODO: div()

// A Module's output: (what we share with other modules)
// => Exporting/Output
module.exports = {
  // addMethod => out/exported
  add,
  sub,
  version: 3.14,
  // TODO: Export mul + div
}