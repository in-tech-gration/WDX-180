'use strict';

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

/*

  you can test for side effects by making sure the argument has not changed

*/

const noSideEffect = (oldArray = [], index = 0, newValue = '') => {
  const newArray = [];
  for (const item of oldArray) {
    newArray.push(item);
  }
  newArray[index] = newValue;
  return newArray;
};

const arg1 = ['table', 'chair', 'sofa'];

// run the test once
const returned1 = noSideEffect(arg1, 1, '');
console.assert(returned1[1] === '', 'Test 1');

// this will pass because the argument was not modified
const argWasNotModified1 = deepCompare(arg1, ['table', 'chair', 'sofa']);
console.assert(argWasNotModified1, 'arg1 was not modified');

// --------- yes, a side-effect  ---------

const yesSideEffect = (array, index, newValue) => {
  array[index] = newValue;
  return array;
};

const arg2 = ['table', 'chair', 'sofa'];

// run the test once
const returned2 = yesSideEffect(arg2, 1, '');
console.assert(returned2[1] === '', 'Test 2');

// this will fail because the argument was modified
const argWasNotModified2 = deepCompare(arg2, ['table', 'chair', 'sofa']);
console.assert(argWasNotModified2, 'arg2 was not modified');
