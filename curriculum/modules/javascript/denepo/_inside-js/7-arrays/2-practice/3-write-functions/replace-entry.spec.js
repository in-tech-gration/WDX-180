import { replaceEntry } from './replace-entry.js';

describe('replaceEntry: replaces a specific entry in an array', () => {
  describe('replaceEntry replaces the correct entry', () => {
    it('it can replace the first value', () => {
      const expected = ['x', 'b', 'c'];
      const actual = replaceEntry(['a', 'b', 'c'], 0, 'x');
      expect(actual).toEqual(expected);
    });
    it('it can add a new value at 1', () => {
      const expected = ['a', 'x', 'c'];
      const actual = replaceEntry(['a', 'b', 'c'], 1, 'x');
      expect(actual).toEqual(expected);
    });
    it('it can add the same value at 1', () => {
      const expected = ['a', 'b', 'c'];
      const actual = replaceEntry(['a', 'b', 'c'], 1, 'b');
      expect(actual).toEqual(expected);
    });
    it('it can replace the last value', () => {
      const expected = ['a', 'b', 'x'];
      const actual = replaceEntry(['a', 'b', 'c'], 2, 'x');
      expect(actual).toEqual(expected);
    });
    it('an index less than zero does nothing', () => {
      const actual = replaceEntry(['a', 'b', 'c'], -1, 'x');
      expect(actual).toEqual(['a', 'b', 'c']);
    });
  });
  describe('replaceEntry has no side-effects', () => {
    it('it does not modify the argument array', () => {
      const argArray = ['a', 'b', 'c'];
      replaceEntry(argArray, 1, 'x');
      expect(argArray).toEqual(['a', 'b', 'c']);
    });
    it('it returns a new array when a replacement is made', () => {
      const argArray = ['a', 'b', 'c'];
      const returned = replaceEntry(argArray, 1, 'x');
      expect(returned !== argArray).toEqual(true);
    });
    it('it returns a new array when nothing is replaced', () => {
      const argArray = ['a', 'b', 'c'];
      const returned = replaceEntry(argArray, -1, 'x');
      expect(returned !== argArray).toEqual(true);
    });
  });
});
