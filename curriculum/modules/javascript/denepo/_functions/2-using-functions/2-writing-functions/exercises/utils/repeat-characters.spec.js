import { repeatCharacters } from './repeat-characters.js';

describe('repeatCharacters: repeats each character in a string a specific number of times', () => {
  describe('what it means to repeat each character', () => {
    it('repeats each character 0 times', () => {
      const actual = repeatCharacters('asdf', 0);
      expect(actual).toEqual('');
    });
    it('repeats each character 1 time', () => {
      const actual = repeatCharacters('asdf', 1);
      expect(actual).toEqual('asdf');
    });
    it('repeats each character 2 times', () => {
      const actual = repeatCharacters('asdf', 2);
      expect(actual).toEqual('aassddff');
    });
    it('repeats each character 3 times', () => {
      const actual = repeatCharacters('asdf', 3);
      expect(actual).toEqual('aaasssdddfff');
    });
  });
  describe('default parameters', () => {
    it('the second parameter defaults to 1', () => {
      const actual = repeatCharacters('asdf');
      expect(actual).toEqual('asdf');
    });
    it('the second parameter defaults to ""', () => {
      const actual = repeatCharacters();
      expect(actual).toEqual('');
    });
  });
});
