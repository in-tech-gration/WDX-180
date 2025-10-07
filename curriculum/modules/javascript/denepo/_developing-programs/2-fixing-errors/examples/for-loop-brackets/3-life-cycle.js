// #todo

'use strict';

/* Life Cycle

  this part of the error description can be tricky to wrap your head around
  take a minute to read through Program Life-Cycle in the README if you haven't yet
    ...
  done?  good, moving on.

  some errors are thrown before your code is even executed
    creation phase
  some errors are thrown while your program is running
    execution phase

  there are actually a few pretty easy ways to tell when your error occurred:

  1. try running your code in the debugger
    if it logs an error without opening your code in the debugger: creation
    if your code opens in the debugger: execution
  2. open your code in jsTutor
    did your code make it to the page where you can step through?
    if it did not, you had a creation phase error
  3. open your code in jsTutorLive
    does the error line have an [x] AND is highlighted red? execution!
    is there only an [x] but no highlighting? creation!
  4. look at the first line of your callstack, does it look like ...
    <anonymous>:x:y   -> execution
    <anonymous>       -> creation
  5. in firefox: does the `debugger eval code:x:y` link work?
    if it does not, you have a creation phase error
    if it does, you have an execution phase error


  now go ahead and fill in the life-cycle field of your error description

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
}
