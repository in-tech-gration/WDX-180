/**
 * Adds together all the numbers in an array.
 *
 * @param {number[]} [numbers=[]] - An array of numbers to sum.
 * @returns {number} The sum of all numbers in the array.
 */
export const addNumbers = (numbers = []) => {
  let sum = 0;
  for (const nextNum of numbers) {
    sum += nextNum;
  }
  return sum;
};
