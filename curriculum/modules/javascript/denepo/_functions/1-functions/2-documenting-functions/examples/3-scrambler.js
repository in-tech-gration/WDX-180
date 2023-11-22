// #todo

'use strict';

console.log('-- begin --');

/**
 * This returns a single string containing it's parameters,
 * but rearranged into a different order.
 *
 * @param {string} [param1=''] - Becomes the last string in the result.
 * @param {string} [param2=''] - Becomes the first string in the result.
 * @param {string} [param3=''] - Becomes the second string in the result.
 * @returns {string} A string with p1 -> r3, p2 -> r1, p3 -> r2.
 */
const scramble = (param1 = '', param2 = '', param3 = '') => {
  const result = param2 + param3 + param1;
  return result;
};

const _1_expected = 'zyx';
const _1_actual = scramble('x', 'z', 'y');
const _1_test = _1_actual === _1_expected;
console.assert(_1_test, 'Test 1');

const _2_expected = 'yzx';
const _2_actual = scramble('x', 'y', 'z');
const _2_test = _2_actual === _2_expected;
console.assert(_2_test, 'Test 2');

const _3_expected = 'yxz';
const _3_actual = scramble('z', 'y', 'x');
const _3_test = _3_actual === _3_expected;
console.assert(_3_test, 'Test 3');

const _4_expected = 'xzy';
const _4_actual = scramble('y', 'x', 'z');
const _4_test = _4_actual === _4_expected;
console.assert(_4_test, 'Test 4');

console.log('-- end --');
