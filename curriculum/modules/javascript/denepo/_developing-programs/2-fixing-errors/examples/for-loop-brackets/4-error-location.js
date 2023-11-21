// #todo

'use strict';

/* Error Location

  now let's get into the code, which line threw error?
    your console will tell you exactly where!


  see that part of the error message all the way over there ?     ----->
    that will tell you exactly which line number threw the error

  Uncaught SyntaxError: Unexpected token '}'                               VM40:31
    at eval (<anonymous>)
    at Object.console (study-with.js:4)
    at JavaScriptFE.studyWith (javascript-class.js:201)
    at HTMLButtonElement.<anonymous> (javascript-class.js:103)


  you can almost always click on it to open the code in your debugger
    in your debugger, the error line will be highlighted
    you can hover over the (x) to see what error was thrown


  line numbers change as you add/remove code or write more comments
    see up there ^ ? the message above says line 31, but this file has changed since then!
  you will indicate where the error ocurred with a comment in the code

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

  the mistake:

  the fix(es):
*/

for (let i = 0; i < 5; i++)
  console.log(i);
} // error
