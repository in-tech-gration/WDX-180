import { firstNegativeNumber } from './first-negative-number.js';

describe('firstNegativeNumber: returns the first falsy string', () => {
  describe('it correctly sums the entries', () => {
    it('returns undefined for an empty array', () => {
      const actual = firstNegativeNumber([]);
      expect(actual).toEqual(undefined);
    });
    it('returns undefined if there are no numbers', () => {
      const actual = firstNegativeNumber(['hi!', '.', '=+/12']);
      expect(actual).toEqual(undefined);
    });
    it('returns undefined if all numbers are positive', () => {
      const actual = firstNegativeNumber([1, 2, 3]);
      expect(actual).toEqual(undefined);
    });
    it('returns the first negative number', () => {
      const actual = firstNegativeNumber([-1, -200]);
      expect(actual).toEqual(-1);
    });
    it('is not fooled by negative strings', () => {
      const actual = firstNegativeNumber(['-3', -2]);
      expect(actual).toEqual(-2);
    });
    it('works with messy array', () => {
      const actual = firstNegativeNumber([false, undefined, '-100', 3, -3, 40]);
      expect(actual).toEqual(-3);
    });
  });
  describe('it does not have side-effects', () => {
    it('does not modify arrays with no numbers', () => {
      const arg = ['hello', 'goodbye'];
      firstNegativeNumber(arg);
      expect(arg).toEqual(['hello', 'goodbye']);
    });
    it('does not modify arrays with positive numbers', () => {
      const arg = [1, 2, 3];
      firstNegativeNumber(arg);
      expect(arg).toEqual([1, 2, 3]);
    });
    it('does not modify arrays with any numbers', () => {
      const arg = [1, -5, 2.7, -4, 3];
      firstNegativeNumber(arg);
      expect(arg).toEqual([1, -5, 2.7, -4, 3]);
    });
  });
});
