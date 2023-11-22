import { reverse } from './reverse.js';

describe('reverse: reverses a string', () => {
  describe('how it reverses strings', () => {
    it('does not change an empty string', () => {
      const actual = reverse('');
      expect(actual).toEqual('');
    });
    it('reverses strings with letters', () => {
      const actual = reverse('wizard');
      expect(actual).toEqual('draziw');
    });
    it('reverses a string of numbers', () => {
      const actual = reverse('123');
      expect(actual).toEqual('321');
    });
    it('reverses a string of characters', () => {
      const actual = reverse('(-*-)');
      expect(actual).toEqual(')-*-(');
    });
    it('reverses strings with spaces', () => {
      const actual = reverse(' yo!');
      expect(actual).toEqual('!oy ');
    });
  });
  describe('default parameters', () => {
    it('has one parameter that defaults to ""', () => {
      const actual = reverse();
      expect(actual).toEqual('');
    });
  });
});
