import { filter } from './filter.js';

describe('filter: removes specific characters from a string', () => {
  describe('the function behavior', () => {
    it('does nothing to an empty string', () => {
      const returned = filter('', 'asdf');
      expect(returned).toEqual('');
    });
    it('filters nothing when the second argument is empty string', () => {
      const returned = filter('asdf', '');
      expect(returned).toEqual('asdf');
    });
    it('removes one occurance of a character', () => {
      const returned = filter('asdf', 's');
      expect(returned).toEqual('adf');
    });
    it('removes many of a character', () => {
      const returned = filter('asdfasdfasdf', 's');
      expect(returned).toEqual('adfadfadf');
    });
    it('does nothing if the character does not exit', () => {
      const returned = filter('asdfasdfasdf', 'x');
      expect(returned).toEqual('asdfasdfasdf');
    });
    it('can remove more than one character', () => {
      const returned = filter('asdfaassddffasdf', 'sf');
      expect(returned).toEqual('adaaddad');
    });
    it('only removes the characters that are present', () => {
      const returned = filter('asdfaassddffasdf', 'sxf');
      expect(returned).toEqual('adaaddad');
    });
    it('is not case-sensitive', () => {
      const returned = filter('aSdfaaSssddFfasdF', 'sf');
      expect(returned).toEqual('adaaddad');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the second default param', () => {
      const returned = filter('asdf');
      expect(returned).toEqual('asdf');
    });
    it('has an empty string for the first default param', () => {
      const returned = filter();
      expect(returned).toEqual();
    });
  });
});
