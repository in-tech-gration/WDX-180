import { reverseArray } from './reverse-array.js';

describe('reverseArray: reverses an array of anything', () => {
  describe('reversing the items in the array', () => {
    it('reverses an empty array', () => {
      const actual = reverseArray([]);
      const expected = [];
      expect(actual).toEqual(expected);
    });
    it('reverses an array of numbers', () => {
      const actual = reverseArray([1, 2, 3]);
      expect(actual).toEqual([3, 2, 1]);
    });
    it('reverses an array of strings', () => {
      const actual = reverseArray(['hello', 'good bye']);
      expect(actual).toEqual(['good bye', 'hello']);
    });
    it('reverses a longer array of strings', () => {
      const actual = reverseArray(['hello', 'good', 'bye']);
      expect(actual).toEqual(['bye', 'good', 'hello']);
    });
    it('reverses a symmetrical array', () => {
      const actual = reverseArray([true, false, false, true]);
      expect(actual).toEqual([true, false, false, true]);
    });
    it('has an empty array as default parameter', () => {
      const actual = reverseArray();
      const expected = [];
      expect(actual).toEqual(expected);
    });
  });
  describe('the function has no side-effects', () => {
    it('returns a new array', () => {
      const toReverse = [1, 2, 3];
      const returned = reverseArray(toReverse);
      expect(toReverse !== returned).toEqual(true);
    });
    it('does not modify the original array', () => {
      const toReverse = [1, 2, 3];
      reverseArray(toReverse);
      expect(toReverse).toEqual([1, 2, 3]);
    });
  });
});
