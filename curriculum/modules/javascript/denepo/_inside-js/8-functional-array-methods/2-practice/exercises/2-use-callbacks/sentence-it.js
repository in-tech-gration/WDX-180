// #todo

/**
 * converts an array of strings into a sentence
 *  removes all non-words and combines the words with a space
 * does not modify the argument
 * @param {string[]} arr
 * @returns {string} a sentence
 */
export const sentenceIt = (arr) => {
  // these work, you need to use them with the right array methods
  const isWord = (entry) => {
    return /^[a-zA-Z]+$/.test(entry);
  };
  const combineWithSpace = (acc, next) => {
    return acc === '' ? next : `${acc} ${next}`;
  };

  // fill in the array method names and callbacks
  const sentenceIt = arr.__(__).__(__, __);

  return sentenceIt;
};
