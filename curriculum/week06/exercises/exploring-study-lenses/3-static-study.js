'use strict';

/* Static Study

  static analysis is when you study code WITHOUT running the program
  this includes things like:
    - reading the code (out loud)
    - discussing the code in groups
    - finding how the variables are used
    - understanding comments and variable names
    - studying the code's syntax
    - making sure you know each language feature used

  try out these different static-study lenses on this code:
    highlight, variables, flowchart, parsons,
    ask, blanks, pseudo highlight, pseudo parsons

*/

let backwards = null;
while (backwards === null) {
  backwards = prompt("enter something backwards, we'll reverse it");
  console.log(backwards);
}

let fixed = '';
for (let character of backwards) {
  fixed = character + fixed;
}
console.log(fixed);

let processed = '"' + backwards + '" -> "' + fixed + '"';
alert(processed);
