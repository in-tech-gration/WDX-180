// #todo

'use strict';

/* Mistake Location

  now things get tricky, where did you make a mistake in your code?
  you can no longer just copy-paste to figure this out!
  sometimes a mistake you made several lines up can cause an error later in your code

  instead of putting a line number on the mistake you will mark it with a comment
    line numbers change, the comment will always be there

  no go ahead and mark the mistake then describe it in your description
  this might take a few tries, keep note of all the different things you checked

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
    it wasn't: a problem with the for loop conditions

  the fix(es):
*/

for (let i = 0; i < 5; i++) // mistake
  console.log(i);
} // error




/* ----- PS ------

  often the error and the mistake are on the same line
  when this happens you can describe it like this:

*/

undeclaredVariable = 'what!'; // error, mistake
