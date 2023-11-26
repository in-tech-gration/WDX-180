'use strict';

/* to test if two arrays contain the same entries
  you need to check each and every entry separately!
  JavaScript does not have a native way to do this

  this process is called deep comparing
*/

const array1 = [4, 100, 'bye', 'hi!'];
const array2 = [4, '100', 'bye', 'hi!'];

// you can do it manually, but that's a bad idea
//  way too many ways to make a mistake
//  and it's not practical for large arrays
const manualComparison =
  array1[0] === array2[0] &&
  array1[1] === array2[1] &&
  array1[2] === array2[2] &&
  array1[3] === array2[3];
console.assert(manualComparison, 'Test 1: manual comparison');

/* more commonly you will use a function that does this for you
  the function below will compare each item in an array
    returns true if the arguments are deeply equal
    returns false if they are not
  the function is tiny and hard to read, that's on purpose!
    you can learn how to use it without reading how it was written
    it's on one line to take up less space in the debugger or JS Tutor
  next you'll learn to deep compare with an assertion library
*/

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

const automatedComparison = deepCompare(array1, array2);
console.assert(automatedComparison, 'Test 2: automated comparison');
