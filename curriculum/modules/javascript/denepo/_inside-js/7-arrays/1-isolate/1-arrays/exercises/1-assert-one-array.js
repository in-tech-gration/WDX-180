// #todo

'use strict';

console.log('-- begin --');

// complete the asserts to describe the arrays

const livingThings = ['toad', 'monkey', 'walrus'];

console.assert(livingThings.length === _, 'Test 1: length');
console.assert(livingThings[1] === _, 'Test 1: a');
console.assert(livingThings[2] === _, 'Test 1: b');
console.assert(livingThings[0] === _, 'Test 1: c');

const numbers = [3, 9, 12, 9];

console.assert(numbers.length === _, 'Test 2: length');
console.assert(numbers[3] === _, 'Test 2: a');
console.assert(numbers[1] === _, 'Test 2: b');
console.assert(numbers[2] === _, 'Test 2: c');
console.assert(numbers[0] === _, 'Test 2: d');

const mixed = [null, 9, true, '9', 'pulse'];

console.assert(mixed.length === _, 'Test 3: length');
console.assert(mixed[1] === _, 'Test 3: a');
console.assert(mixed[3] === _, 'Test 3: b');
console.assert(mixed[0] === _, 'Test 3: c');
console.assert(mixed[4] === _, 'Test 3: d');
console.assert(mixed[2] === _, 'Test 3: e');

const complicated = ['a', 'b', 'c', 'f'];
complicated[4] = 'e';
const temp = complicated[2];
complicated[2] = complicated[1];
complicated[1] = temp;

console.assert(complicated.length === _, 'Test 4: length');
console.assert(complicated[0] === _, 'Test 4: a');
console.assert(complicated[1] === _, 'Test 4: b');
console.assert(complicated[2] === _, 'Test 4: c');
console.assert(complicated[3] === _, 'Test 4: d');
console.assert(complicated[4] === _, 'Test 4: e');

console.log('-- end --');
