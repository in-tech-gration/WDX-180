// #todo

'use strict';

// a function with chained array methods and inline logic
// this is a more common way to write array methods
// there is no right way, just what makes more sense for you

/**
 * sums all of the even numbers in an array of numbers
 *  does not modify the array
 *  checks to make sure all entries are numbers
 * @param {number[]} arr - contains to numbers to operate on
 * @returns {number} the sum of all even numbers in the array
 */
const sumEvenNumbers = (arr) => {
  const sumOfEvens = arr
    .filter((entry) => {
      return entry % 2 === 0;
    })
    .reduce((sum, next) => {
      return sum + next;
    });

  return sumOfEvens;
};

const _1_arg = [1, 2, 3, 4, 5];
const _1_expect = 6;
const _1_actual = sumEvenNumbers(_1_arg);
console.assert(_1_actual === _1_expect, 'sums 1 to 6');

const _2_arg = [-1, -2, -3, -4, -5];
const _2_expect = -6;
const _2_actual = sumEvenNumbers(_2_arg);
console.assert(_2_actual === _2_expect, 'sums -1 to -5');

const _3_arg = [1, -2, 3, -4, 5];
const _3_expect = -6;
const _3_actual = sumEvenNumbers(_3_arg);
console.assert(_3_actual === _3_expect, 'sums 1, -2, 3, -4, 5');

console.log('-- end --');
