'use strict';

/* What are Lenses?

  at HYF you will learn to code by studying code
  lenses help you study the same code in different ways
    each lens is a new way to see the same code
    each way of seeing helps you learn something new

  try out some lenses on the program below to see how lenses work
    you don't need to understand the code!
    right now focus on using lenses, you'll cover the JS later on

  type these words one at a time in the input field above:
    highlight, variables, flowchart, pseudo

  you can also combine lenses, try these combinations:
    pseudo highlight, pseudo parsons

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
