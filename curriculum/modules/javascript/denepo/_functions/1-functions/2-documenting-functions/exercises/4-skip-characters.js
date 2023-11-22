// #todo

'use strict';

console.log('-- begin --');

/**
 *
 */
const skipCharacters = (text = '', toSkip = 1) => {
  if (toSkip < 1) {
    return text;
  }

  let skipified = '';
  for (let i = 0; i < text.length; i++) {
    if (i % toSkip !== 0) {
      const character = text[i];
      skipified += character;
    }
  }
  return skipified;
};

const _1_expect = 'abcdefghijkl';
const _1_actual = skipCharacters('abcdefghijkl', 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = '';
const _2_actual = skipCharacters('abcdefghijkl', 1);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'bdfhjl';
const _3_actual = skipCharacters('abcdefghijkl', 2);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'bcefhikl';
const _4_actual = skipCharacters('abcdefghijkl', 3);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'bcdfghjkl';
const _5_actual = skipCharacters('abcdefghijkl', 4);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'bcdefhijkl';
const _6_actual = skipCharacters('abcdefghijkl', 6);
console.assert(_6_actual === _6_expect, 'Test 6');

// test the default parameters
const _7_expect = '';
const _7_actual = skipCharacters('hello');
console.assert(_7_actual === _7_expect, 'Test 7: second default parameter');

const _8_expect = '';
const _8_actual = skipCharacters();
console.assert(_8_actual === _8_expect, 'Test 8: both default parameters');

console.log('-- end --');
