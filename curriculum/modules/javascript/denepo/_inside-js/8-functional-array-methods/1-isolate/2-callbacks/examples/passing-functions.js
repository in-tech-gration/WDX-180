'use strict';

/* Passing Functions

  the big idea of callbacks is not complicated:
    1. pass a function as an argument
    2. use that function inside of another function

  callbacks are about how you USE a function
    they're just normal functions!

*/

// --- declare callbacks ---

const isLongString = (str = '') => {
  return str.length > 5;
};
const hasACat = (string = '') => {
  return string.toLowerCase().includes('cat');
};
const isMyName = (txt = '') => {
  return txt === '__'; // <-- your name here
};

// --- declare function that uses a callback ---

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

// --- test the checkIt function ---

const check1 = checkIt('bye', isLongString);
console.assert(check1 === 'no', 'Test 1');

const check2 = checkIt('good bye', isLongString);
console.assert(check2 === 'yes', 'Test 2');

const check3 = checkIt('I like dogs.', hasACat);
console.assert(check3 === 'no', 'Test 3');

const check4 = checkIt('concatenate', hasACat);
console.assert(check4 === 'yes', 'Test 4');

const check5 = checkIt('__', isMyName); // <-- your name here
console.assert(check5 === 'yes', 'Test 5');
