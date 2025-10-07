// #todo

'use strict';

/* Possible Fixes

  sometimes fixing an error is simple, sometimes it requires some big changes
  sometimes there's one way to fix an error, other times there are many
  see how many you can think of!

  making the error go away doesn't mean your code is good code!
    you can make an error go away with messier code than what was there before
  treat each error as an opportunity to think of a better way to write your code

  for these exercises, don't actually fix the error. you'll want to keep them as a reference
  now go ahead and give your best explanation of how to fix the error:

*/

/*
  environment: Chrome

  name: SyntaxError
  message:  Unexpected token '}'

  callstack:  at eval (<anonymous>)
    at Object.console (study-with.js:4)
    at JavaScriptFE.studyWith (javascript-class.js:201)
    at HTMLButtonElement.<anonymous> (javascript-class.js:103)

  life cycle: creation phase

  the mistake: there is no opening curly brace around the for loop

  the fix(es): this one is pretty simple, just add an opening curly brace
*/

// for (let i = 0; i < 5; i++) // mistake
for (let i = 0; i < 5; i++) {
  console.log(i);
} // error
