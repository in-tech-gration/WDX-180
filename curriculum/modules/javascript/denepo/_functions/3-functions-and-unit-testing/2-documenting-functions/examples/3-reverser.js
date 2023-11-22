'use strict';

console.log('-- begin --');

/**
 * Reverses a string.
 *
 * @param {string} text - The string to reverse.
 * @returns {string} The original string, backwards.
 */
const reverser = (text) => {
  let reversedText = '';
  for (const char of text) {
    reversedText = char + reversedText;
  }
  return reversedText;
};

const _1_expected = 'eert';
const _1_actual = reverser('tree');
console.assert(_1_actual === _1_expected, 'Test 1');

const _2_expected = '=-( )-=';
const _2_actual = reverser('=-) (-=');
console.assert(_2_actual === _2_expected, 'Test 2');

const _3_expected = 'racecar';
const _3_actual = reverser('racecar');
console.assert(_3_actual === _3_expected, 'Test 3');

console.log('-- end --');
