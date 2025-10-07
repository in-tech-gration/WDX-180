// #todo

'use strict';

console.log('-- begin --');

// a function with array methods, extra variables, and separated logic

/**
 * sums all of the even numbers in an array of numbers
 *  does not modify the array
 *  checks to make sure all entries are numbers
 * @param {number[]} arr - contains to numbers to operate on
 * @returns {number} the sum of all even numbers in the array
 */
const sumEvenNumbers = (arr) => {
  const isEven = (entry) => {
    return entry % 2 === 0;
  };
  const sumNumbers = (sum, next) => {
    return sum + next;
  };

  return arr.filter(isEven).reduce(sumNumbers);
};

const _1_arg = [1, 2, 3, 4, 5];
const _1_expect = 6;
const _1_actual = sumEvenNumbers(_1_arg);
console.assert(_1_actual === _1_expect, 'sums 1 to 6');

const _2_arg = [-2, -3, -4, -5, -6];
const _2_expect = -12;
const _2_actual = sumEvenNumbers(_2_arg);
console.assert(_2_actual === _2_expect, 'sums -1 to -6');

console.log('-- end --');
