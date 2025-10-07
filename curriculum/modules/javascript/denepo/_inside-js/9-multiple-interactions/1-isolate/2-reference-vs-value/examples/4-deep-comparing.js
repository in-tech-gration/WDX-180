// #todo

'use strict';

console.log('-- begin --');

/*
  reference vs. value and deep comparing are the same for objects as arrays
*/

const obj1 = { a: 1, b: 2 };
const alsoObj1 = obj1;
const obj2 = { a: 1, b: 2 };

console.log(obj1 === alsoObj1); // true
console.log(obj1 === obj2); // false

const compareObj1And2 = deepCompare(obj1, obj2);
console.log(compareObj1And2); // true

// prettier-ignore
/* eslint-disable */
function deepCompare (actual, expect) {  return actual === expect || Object.is(actual, expect)|| (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))|| Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));}

console.log('-- end --');
