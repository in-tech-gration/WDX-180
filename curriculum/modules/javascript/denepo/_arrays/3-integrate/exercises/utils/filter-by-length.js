/**
 * Creates a new array containing only strings of the correct length.
 *
 * @param {string[]} [strings=[]] - An array of numbers.
 * @param {number} [goodLength=0] - The length of string to keep.
 * @returns {string[]} A new array with only strings of `goodLength`.
 */
export const filterByLength = (strings = [], goodLength = 0) => {
  const result = [];
  for (const string of strings) {
    if (string.length === goodLength) {
      result.push(string);
    }
  }
  return result;
};
