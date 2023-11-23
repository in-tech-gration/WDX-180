// #todo

'use strict';

console.log('-- begin --');

_;
console.assert(letters === 'c', 'Test 1');

letters = _ + _;
console.assert(letters === 'bc', 'Test 2');

letters = letters + 'd';
console.assert(letters === _, 'Test 3');

letters = 'a' + letters;
console.assert(letters === _, 'Test 4');

letters = _ + _;
console.assert(letters === 'abcde', 'Test 5');

console.log('-- end --');
