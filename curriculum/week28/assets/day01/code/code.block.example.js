// Will code blocks work?
game: {
  function run(){ // WARNING: Will be hoisted and becomes available globally!
    console.log("run");
  }
  var some = 333; // WARNING: Will become a global variable
  const runSomething = function(){
  } // This will be contained
  let something = 42; // This will be contained
  const whatever = 42; // This will contained
  console.log(1, something);
}
console.log(2,run(), some);