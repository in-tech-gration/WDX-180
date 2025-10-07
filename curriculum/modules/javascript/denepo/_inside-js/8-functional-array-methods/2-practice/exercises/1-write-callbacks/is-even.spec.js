import { isEven } from './is-even.js';

describe('isEven: determines if a number is even or not', () => {
  describe('can be used on its own', () => {
    it('returns false for positive odd numbers', () => {
      expect(isEven(3)).toEqual(false);
    });
    it('returns false for negative odd numbers', () => {
      expect(isEven(-3)).toEqual(false);
    });
    it('returns true for positive even numbers', () => {
      expect(isEven(4)).toEqual(true);
    });
    it('returns true for negative even numbers', () => {
      expect(isEven(-4)).toEqual(true);
    });
    it('returns true for 0', () => {
      expect(isEven(0)).toEqual(true);
    });
  });

  describe('can be used as a callback for Array.every', () => {
    it('returns true for the empty array', () => {
      const actual = [].every(isEven);
      expect(actual).toEqual(true);
    });
    it('returns true if all numbers are even', () => {
      const actual = [2, 6, -8, -102, 102].every(isEven);
      expect(actual).toEqual(true);
    });
    it('removes false if all numbers are odd', () => {
      const actual = [3, 7, -7, -101, 103].every(isEven);
      expect(actual).toEqual(false);
    });
    it('returns false if the numbers are mixed', () => {
      const actual = [-2, -1, 0, 1, 2].every(isEven);
      expect(actual).toEqual(false);
    });
  });
});
