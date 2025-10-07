// #todo

'use strict';

console.log('-- begin --');

/**
 * determines if a string is curious or not
 * @param {string} str - the string to check for enthusiasm
 * @returns {boolean}
 */
const isCurious = (str) => {
  return str.includes('?');
};

// evaluates to undefined if the array is empty
const _1_arr = [];
const _1_expect = undefined;
const _1_actual = _1_arr.find(isCurious);
console.assert(_1_actual === _1_expect, 'Test 1');

// evaluates to undefined if there are no curious strings
const _2_arr = ['!', 'hoy', ':)'];
const _2_expect = undefined;
const _2_actual = _2_arr.find(isCurious);
console.assert(_2_actual === _2_expect, 'Test 2');

// finds the only curious string
const _3_arr = ['huh', 'huh?', 'huh!'];
const _3_expect = 'huh?';
const _3_actual = _3_arr.find(isCurious);
console.assert(_3_actual === _3_expect, 'Test 3');

// finds the first curious string
const _4_arr = ['huh', 'huh?', 'what?'];
const _4_expect = 'huh?';
const _4_actual = _4_arr.find(isCurious);
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');
