// #todo

'use strict';

console.log('-- begin --');

/* to understand function scope, you need to ask one simple question:

  - Where was this variable declared?

  At this stage in your programming life there are 3 answers to this question

  PARAMETER: the variable was declared as a parameter, initialized when the function is called
  LOCAL: the variable was declared and initialized in the function body
  GLOBAL: the variable is not a parameter and was not declared locally
    - it was declared outside of the function body
    - you should avoid using global variables for now

  hint: use JS Tutor and the debugger

*/

// function parameters are SCOPED to that function
const findTheType = (param) => {
  // variables declared in a function body are SCOPED to that function call
  const result = typeof param;
  return result;
};

// what happens if you uncomment the console.logs below?

console.log('-- example 1 --');
const arg1 = 5;
const returned1 = findTheType(arg1);
console.log(typeof returned1, returned1);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- example 2 --');
const arg2 = 'hi!';
const returned2 = findTheType(arg2);
console.log(typeof returned2, returned2);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- example 3 --');
const arg3 = null;
const returned3 = findTheType(arg3);
console.log(typeof returned3, returned3);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- end --');
