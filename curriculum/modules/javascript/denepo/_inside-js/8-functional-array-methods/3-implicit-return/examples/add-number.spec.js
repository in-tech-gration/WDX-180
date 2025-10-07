import { addNumber } from './add-number.js';

describe('addNumber: adds a number to each item in an array', () => {
  describe('adding something to each item', () => {
    it('changes nothing if you add 0', () => {
      const returned = addNumber([2, 4, 6, 8, 10], 0);
      expect(returned).toEqual([2, 4, 6, 8, 10]);
    });
    it('changes nothing if your array is empty', () => {
      const returned = addNumber([], 2);
      expect(returned).toEqual([]);
    });
    it('can add 1', () => {
      const returned = addNumber([-1, 0, 1], 2);
      expect(returned).toEqual([1, 2, 3]);
    });
    it('can add 7', () => {
      const returned = addNumber([-1, 0, 1], 7);
      expect(returned).toEqual([6, 7, 8]);
    });
    it('can add to long arrays', () => {
      const returned = addNumber([-4, -3, -2, -1, 0, 1, 2, 3, 4], -3);
      expect(returned).toEqual([-7, -6, -5, -4, -3, -2, -1, 0, 1]);
    });
  });
  describe('no side-effects', () => {
    it('returns a new array', () => {
      const arg = [1, 2, 3, 4];
      const returned = addNumber(arg, 3);
      expect(arg !== returned).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = [1, 2, 3, 4];
      addNumber(arg, 3);
      expect(arg).toEqual([1, 2, 3, 4]);
    });
  });
});
