// #todo

'use strict';

console.log('-- begin --');

/**
 * checks if a string is enthusiastic
 * @param {string} str - string to check for "!"
 * @returns {boolean} if str contains "!" or not
 */
const isEnthusiastic = (str) => {
  return str.includes('!');
};

// an empty array evaluates to an empty array
const _1_arr = [];
const _1_expect = [];
const _1_actual = _1_arr.filter(isEnthusiastic);
console.assert(_1_actual === _1_expect, 'Test 1');

// filters everything when there are no enthusiastic strings
const _2_arr = ['', ':)', 'tree'];
const _2_expect = [];
const _2_actual = _2_arr.filter(isEnthusiastic);
console.assert(_2_actual === _2_expect, 'Test 2');

// keeps everything when there are only enthusiastic strings
const _3_arr = ['! :(', 'hi!', '!?'];
const _3_expect = ['! :(', 'hi!', '!?'];
const _3_actual = _3_arr.filter(isEnthusiastic);
console.assert(_3_actual === _3_expect, 'Test 3');

// works with a mixed array
const _4_arr = [':(', 'hi!', '!', ''];
const _4_expect = ['hi!', '!'];
const _4_actual = _4_arr.filter(isEnthusiastic);
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));} // eslint-disable-line
