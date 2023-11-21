// #todo

'use strict';

/* Callstack

  your error message may contain more lines under the name & message. this is the callstack
  you don't need to understand this perfectly just yet
  but the more you practice the faster you'll learn ;)
    you'll learn more about the callstack later in this chapter and in /isolate

  you can copy all these lines into your error description
    the top line is the most important when first investigating an error


  go ahead and copy-paste the callstack into your error description:

*/





/*
  environment: Chrome

  name: SyntaxError
  message:  Unexpected token '}'

  callstack:
    at eval (<anonymous>)
    at Object.console (study-with.js:4)
    at JavaScriptFE.studyWith (javascript-class.js:201)
    at HTMLButtonElement.<anonymous> (javascript-class.js:103)

  life cycle:

  the mistake:

  the fix(es):
*/

for (let i = 0; i < 5; i++)
  console.log(i);
}
