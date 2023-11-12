'use strict';

/* The Study Lens

  the study lens is your home base for most examples and exercises
    it has an editor just like the one in VSCode (shortcuts, autocomplete, ...)

  from here you can edit the code, save your changes, and use other lenses
    try selecting a few lines of code and clicking a lens

  see >> OPTIONS << up top? explore it a bit
    this lets you configure the ?study environment
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
