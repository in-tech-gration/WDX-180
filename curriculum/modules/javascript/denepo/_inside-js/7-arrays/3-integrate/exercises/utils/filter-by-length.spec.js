import { filterByLength } from './filter-by-length.js';

describe('filterByLength: removes all strings in an array that are not the right length', () => {
  describe('the function filters correctly', () => {
    it('an empty array is unchanged', () => {
      const actual = filterByLength([], 3);
      expect(actual).toEqual([]);
    });
    it('filters for length 0', () => {
      const actual = filterByLength(['a', '', 'b', '', 'c'], 0);
      expect(actual).toEqual(['', '']);
    });
    it('filters for length 1', () => {
      const actual = filterByLength(['a', '', 'b', '', 'c'], 1);
      expect(actual).toEqual(['a', 'b', 'c']);
    });
    it('filters for longer lengths', () => {
      const actual = filterByLength(
        ['a', 'ab', 'etr', 'javascript', 'rte'],
        10,
      );
      expect(actual).toEqual(['javascript']);
    });
    it('removes everything if the length does not exist', () => {
      const actual = filterByLength(['a', 'bc', 'def', 'ghij'], 5);
      expect(actual).toEqual([]);
    });
  });
  describe('it has no side-effects', () => {
    it('returns a new array', () => {
      const argument = ['a', 'b', 'c'];
      const returned = filterByLength(['a', 'b', 'c'], 1);
      expect(argument !== returned).toEqual(true);
    });
    it('does not modify the argument', () => {
      const argument = ['a', 'b', 'c'];
      filterByLength(argument, 2);
      expect(argument).toEqual(['a', 'b', 'c']);
    });
  });
});
