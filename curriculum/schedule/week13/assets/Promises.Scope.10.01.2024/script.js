// "use strict";
console.clear();
// Scope, var, let, const
// Scope is all about restricting the use of variables and functions in a particular area.
// These variables are declared in "Page Scope" aka "Global Scope"
var firstDefine; // First declare
var alwaysCanBeChanged = 42;
alwaysCanBeChanged = 43; // ...then assign
firstDefine = "Blah";
document.write(alwaysCanBeChanged); // ...and use
// 1) Never, ever declare a variable without a keyword (var/let/const)
// 2) Always use "use strict"; // Function parameters are private in FUNCTION SCOPE
function someFn(/* var */ privateVariable, /* var */ privateWhateverParameter){
  newVar = "new string";
  // console.log("firstDefine variable accessed through someFn()", firstDefine);
  return privateVariable + newVar;
}
console.log( 18, someFn("more") );

const console_ = {
  log: function(message){
    // Task: display message in the console
    return undefined;
  },
  clear: function(){
    // Task: clear the console
    return undefined;
  }
}

// console.log(17,privateVariable);
// Rule: when declaring a variable with var inside a function
// that variable becomes a private variable, only accessible
// to within that function's scope (green box!) FUNCTION SCOPE











console.log("End of file");