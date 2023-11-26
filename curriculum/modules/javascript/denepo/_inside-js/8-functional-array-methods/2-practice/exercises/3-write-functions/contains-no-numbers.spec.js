import { containsNoNumbers } from './contains-no-numbers.js';

describe('containsNoNumbers checks if an array contains no numbers', () => {
  describe('it returns true when there are no numbers', () => {
    it('[] -> true', () => {
      const actual = containsNoNumbers([]);
      expect(actual).toEqual(true);
    });
    it('an array of only strings -> true', () => {
      const actual = containsNoNumbers(['1', '', 'asdf']);
      expect(actual).toEqual(true);
    });
    it('if there are only booleans -> true', () => {
      const actual = containsNoNumbers([true, false]);
      expect(actual).toEqual(true);
    });
    it('if there is only null and undefined -> true', () => {
      const actual = containsNoNumbers([null, undefined]);
      expect(actual).toEqual(true);
    });
    it('if there are all other primitive types -> true', () => {
      const actual = containsNoNumbers([null, undefined, true, 'asdf']);
      expect(actual).toEqual(true);
    });
  });

  describe('it returns false if there are numbers in the array', () => {
    it('if there is only one number -> false', () => {
      const actual = containsNoNumbers([1]);
      expect(actual).toEqual(false);
    });
    it('if the number is NaN -> false', () => {
      const actual = containsNoNumbers([NaN]);
      expect(actual).toEqual(false);
    });
    it('if there are many numbers -> false', () => {
      const actual = containsNoNumbers([1, 2, 0, -100]);
      expect(actual).toEqual(false);
    });
    it('if there is a number at the beginning -> false', () => {
      const actual = containsNoNumbers([1, 'asdf', true, null]);
      expect(actual).toEqual(false);
    });
    it('if there is a number at the end -> false', () => {
      const actual = containsNoNumbers(['asdf', true, null, 1]);
      expect(actual).toEqual(false);
    });
    it('if there is a number in the middle -> false', () => {
      const actual = containsNoNumbers([true, 0, 'hello']);
      expect(actual).toEqual(false);
    });
  });

  describe('it uses the argument array correctly', () => {
    it('does not modify the argument', () => {
      const arg = ['a', 1, true, null, undefined];
      containsNoNumbers(arg);
      expect(arg).toEqual(['a', 1, true, null, undefined]);
    });
  });
});
