// #todo

/**
 * Sums all numbery strings in an array.
 * Returns 0 if the array is empty.
 *
 * @param {string[]} arr - The array of strings.
 * @returns {number} The sum of all numbery strings.
 */
export const sumNumbery = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = (entry) => {
    return !Number.isNaN(entry);
  };
  const sumNumbers = (acc, next) => {
    return acc + next;
  };
  const isString = (entry) => {
    return typeof entry === 'string';
  };
  const castToNumber = (entry) => {
    return Number(entry);
  };

  // fill in the array method names and callbacks
  const areAllStrings = arr._(_); // a boolean value
  if (!areAllStrings) {
    return _;
  }

  return arr._(_)._(_)._(_, _);
};
