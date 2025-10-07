import { shiftCharacters } from './shift-characters.js';

describe('shiftCharacters: changes each character in a string by shifting the character code', () => {
  describe('the function behavior', () => {
    it('returns the same string if the shift is 0', () => {
      const actual = shiftCharacters('asdf', 0);
      expect(actual).toEqual('asdf');
    });
    it('shifts characters by 1', () => {
      const actual = shiftCharacters('asdf', 1);
      expect(actual).toEqual('bteg');
    });
    it('shifts characters by 101', () => {
      const actual = shiftCharacters('asdf', 101);
      expect(actual).toEqual('ÆØÉË');
    });
    it('shifts characters by 10001', () => {
      const actual = shiftCharacters('asdf', 10001);
      expect(actual).toEqual('❲➄❵❷');
    });
    it('negative shifts work as well', () => {
      const actual = shiftCharacters('asdf', -1);
      expect(actual).toEqual('`rce');
    });
    it('it shifts by -101', () => {
      const actual = shiftCharacters('asdf', -101);
      expect(actual).toEqual('￼￿');
    });
  });
  describe('default parameters', () => {
    it('has 0 as a second default', () => {
      const actual = shiftCharacters('asdf');
      expect(actual).toEqual('asdf');
    });
    it('has an empty string as a first default', () => {
      const actual = shiftCharacters();
      expect(actual).toEqual('');
    });
  });
});
