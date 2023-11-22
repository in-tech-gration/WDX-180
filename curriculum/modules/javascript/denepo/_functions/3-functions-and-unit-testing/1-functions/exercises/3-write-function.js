'use strict';
console.log('-- begin --');

// write the function to pass the assertions
// fill in the documentation to describe the function

const scramble = () => {};

const _1_expect = 'yxz';
const _1_actual = scramble('x', 'z', 'y');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'zxy';
const _2_actual = scramble('x', 'y', 'z');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'yzx';
const _3_actual = scramble('z', 'x', 'y');
console.assert(_3_actual === _3_expect, 'Test 3');

console.log('-- end --');
