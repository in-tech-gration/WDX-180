import { keepCharacters } from './keep-characters.js';

describe('keepCharacters: keeps only specific characters in a string', () => {
  describe('how it keeps characters', () => {
    it('keeps everything', () => {
      const actual = keepCharacters('asdf', 'fsda');
      expect(actual).toEqual('asdf');
    });
    it('is case-sensitive', () => {
      const actual = keepCharacters('asdf', 'ASDF');
      expect(actual).toEqual('');
    });
    it('keeps characters next to each other', () => {
      const actual = keepCharacters('asdf', 'as');
      expect(actual).toEqual('as');
    });
    it('keeps separated characters', () => {
      const actual = keepCharacters('asdf', 'ad');
      expect(actual).toEqual('ad');
    });
    it('keeps nothing in an empty string', () => {
      const actual = keepCharacters('', 'asdf');
      expect(actual).toEqual('');
    });
    it('removes everything from a string', () => {
      const actual = keepCharacters('asdf', '');
      expect(actual).toEqual('');
    });
  });
  describe('default parameters', () => {
    it('second parameter defaults to ""', () => {
      const actual = keepCharacters('asdf');
      expect(actual).toEqual('');
    });
    it('both parameters default to ""', () => {
      const actual = keepCharacters();
      expect(actual).toEqual('');
    });
  });
});
