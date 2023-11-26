// #todo

'use strict';

console.log('-- begin --');

/**
 * converts a value to it's truthiness
 * @param {any} val - the value to convert
 * @returns {string} "truey" or "falsey"
 */
const truthiness = (val) => {
  return `${Boolean(val)}y`;
};

// evaluates to an empty array for an empty array
const _1_arr = [];
const _1_expect = [];
const _1_actual = _1_arr.map(truthiness);
console.assert(deepCompare(_1_actual, _1_expect), 'Test 1');

// works when all values are truthy
const _2_arr = [100, 'hello', true];
const _2_expect = ['truey', 'truey', 'truey'];
const _2_actual = _2_arr.map(truthiness);
console.assert(deepCompare(_2_actual, _2_expect), 'Test 2');

// works when all values are falsy
const _3_arr = ['', 0, NaN, null];
const _3_expect = ['falsey', 'falsey', 'falsey', 'falsey'];
const _3_actual = _3_arr.map(truthiness);
console.assert(deepCompare(_3_actual, _3_expect), 'Test 3');

// works when there are mixed values
const _4_arr = [true, 0, NaN, 'hello'];
const _4_expect = ['truey', 'falsey', 'falsey', 'truey'];
const _4_actual = _4_arr.map(truthiness);
console.assert(deepCompare(_4_actual, _4_expect), 'Test 4');

console.log('-- end --');

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));} // eslint-disable-line
