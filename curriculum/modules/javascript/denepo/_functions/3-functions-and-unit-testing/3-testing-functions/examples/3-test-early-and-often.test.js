'use strict';

/* Test Early and Often

  when you are using tests, you should use them a lot!

  run the tests after every tiny change you make in your code
  this will help you know which changes helped and which did not

  running tests after making many changes can be confusing
    you don't know which changes helped and which didn't

*/

/**
 * Reverses a string.
 *
 * @param {string} str - The string to reverse.
 * @returns {string} The input string, but backwards.
 */
const reverseString = (str) => {};

describe('reverseString: reverses any string', () => {
  it('reverses an empty string', () => {
    const actual = reverseString('');
    expect(actual).toEqual('');
  });
  it('reverses a string of letters', () => {
    const actual = reverseString('abcde');
    expect(actual).toEqual('edcba');
  });
  it('reverses a string of numbers', () => {
    const actual = reverseString('1337');
    expect(actual).toEqual('7331');
  });
  it('reverses palindromes', () => {
    const actual = reverseString('racecar');
    expect(actual).toEqual('racecar');
  });
  it('reverses all sorts of crazy things', () => {
    const actual = reverseString('(-+=<8>=+-)');
    expect(actual).toEqual(')-+=>8<=+-(');
  });
});
