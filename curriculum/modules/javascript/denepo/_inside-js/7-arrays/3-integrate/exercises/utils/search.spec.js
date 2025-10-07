import { search } from './search.js';

describe('search: finds all strings in an array that include the search query', () => {
  describe('the function searches correctly', () => {
    it('is case-sensitive', () => {
      const actual = search(['a', 'b', 'A', 'AB'], 'A');
      expect(actual).toEqual(['A', 'AB']);
    });
    it('returns everything if all strings match', () => {
      const actual = search(['Hannah', 'Bahaha', 'helios'], 'h');
      expect(actual).toEqual(['Hannah', 'Bahaha', 'helios']);
    });
    it('returns an empty array if there are no matches', () => {
      const actual = search(['a', 'aby', 'xyz', 'abc', '3'], 'AB');
      expect(actual).toEqual([]);
    });
    it('returns everything when searching for the empty string', () => {
      const actual = search(['a', 'aby', 'xyz', 'abc', '3'], '');
      expect(actual).toEqual(['a', 'aby', 'xyz', 'abc', '3']);
    });
    it('finds nothing in an empty array', () => {
      const actual = search([], 'hello');
      expect(actual).toEqual([]);
    });
  });
  describe('there are no side-effects', () => {
    it('returns a new array', () => {
      const argument = ['a', 'b', 'c'];
      const returned = search(['a', 'b', 'c'], 'b');
      expect(argument !== returned).toEqual(true);
    });
    it('does not modify the argument', () => {
      const argument = ['a', 'b', 'c'];
      search(argument, 'b');
      expect(argument).toEqual(['a', 'b', 'c']);
    });
  });
});
