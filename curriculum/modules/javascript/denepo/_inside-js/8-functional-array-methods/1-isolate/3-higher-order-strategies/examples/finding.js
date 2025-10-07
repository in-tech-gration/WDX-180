// #todo

'use strict';

console.log('-- begin --');

/* finding with a callback
  you might have noticed that these loops strategies are repetitive
  higher order functions will help you write more reusable code

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Find
*/

/**
 * calls the callback with each item in the array
 *  returns the first item to pass the callback
 * @param {Array} arr - an array of items to check
 * @param {Function} callback - how to check each item
 * @returns {any} the found item or undefined
 */
const find = (arr = [], callback = () => {}) => {
  let found;
  for (const entry of arr) {
    const isTheThing = callback(entry);
    if (isTheThing) {
      found = entry;
      break;
    }
  }
  return found;
};

const argArray = [3, true, 'hi', '', 0];

// Callback to identify a boolean
const isAString = (val) => {
  return typeof val === 'string';
};

const _1_expect = 'hi';
const _1_actual = find(argArray, isAString);
console.assert(_1_actual === _1_expect, 'Test 1: find first string');

// Callback to identify an first empty string
const isEmptyString = (val) => {
  return val === '';
};

const _2_expect = '';
const _2_actual = find(argArray, isEmptyString);
console.assert(_2_actual === _2_expect, 'Test 2: find first empty string');

// callback to identify false
const isFalse = (val) => {
  return val === false;
};

const _3_expect = undefined;
const _3_actual = find(argArray, isFalse);
console.assert(_3_actual === _3_expect, 'Test 3: find first false');

console.log('-- end --');
