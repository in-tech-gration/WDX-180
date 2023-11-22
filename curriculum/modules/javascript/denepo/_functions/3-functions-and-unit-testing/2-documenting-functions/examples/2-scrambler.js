'use strict';

console.log('-- begin --');

/**
 * This returns a single string containing it's parameters,
 * but rearranged into a different order.
 *
 * @param {string} param1 - Becomes the last value in the result.
 * @param {string} param2 - Becomes the first value in the result.
 * @param {string} param3 - Becomes the second value in the result.
 * @returns {string} A string with: p1 -> r3, p2 -> r1, p3 -> r2.
 */
const scramble = (param1, param2, param3) => {
  const result = param2 + param3 + param1;
  return result;
};

const _1_expected = 'zyx';
const _1_actual = scramble('x', 'z', 'y');
console.assert(_1_actual === _1_expected, 'Test 1');

const _2_expected = 'yzx';
const _2_actual = scramble('x', 'y', 'z');
console.assert(_2_actual === _2_expected, 'Test 2');

const _3_expected = 'yxz';
const _3_actual = scramble('z', 'y', 'x');
console.assert(_3_actual === _3_expected, 'Test 3');

const _4_expected = 'xzy';
const _4_actual = scramble('y', 'x', 'z');
console.assert(_4_actual === _4_expected, 'Test 4');

console.log('-- end --');
