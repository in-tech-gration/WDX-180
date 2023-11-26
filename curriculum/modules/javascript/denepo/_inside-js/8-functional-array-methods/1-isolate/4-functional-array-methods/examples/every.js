// #todo

'use strict';

console.log('-- begin --');

/**
 * checks if a value is falsy
 * @param {any} val
 * @returns {boolean}
 */
const isFalsy = (val) => {
  return !Boolean(val);
};

// an empty array evaluates to true
const _1_arr = [];
const _1_expect = true;
const _1_actual = _1_arr.every(isFalsy);
console.assert(_1_actual === _1_expect, 'Test 1');

// evaluates to true when every entry is falsy
const _2_arr = ['', 0, null, undefined, false];
const _2_expect = true;
const _2_actual = _2_arr.every(isFalsy);
console.assert(_2_actual === _2_expect, 'Test 2');

// evaluates to false when all entries are truthy
const _3_arr = [true, 100, 'hello'];
const _3_expect = false;
const _3_actual = _3_arr.every(isFalsy);
console.assert(_3_actual === _3_expect, 'Test 3');

// evaluates to false if any entry is truthy
const _4_arr = ['', 0, 'hello', null, false];
const _4_expect = false;
const _4_actual = _4_arr.every(isFalsy);
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');
