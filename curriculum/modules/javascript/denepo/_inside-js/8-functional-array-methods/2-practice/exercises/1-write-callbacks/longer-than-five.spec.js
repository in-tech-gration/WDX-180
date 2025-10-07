import { longerThanFive } from './longer-than-five.js';

describe('longerThanFive: determines if a string is longer than 5 characters', () => {
  describe('can be used on its own', () => {
    it('returns false for the empty string', () => {
      expect(longerThanFive('')).toEqual(false);
    });
    it('returns false for a short string', () => {
      expect(longerThanFive('abc')).toEqual(false);
    });
    it('returns false for strings of length 5', () => {
      expect(longerThanFive('abcde')).toEqual(false);
    });
    it('returns true for strings of length 6', () => {
      expect(longerThanFive('abcdef')).toEqual(true);
    });
    it('and for longer strings', () => {
      expect(longerThanFive('abcdefghijklmnopqrstuvwxyz')).toEqual(true);
    });
  });
  describe('can be used as a callback for Array.filter', () => {
    it('finds nothing in an empty array', () => {
      const actual = [].filter(longerThanFive);
      expect(actual).toEqual([]);
    });
    it('keeps all items when all are over 5 long', () => {
      const actual = ['123456', 'abcdef'].filter(longerThanFive);
      expect(actual).toEqual(['123456', 'abcdef']);
    });
    it('removes all items when all are under 5 long', () => {
      const actual = ['12345', 'abcde'].filter(longerThanFive);
      expect(actual).toEqual([]);
    });
    it('keeps only the correct items', () => {
      const actual = ['12345', 'abcdef'].filter(longerThanFive);
      expect(actual).toEqual(['abcdef']);
    });
  });
});
