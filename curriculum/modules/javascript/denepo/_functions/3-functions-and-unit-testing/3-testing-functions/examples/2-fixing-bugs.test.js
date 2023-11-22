'use strict';

/*
  the docs and the tests describes how the function should behave
    but maybe there's a bug!
    the test will help you find out ;)

  practice trusting the tests to help you find your solution
    which tests cases pass? which fail?
    what does this tell you about your function?

  click on failing tests in the console to compare actual & expected values

*/

/**
 * Reverses a string.
 *
 * @param {string} str - The string to reverse.
 * @returns {string} The input string, but backwards.
 */
const reverseString = (str) => {
  let backwards = '';
  for (const char of str) {
    backwards += char;
  }
  return backwards;
};

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
