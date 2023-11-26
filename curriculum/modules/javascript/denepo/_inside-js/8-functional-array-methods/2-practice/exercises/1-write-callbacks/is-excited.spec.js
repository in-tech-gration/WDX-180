import { isExcited } from './is-excited.js';

describe('isExcited: determines if a string is excited or not', () => {
  describe('can be used on its own', () => {
    it('returns true if "!" is at the beginning', () => {
      expect(isExcited('!asdf')).toEqual(true);
    });
    it('returns true if "!" is in the middle', () => {
      expect(isExcited('as!df')).toEqual(true);
    });
    it('returns true if "!" is at the end', () => {
      expect(isExcited('asdf!')).toEqual(true);
    });
    it('returns false if there is no "!"', () => {
      expect(isExcited('asdf')).toEqual(false);
    });
    it('returns false for the empty string', () => {
      expect(isExcited('')).toEqual(false);
    });
  });
  describe('can be used as a callback for Array.find', () => {
    it('finds the only excited string', () => {
      const actual = ['', 'asdf', 'B!', ':('].find(isExcited);
      expect(actual).toEqual('B!');
    });
    it('finds the first excited string', () => {
      const actual = ['', 'asdf', 'B!', 'A!', ':('].find(isExcited);
      expect(actual).toEqual('B!');
    });
    it('returns undefined if there is no excited string', () => {
      const actual = ['', 'asdf', 'B', ':('].find(isExcited);
      expect(actual).toEqual(undefined);
    });
    it('returns undefined for the empty array', () => {
      const actual = [].find(isExcited);
      expect(actual).toEqual(undefined);
    });
  });
});
