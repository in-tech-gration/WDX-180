'use strict';

/* testing functions

  unit tests check a function's inputs & outputs

  - expected value: the correct return value
  - actual value: the actual return (not always the same as expected!)

  `describe` is used to group tests into "suites"
  `it` is used to test a single input/output pair
  `expect(_).toEqual(_)` is like `console.assert` but nicer
    when the assertion fails, it generates a helpful message
    you'll see this in the next example

  careful in the debugger!
    use "continue to here" and breakpoints for easy debugging
    you don't want to step into `describe`, `it` or `expect`

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
    backwards = char + backwards;
  }
  return backwards;
};

// the main test suite
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
