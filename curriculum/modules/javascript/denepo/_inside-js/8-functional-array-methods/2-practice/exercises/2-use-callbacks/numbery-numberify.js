// #todo

/**
 * takes an array of strings and returns a new array
 *  the new array contains all the numbery strings, cast to number
 * does not modify the argument
 * @param {string[]} arr - the array of strings
 * @returns {number[]} an array containing numbers that aren't NaN
 */
export const numberyNumberify = (arr) => {
  // these work, you need to use them with the right array methods
  const isNotNaN = (entry) => {
    return !Number.isNaN(entry);
  };
  const castToNumber = (entry) => {
    return Number(entry);
  };

  // fill in the array method names and callbacks
  const allValidNumbers = arr._(_)._(_);

  return allValidNumbers;
};
