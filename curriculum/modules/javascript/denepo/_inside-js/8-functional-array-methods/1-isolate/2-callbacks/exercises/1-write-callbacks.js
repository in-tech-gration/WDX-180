'use strict';

// --- declare function that uses the callbacks ---

/**
 * Checks if something is true about a string.
 *
 * @param {String} [text=''] - The text to check with the callback.
 * @param {Function} cb - The function call with the text.
 * @returns {String} "yes" or "no", depending on the cb's return value.
 */
const checkIt = (text = '', cb) => {
  const itIsSo = cb(text);
  return itIsSo ? 'yes' : 'no';
};

// --- declare and test first callback ---

/**
 * Checks if a string is a palindrome.
 * (the same forwards and backwards)
 *
 * @param {string} [str=''] - The string to check.
 * @returns {boolean} Whether or not the string is a palindrome.
 */
const isPalindrome = (str = '') => {};

const check1 = checkIt('RacEcaR', isPalindrome);
console.assert(check1 === 'yes', 'Test 1');

const check2 = checkIt('Racecar', isPalindrome);
console.assert(check2 === 'no', 'Test 2');

const check3 = checkIt('-+(*)+-', isPalindrome);
console.assert(check3 === 'yes', 'Test 3');

// --- declare and test second callback ---

/**
 * Checks if a string is "JavaScript" or "JS".
 * The check is not case-sensitive.
 *
 * @param {string} [str=''] - The string to check.
 * @returns {boolean} Whether or not the string is JS.
 */
const isJS = (txt = '') => {};

const check4 = checkIt('JavaSCripT', isJS);
console.assert(check4 === 'yes', 'Test 4');

const check5 = checkIt('javaskript', isJS);
console.assert(check5 === 'no', 'Test 5');

const check6 = checkIt('JS', isJS);
console.assert(check6 === 'yes', 'Test 6');

const check7 = checkIt('js', isJS);
console.assert(check7 === 'yes', 'Test 7');
