/**
 * Returns a new string with all of the given characters removed.
 *
 * @param {string} [text=''] - Some text with characters to remove.
 * @param {string} [toRemove=''] - The characters to remove.
 * @returns {string} Text with all the given characters removed.
 */
export const removeCharacters = (text = '', toRemove = '') => {
  let newText = text;
  for (const character of toRemove) {
    newText = newText.replaceAll(character, '');
  }
  return newText;
};
