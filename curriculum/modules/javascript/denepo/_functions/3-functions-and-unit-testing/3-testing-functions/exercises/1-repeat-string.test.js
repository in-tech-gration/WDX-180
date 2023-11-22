'use strict';

/**
 * Repeats a string a specific number of times.
 *
 * @param {string} text - The string to repeat.
 * @param {number} repeats - The number of times to repeat.
 * @returns {string} The repeated string.
 */
const repeatString = () => {};

describe('repeatString: repeats a string a specific number of times', () => {
  it('repeats a string 0 times', () => {
    const returned = repeatString('hoy!', 0);
    expect(returned).toEqual('');
  });
  it('repeats a string once', () => {
    const returned = repeatString('aaaa', 1);
    expect(returned).toEqual('aaaa');
  });
  it('repeats a string 2 times', () => {
    const returned = repeatString('Hi', 2);
    expect(returned).toEqual('HiHi');
  });
  it('repeats a string 3 times', () => {
    const returned = repeatString('abc', 3);
    expect(returned).toEqual('abcabcabc');
  });
  it('repeats an empty string 12 times', () => {
    const returned = repeatString('', 12);
    expect(returned).toEqual('');
  });
});
