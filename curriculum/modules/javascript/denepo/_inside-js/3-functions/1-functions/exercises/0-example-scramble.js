// #todo

'use strict';
console.log('-- begin --');

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

// correct the expected value to pass the assertion
const _3_expected = 'yzx';
const _3_actual = scramble('z', 'y', 'x');
console.assert(_3_actual === _3_expected, 'Test 3');

// correct the arguments to pass the assertion
const _4_expected = 'zyx';
const _4_actual = scramble('y', 'x', 'z');
console.assert(_4_actual === _4_expected, 'Test 4');

console.log('-- end --');
