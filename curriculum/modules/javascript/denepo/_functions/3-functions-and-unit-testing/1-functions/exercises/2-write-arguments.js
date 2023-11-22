'use strict';
console.log('-- begin --');

// fill in the blanks to pass the assertions
// add default parameters of the correct type
// fill in the documentation to describe the functions

const scramble = (param1, param2, param3) => {
  const result = param1 + param2 + param3;
  return result;
};

const returned1 = scramble(_, _, _);
console.assert(returned1 === 'cab', 'Test 1');

const returned2 = scramble(_, _, _);
console.assert(returned2 === 'abc', 'Test 2');

const returned3 = scramble(_, _, _);
console.assert(returned3 === 'acb', 'Test 3');

const returned4 = scramble(_, _, _);
console.assert(returned4 === 'cba', 'Test 4');

const returned5 = scramble(_, _, _);
console.assert(returned5 === 'cab', 'Test 5');

const returned6 = scramble(_, _, _);
console.assert(returned6 === 'bac', 'Test 6');

console.log('-- end --');
