// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'x';
let temp;

temp = a;
const c = temp;

// --- swap values ---

// --- test final values ---

const test1 = a === 'x';
console.assert(test1, 'Test 1');

const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = c === _;
console.assert(test3, 'Test 3');

const test4 = temp === _;
console.assert(test4, 'Test 4');

console.log('-- end --');
