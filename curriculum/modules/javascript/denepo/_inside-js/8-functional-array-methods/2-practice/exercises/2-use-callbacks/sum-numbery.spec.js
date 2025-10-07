import { sumNumbery } from './sum-numbery.js';

describe('sumNumbery: sums all the numbery strings in an array', () => {
  describe('it correctly sums the entries', () => {
    it('returns zero if all values are not a string', () => {
      const expected = 0;
      const actual = sumNumbery(['1', 'e', 4, '!', true]);
      expect(actual).toEqual(expected);
    });
    it('returns zero for an empty array', () => {
      const expected = 0;
      const actual = sumNumbery([]);
      expect(actual).toEqual(expected);
    });
    it('returns zero if all strings are NaNy', () => {
      const expected = 0;
      const actual = sumNumbery(['hi!', '.', '=+/12']);
      expect(actual).toEqual(expected);
    });
    it('returns the sum if all strings are Numbery', () => {
      const expected = 6;
      const actual = sumNumbery(['1', '2', '3']);
      expect(actual).toEqual(expected);
    });
    it('only sums Numbery strings', () => {
      const expected = 6;
      const actual = sumNumbery(['.', '1', '3#', '2', '3', '-=-']);
      expect(actual).toEqual(expected);
    });
  });
  describe('sumNumbery has no side-effects', () => {
    it('does not modify the argument', () => {
      const arg = ['hello', 'goodbye'];
      sumNumbery(arg);
      expect(arg).toEqual(['hello', 'goodbye']);
    });
  });
});
