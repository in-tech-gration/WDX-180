// #todo

/**
 * find the first negative number, returns undefined if there is none
 *  does not modify the array
 * @param {any[]} arr - the array of values
 * @returns {(number|undefined)} the first negative number
 */
export const firstNegativeNumber = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNegative = (entry) => {
    return entry < 0;
  };
  const isNumber = (entry) => {
    return typeof entry === 'number';
  };

  // fill in the array method names and callbacks
  const negativeNumber = arr._(_)._(_);

  return negativeNumber;
};
