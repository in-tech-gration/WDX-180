// #todo

'use strict';

console.log('-- begin --');

/* using global scope variables in your functions is a VERY BAD IDEA

  these exercises are here to help you understand different scopes
  not as a suggestion for how to write your code

  notice how complicated this exercise is?
  that's why you should only use parameters and local variables in your functions
*/

let global = '';

const funk = (parameter) => {
  global = `${global}funky`;
  return `${global} ${parameter}`;
};

const funkReturn1 = funk('hello');
const funk1 = funkReturn1 === _;
console.assert(funk1, 'Test 1: funk');

global = '#';

const funkReturn2 = funk('boat');
const funk2 = funkReturn2 === _;
console.assert(funk2, 'Test 2: funk');

global = `${global}!`;

const funkReturn3 = funk('tree');
const funk3 = funkReturn3 === _;
console.assert(funk3, 'Test 3: funk');

console.log('-- end --');
