// Declare variables+functions: (tools)
function somethingB(){
  somethingA();
}
function somethingA(){
  var private = 32;
  function inner(){
    console.log(4);
  }
  console.log(3);
  inner();
}
var value = 42;
// Hoisting does not affect object methods:
var obj = {
  prop1: "whatever",
  method1: function(){},
  method2: function(){}
}
// Start using the tools:
console.log(1);
console.log(2);
obj.prop1;
obj.method1;
somethingA();
somethingB();
somethingA():

