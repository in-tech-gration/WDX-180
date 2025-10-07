'use strict';

// --- declare callbacks ---

const isGreaterThanFive = (x = 0) => {
  return x > 5;
};
const isEven = (x = 0) => {
  return x % 2 === 0;
};

// --- declare function that uses callbacks ---

/**
 * Uses a callback to check something about two numbers.
 *  Says if it's true for neither, one or both.
 *
 * @param {number} [num1=0] - The fist number to check.
 * @param {number} [num2=0] - The second number to check.
 * @param {Function} cb - What to check for.
 * @returns {string} "neither", "one" or "both"
 */
const checkThem = () => {};

// --- test your function ---

const check1 = checkThem(1, 2, isGreaterThanFive);
console.assert(check1 === 'neither', 'Test 1');

const check2 = checkThem(6, 5, isGreaterThanFive);
console.assert(check2 === 'one', 'Test 2');

const check3 = checkThem(1, 2, isGreaterThanFive);
console.assert(check3 === 'both', 'Test 3');

const check4 = checkThem(1, 5, isEven);
console.assert(check4 === 'neither', 'Test 4');

const check5 = checkThem(8, 5, isEven);
console.assert(check5 === 'one', 'Test 5');

const check6 = checkThem(2, 4, isEven);
console.assert(check6 === 'both', 'Test 6');
