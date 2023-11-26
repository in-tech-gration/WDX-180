import { sentenceIt } from './sentence-it.js';

describe('sentenceIt: converts an array of strings into a sentence', () => {
  describe('it correctly compares all entries', () => {
    it('returns an empty string for an empty array', () => {
      const actual = sentenceIt([]);
      expect(actual).toEqual('');
    });
    it('returns an empty string if there are no words', () => {
      const actual = sentenceIt(['1', '.', '=+/12']);
      expect(actual).toEqual('');
    });
    it('returns a sentence if there are only words', () => {
      const actual = sentenceIt(['hello', 'frog', 'princess']);
      expect(actual).toEqual('hello frog princess');
    });
    it('creates a sentence using only the words', () => {
      const actual = sentenceIt([
        '12',
        'hello',
        '----',
        'frog',
        'princess',
        '*',
      ]);
      expect(actual).toEqual('hello frog princess');
    });
  });
  describe('it uses the argument correctly', () => {
    it('does not have any side-effects', () => {
      const arg = ['hello', 'goodbye'];
      sentenceIt(arg);
      expect(arg).toEqual(['hello', 'goodbye']);
    });
  });
});
