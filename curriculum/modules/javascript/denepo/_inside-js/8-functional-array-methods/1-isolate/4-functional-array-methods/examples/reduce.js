// #todo

'use strict';

console.log('-- begin --');

/**
 * joins two strings together with a comma and a space
 * @param {string} acc
 * @param {string} next
 * @returns {string} "acc, next"
 */
const commaSpace = (acc, next) => {
  return `${acc}, ${next}`;
};

// reduce requires an initial value if the array is empty
const _1_arr = [];
const _1_expect = '';
const _1_actual = _1_arr.reduce(commaSpace, '');
console.assert(_1_actual === _1_expect, 'Test 1');

// reduce evaluates to the first value if there is only one
const _2_arr = ['hello!'];
const _2_expect = 'hello!';
const _2_actual = _2_arr.reduce(commaSpace);
console.assert(_2_actual === _2_expect, 'Test 2');

// reduce combines the values if there are two
const _3_arr = ['hello', 'goodbye'];
const _3_expect = 'hello, goodbye';
const _3_actual = _3_arr.reduce(commaSpace);
console.assert(_3_actual === _3_expect, 'Test 3');

// reduce combines the values if there are many
const _4_arr = ['huh', 'huh?', 'what?', 'what!?'];
const _4_expect = 'huh, huh?, what?, what!?';
const _4_actual = _4_arr.reduce(commaSpace);
console.assert(_4_actual === _4_expect, 'Test 4');

// reduce can use the initial value at the beginning
const _5_arr = ['huh', 'huh?', 'what?', 'what!?'];
const _5_expect = 'confusion, huh, huh?, what?, what!?';
const _5_actual = _5_arr.reduce(commaSpace, 'confusion');
console.assert(_5_actual === _5_expect, 'Test 4');

console.log('-- end --');
