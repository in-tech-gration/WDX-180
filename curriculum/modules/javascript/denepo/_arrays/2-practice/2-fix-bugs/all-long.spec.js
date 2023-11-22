import { allLong } from './all-long.js';

describe('allLong: checks if all the strings in an array are long', () => {
  describe('checking if all strings are long', () => {
    it('returns true if the array is empty', () => {
      const returned = allLong([], 3);
      expect(returned).toEqual(true);
    });
    it('returns false if one string is too short', () => {
      const returned = allLong(['ab', 'abcd', 'abc', 'abcde', 'xyz'], 3);
      expect(returned).toEqual(false);
    });
    it('returns false if all strings are too short', () => {
      const returned = allLong(['abcde', 'abcd', 'abc', 'ab', 'xyz'], 10);
      expect(returned).toEqual(false);
    });
    it('returns true if all strings are exactly long', () => {
      const returned = allLong(['hyf', 'abc', 'xyz', 'pqr'], 3);
      expect(returned).toEqual(true);
    });
    it('returns true if all strings are very long', () => {
      const returned = allLong(
        [
          'hyfhyfhyfhyfhyfhyfhyfhyfhyf',
          'abcabcabcabcabcabcabcabc',
          'xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz',
        ],
        3,
      );
      expect(returned).toEqual(true);
    });
  });
  describe('there are no side-effects', () => {
    it('does not modify the array argument', () => {
      const arg = ['aa', 'bb', 'cc'];
      allLong(arg, 2);
      expect(arg).toEqual(['aa', 'bb', 'cc']);
    });
  });
});
