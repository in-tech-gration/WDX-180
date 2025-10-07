import { joinWithComma } from './join-with-comma.js';

describe('joinWithComma: joins two strings with a comma and a space', () => {
  describe('can be used on its own', () => {
    it('joins two empty strings', () => {
      expect(joinWithComma('', '')).toEqual(', ');
    });
    it('works when the left is empty', () => {
      expect(joinWithComma('', '123')).toEqual(', 123');
    });
    it('works when the right is empty', () => {
      expect(joinWithComma('abc', '')).toEqual('abc, ');
    });
    it('works when neither string is empty', () => {
      expect(joinWithComma('red', 'green')).toEqual('red, green');
    });
  });
  describe('can be used as a callback for Array.reduce', () => {
    it('Array.reduce throws an error if the array is empty', () => {
      const errorsOut = () => [].reduce(joinWithComma);
      expect(errorsOut).toThrow();
    });
    it('Array.reduce returns the only item in an array of length 1', () => {
      const actual = ['1234'].reduce(joinWithComma);
      expect(actual).toEqual('1234');
    });
    it('Array.reduce uses joinWithComma for arrays of length 2', () => {
      const actual = ['12', '34'].reduce(joinWithComma);
      expect(actual).toEqual('12, 34');
    });
    it('Array.reduce uses joinWithComma for longer arrays', () => {
      const actual = ['1', '2', '3', '4', '5'].reduce(joinWithComma);
      expect(actual).toEqual('1, 2, 3, 4, 5');
    });
  });
});
