// #todo

'use strict';

console.log('-- begin --');

/**
 *
 */
const unicodeShuffle = (text = '', shift = 0) => {
  let encodedString = '';

  for (const character of text) {
    const characterCode = character.charCodeAt();
    const newCharCode = characterCode + shift;
    const encodedCharacter = String.fromCharCode(newCharCode);
    encodedString += encodedCharacter;
  }

  return encodedString;
};

const _1_expect = 'qwerty';
const _1_actual = unicodeShuffle('qwerty', 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'sygtv{';
const _2_actual = unicodeShuffle('qwerty', 2);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'oucprw';
const _3_actual = unicodeShuffle('qwerty', -2);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = '';
const _4_actual = unicodeShuffle('', 100);
console.assert(_4_actual === _4_expect, 'Test 4');

// test the default parameters
const _5_expect = 'hello';
const _5_actual = unicodeShuffle('hello');
console.assert(_5_actual === _5_expect, 'Test 5: second default parameter');

const _6_expect = '';
const _6_actual = unicodeShuffle();
console.assert(_6_actual === _6_expect, 'Test 6: both default parameters');

console.log('-- end --');
