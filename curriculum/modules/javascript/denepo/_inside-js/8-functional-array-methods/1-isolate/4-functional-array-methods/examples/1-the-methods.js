// #todo

'use strict';

console.log('-- begin --');

/* array methods use callbacks
  you can write and test your logic as a separate function
  then trust the array methods to use it correctly
*/

/**
 * returns true if a value is truthy, false if it is falsy
 * @param {any} entry
 * @returns {boolean}
 */
const isTruthy = (entry) => {
  return Boolean(entry);
};

// test isTruthy
const isTruthyTest1 = isTruthy(0) === false;
console.assert(isTruthyTest1, '0 is not truthy');

const isTruthyTest2 = isTruthy(1) === true;
console.assert(isTruthyTest2, '1 is truthy');

const isTruthyTest3 = isTruthy('') === false;
console.assert(isTruthyTest3, '"" is not truthy');

const isTruthyTest4 = isTruthy('hi') === true;
console.assert(isTruthyTest4, '"hi" is truthy');

// use isTruthy to process this array with different methods
const _0_array = ['hi!', 0, 199, '', false, true];

// create a new array filled with the return values of isTruthy
const _1_mapped = _0_array.map(isTruthy);

// create a new array with only the truthy values
const _2_filtered = _0_array.filter(isTruthy);

// find the first truthy entry
const _3_found = _0_array.find(isTruthy);

// determine if every entry in the array is truthy
const _4_everied = _0_array.every(isTruthy);

// determine if some entries in the array are truthy
const _5_somed = _0_array.some(isTruthy);

console.log('-- end --');
