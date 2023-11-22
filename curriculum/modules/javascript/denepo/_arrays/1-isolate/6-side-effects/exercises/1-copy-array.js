'use strict';

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

/**
 * Returns a shallow copy of an array.
 *
 * @param {number[]} [arr=[]] - __
 * @returns {number[]} __
 */
const copyArray = () => {};

const _1_arg = [1, 2, 3];
const _1_returned = copyArray(_1_arg);
console.assert(_1_arg !== _1_returned, '1.a: it returns a new array');
console.assert(
  deepCompare(_1_returned, [1, 2, 3]),
  '1.b: with the same values',
);
console.assert(deepCompare(_1_arg, [1, 2, 3]), '2.c: _1_arg was not modified');

const _2_arg = [10, 11, 12, 13];
const _2_returned = copyArray(_2_arg);
console.assert(_2_arg !== _2_returned, '2.a: returns a new array');
console.assert(
  deepCompare(_2_returned, [10, 11, 12, 13]),
  '2.b: with the same values',
);
console.assert(
  deepCompare(_2_arg, [10, 11, 12, 13]),
  '2.c: _2_arg was not modified',
);
