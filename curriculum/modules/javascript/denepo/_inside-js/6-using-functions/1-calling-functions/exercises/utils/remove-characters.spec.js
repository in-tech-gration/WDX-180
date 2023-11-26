import { removeCharacters } from './remove-characters.js';

describe('removeCharacters: removes specified characters from a string', () => {
  describe('how it removes characters from the string', () => {
    it('removes all characters in a string', () => {
      const actual = removeCharacters('asdf', 'fsda');
      const expected = '';
      expect(actual).toEqual(expected);
    });
    it('is case-sensitive', () => {
      const actual = removeCharacters('asdf', 'ASDF');
      const expected = 'asdf';
      expect(actual).toEqual(expected);
    });
    it('removes characters that are next to each other', () => {
      const actual = removeCharacters('asdf', 'as');
      const expected = 'df';
      expect(actual).toEqual(expected);
    });
    it('removes characters that are not next to each other', () => {
      const actual = removeCharacters('asdf', 'ad');
      const expected = 'sf';
      expect(actual).toEqual(expected);
    });
    it('does not modify an empty string', () => {
      const actual = removeCharacters('', 'asdf');
      const expected = '';
      expect(actual).toEqual(expected);
    });
    it('can remove nothing', () => {
      const actual = removeCharacters('asdf', '');
      const expected = 'asdf';
      expect(actual).toEqual(expected);
    });
  });
  describe('default parameters', () => {
    it('the second parameter defaults to ""', () => {
      const actual = removeCharacters('asdf');
      const expected = 'asdf';
      expect(actual).toEqual(expected);
    });
    it('both parameters default to ""', () => {
      const actual = removeCharacters();
      const expected = '';
      expect(actual).toEqual(expected);
    });
  });
});
