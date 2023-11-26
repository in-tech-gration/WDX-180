import { keepNumbery } from './keep-numbery.js';

describe('keepNumbery casts each element in an array to type "number"', () => {
  describe('it correctly converts the values in an array', () => {
    it('returns an empty array if an empty array is passed', () => {
      const expected = [];
      const actual = keepNumbery([]);
      expect(actual).toEqual(expected);
    });
    it('converts strings to Number', () => {
      const expected = [1, 0, 20, Infinity];
      const actual = keepNumbery(['1', '', '20', 'asdf', 'Infinity']);
      expect(actual).toEqual(expected);
    });
    it('converts booleans to Number', () => {
      const expected = [1, 0];
      const actual = keepNumbery([true, false]);
      expect(actual).toEqual(expected);
    });
    it('converts null and undefined to Number', () => {
      const expected = [0];
      const actual = keepNumbery([null, undefined]);
      expect(actual).toEqual(expected);
    });
    it('converts numbers to Number', () => {
      const expected = [14, -14, 0, Infinity];
      const actual = keepNumbery([14, -14, 0, NaN, Infinity]);
      expect(actual).toEqual(expected);
    });
    it('converts mixed type arrays to Number', () => {
      const expected = [, 1, 1, 0];
      const actual = keepNumbery(['a', 1, true, null, undefined]);
      expect(actual).toEqual(expected);
    });
  });
  describe('it uses the argument array correctly', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = keepNumbery([]);
      const areNotTheSameArray = arg !== returned;
      expect(areNotTheSameArray).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = ['a', 1, true, null, undefined];
      keepNumbery(arg);
      expect(arg).toEqual(['a', 1, true, null, undefined]);
    });
  });
});
