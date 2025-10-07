import { concatenateAsStrings } from './concatenate-as-strings.js';

describe('concatenateAsStrings casts values to "string" and joins them together', () => {
  describe('it correctly concatenates the values in an array', () => {
    it('returns an empty string if an empty array is passed', () => {
      const expected = '';
      const actual = concatenateAsStrings([]);
      expect(actual).toEqual(expected);
    });
    it('concatenates strings', () => {
      const expected = '1asdf';
      const actual = concatenateAsStrings(['1', '', 'asdf']);
      expect(actual).toEqual(expected);
    });
    it('concatenates numbers', () => {
      const expected = '12-30NaN';
      const actual = concatenateAsStrings([12, -3, 0.0, NaN]);
      expect(actual).toEqual(expected);
    });
    it('can handle arrays with mixed types and no strings', () => {
      const expected = '12truenullundefined';
      const actual = concatenateAsStrings([1, 2, true, null, undefined]);
      expect(actual).toEqual(expected);
    });
    it('can handle arrays with all primitive types', () => {
      const expected = `12AAtruenullBBundefined`;
      const actual = concatenateAsStrings([
        1,
        2,
        'AA',
        true,
        null,
        'BB',
        undefined,
      ]);
      expect(actual).toEqual(expected);
    });
  });
  describe('it uses the argument array correctly', () => {
    it('does not modify the argument', () => {
      const arg = ['a', 1, true, null, undefined];
      concatenateAsStrings(arg);
      expect(arg).toEqual(['a', 1, true, null, undefined]);
    });
  });
});
