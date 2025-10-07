'use strict';

/* Dynamic Study

  dynamic analysis is studying how a program behaves when you run it
  this includes things like:
    - using the program yourself
    - checking the console for helpful information
    - stepping through your code in a debugger or memory visualization tool
    - manually tracing the code like the computer would
  this helps you understand what happens in memory and the user's experience

  open your browser's console and try these dynamic lenses:
    run, trace
    (you'll learn how to understand the console output later)

  you'll explore dynamic study in depth later on
    including more lenses to help you visualize program memory

  for now just focus on the difference between STATIC and DYNAMIC

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
