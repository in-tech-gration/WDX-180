/**
 * Creates a new array with the same length as the argument
 *  `toAdd` has been added to each element in the new array.
 *
 * @param {number[]} [numbers=[]] - An array of numbers.
 * @param {number} [toAdd=0] - The number to add to each array item.
 * @returns {number[]} A new array with one entry per `numbers`.
 */
export const addToNumbers = (numbers = [], toAdd = 0) => {
  const result = [];
  for (const number of numbers) {
    const nextNumber = number + toAdd;
    result.push(nextNumber);
  }
  return result;
};
