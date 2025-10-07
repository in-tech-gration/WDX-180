// #todo

'use strict';

console.log('-- begin --');

/* filtering with a callback
  you might have noticed that these loops strategies are repetitive
  higher order functions will help you write more reusable code

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
*/

/**
 * calls the callback with each item in the array
 * if the callback returns truthy, the item is preserved
 * a new array is created with all passing items
 * the argument is not modified
 * @param {Array} arr - an array of items to check
 * @param {Function} callback - how to check each item
 * @returns {Array} a new array with the filtered items
 */
const filter = (arr = [], callback = () => {}) => {
  const filtered = [];
  for (const entry of arr) {
    const keepIt = callback(entry);
    if (keepIt) {
      filtered.push(entry);
    }
  }
  return filtered;
};

const argArray = [3, true, 'hi', '', 0];

// Callback to check if the value is a string
const isAString = (val) => {
  return typeof val === 'string';
};

const _1_expect = ['hi', ''];
const _1_actual = filter(argArray, isAString);
console.assert(deepCompare(_1_actual, _1_expect), 'Test 1: all string values');

// Callback to cast a value to Boolean
const isTruthy = (val) => {
  return Boolean(val);
};

const _2_expect = [3, true, 'hi'];
const _2_actual = filter(argArray, isTruthy);
console.assert(deepCompare(_2_actual, _2_expect), 'Test 2: all truthy values');

console.log('-- end --');

// hoisted to keep it out of your way in the editor
// in one line so it's out of your way in JS Tutor

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));} // eslint-disable-line
