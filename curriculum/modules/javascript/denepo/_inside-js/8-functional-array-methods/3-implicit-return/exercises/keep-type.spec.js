import { keepType } from './keep-type.js';

describe('keepType: keeps all items of a specific type', () => {
  describe('adding something to each item', () => {
    it('keeps numbers', () => {
      const returned = keepType([2, 4, '6', '8', 10], 'number');
      expect(returned).toEqual([2, 4, 10]);
    });
    it('keeps strings', () => {
      const returned = keepType([2, 4, '6', '8', 10, 'yo'], 'string');
      expect(returned).toEqual(['6', '8', 'yo']);
    });
    it('removes everything if the type is not there', () => {
      const returned = keepType([true, false, null, 'hello'], 'number');
      expect(returned).toEqual([]);
    });
    it('removes nothing if there is only that type', () => {
      const returned = keepType([true, false, false, true, false], 'boolean');
      expect(returned).toEqual([true, false, false, true, false]);
    });
  });
  describe('no side-effects', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = keepType(arg, 'boolean');
      expect(arg !== returned).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = [1, 2, 3, 4];
      keepType(arg, 'string');
      expect(arg).toEqual([1, 2, 3, 4]);
    });
  });
});
