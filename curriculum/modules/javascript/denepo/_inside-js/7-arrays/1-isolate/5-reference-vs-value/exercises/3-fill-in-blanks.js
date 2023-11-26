'use strict';

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

// two different arrays with different values
//  how many solutions can you find?
// psst.  use JS Tutor & the debugger

const array1 = _;
const array2 = _;

const test1 = array1 !== array2;
console.assert(test1, 'Test 1');

const comparison = deepCompare(array1, array2);
const test2 = !comparison;
console.assert(test2, 'Test 2');
