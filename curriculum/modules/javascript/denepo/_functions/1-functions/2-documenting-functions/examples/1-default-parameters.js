// #todo

'use strict';

console.log('-- begin --');

/* Default Parameters

  there's a difference between what JavaScript can do
  and the best practices for using it

  it is possible to pass any type of parameter into a function
  or not to pass anything at all
  but those aren't the best things to do

  the best practice is to be clear about the type of function parameters
  and to always pass those types

  default parameters are a syntax that make your functions more readable
  and ensure that each parameter is defined, even when no argument is passed

  default parameters do not prevent you from passing in the wrong type
  they just make it clear that you'-- re expected not to

  more info on default parameters:
  - https://www.javascripttutorial.net/es6/javascript-default-parameters/
  - https://javascript.info/function-basics#default-values
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
  - TechSith: https://www.youtube.com/watch?v=0_5Nns9YgjQ
  - LearnCodeOnline: https://www.youtube.com/watch?v=5-p7--fbWrA

*/

/* this function repeats a string as many times as you want
  it has two parameters
  - stringParam (a string): the string you want to repeat
  - numberParam (a number): how many times to repeat it

  it returns a string: the initial string repeated
*/
const repeater = (stringParam = '', numberParam = 0) => {
  console.log('stringParam:', typeof stringParam, stringParam);
  console.log('numberParam:', typeof numberParam, numberParam);

  let result = '';
  for (let i = 0; i < numberParam; i++) {
    result += stringParam;
  }

  return result;
};

// passing two argumens with the correct types
const repeated1 = repeater('yoy', 3);
console.log('-- repeated1:', typeof repeated1, repeated1);

// passing only the first string argument
const repeated2 = repeater('yoy');
console.log('-- repeated2:', typeof repeated2, repeated2);

// passing only a number (wait, what! stringParam is assigned this number?)
const repeated3 = repeater(2);
console.log('-- repeated3:', typeof repeated3, repeated3);

// passing no arguments.  default values to the rescue!
const repeated4 = repeater();
console.log('-- repeated4:', typeof repeated4, repeated4);

/* default values are only used if no argument is passed
  they also hint to the developer what type should be passed
  but JavaScript will not stop you from passing the wrong types
*/

// passing the wrong type for stringParam
const repeated5 = repeater(null, 4);
console.log('-- repeated5:', typeof repeated5, repeated5);

// passing the wrong type for numberParam
const repeated6 = repeater('horse', false);
console.log('-- repeated6:', typeof repeated6, repeated6);

// passing the wrong type for both parameters
const repeated7 = repeater(true, undefined);
console.log('-- repeated7:', typeof repeated7, repeated7);

console.log('-- end --');
