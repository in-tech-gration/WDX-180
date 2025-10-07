import { numberyNumberify } from './numbery-numberify.js';

describe('numberyNumberify: converts an array of strings into an array of numbery numbers', () => {
  describe('it correctly processes an array of strings', () => {
    it('returns an empty array for the empty array', () => {
      const actual = numberyNumberify([]);
      expect(actual).toEqual([]);
    });
    it('maps all entries to Number', () => {
      const actual = numberyNumberify(['1', '2', '3']);
      expect(actual).toEqual([1, 2, 3]);
    });
    it('filters all NaN values', () => {
      const actual = numberyNumberify(['1', '$%@#', '2', 'e', '3']);
      expect(actual).toEqual([1, 2, 3]);
    });
  });
  describe('it uses the argument correctly', () => {
    it('does not have side-effects', () => {
      const arg = ['asdf', '1', ''];
      numberyNumberify(arg);
      expect(arg).toEqual(['asdf', '1', '']);
    });
  });
});
