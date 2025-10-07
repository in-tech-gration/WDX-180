// #todo

'use strict';

console.log('-- begin --');
// write arrays to pass the assertions

const array1 = ['a', 'b', 'c', 'd'];
const otherArray1 = _;

console.assert(otherArray1.length === 4, 'Test 1: length');
console.assert(array1[2] === otherArray1[0], 'Test 1: a');
console.assert(array1[0] === otherArray1[3], 'Test 1: b');
console.assert(array1[3] === otherArray1[1], 'Test 1: c');
console.assert(array1[1] === otherArray1[2], 'Test 1: d');

const array2 = [false, true, 0, 1, null];
const otherArray2 = _;

console.assert(otherArray2.length === 5, 'Test 2: length');
console.assert(array2[2] === otherArray2[1], 'Test 2: a');
console.assert(array2[1] === otherArray2[4], 'Test 2: b');
console.assert(array2[0] === otherArray2[2], 'Test 2: c');
console.assert(array2[4] === otherArray2[3], 'Test 2: d');
console.assert(array2[3] === otherArray2[0], 'Test 2: e');

const array3 = ['a', 'b', 'c', 'd'];
const otherArray3 = _;
// leave this code!
otherArray3[1] = array3[2];
otherArray3[0] = array3[3];

console.assert(otherArray3.length === 4, 'Test 3: length');
console.assert(array3[0] === otherArray3[3], 'Test 3: a');
console.assert(array3[1] === otherArray3[2], 'Test 3: b');
console.assert(array3[2] === otherArray3[1], 'Test 3: c');
console.assert(array3[3] === otherArray3[0], 'Test 3: d');

console.log('-- end --');
