import { addNumbers } from './add-numbers.js';

describe('addNumbers: sums the numbers in an array of numbers', () => {
  describe('the sum is correct', () => {
    it('returns 0 when no numbers are passed', () => {
      const actual = addNumbers([]);
      expect(actual).toEqual(0);
    });
    it('sums positive numbers', () => {
      const actual = addNumbers([1, 2, 3]);
      expect(actual).toEqual(6);
    });
    it('sums negative numbers', () => {
      const actual = addNumbers([-1, -2, -3]);
      expect(actual).toEqual(-6);
    });
    it('sums decimal numbers', () => {
      const actual = addNumbers([0.5, 1.5, 2.2]);
      expect(actual).toEqual(4.2);
    });
    it('sums all sorts of numbers', () => {
      const actual = addNumbers([-1, 0.5, 346, -99]);
      expect(actual).toEqual(246.5);
    });
  });
  describe('parameters and side-effects', () => {
    it('has an array as a default parameter', () => {
      const actual = addNumbers();
      expect(actual).toEqual(0);
    });
    it('returns a new array', () => {
      const argument = [1, 2, 3];
      const returned = addNumbers(argument);
      expect(argument !== returned).toEqual(true);
    });
    it('has no side-effects', () => {
      const argument = [1, 2, 3];
      addNumbers(argument);
      expect(argument).toEqual([1, 2, 3]);
    });
  });
});
