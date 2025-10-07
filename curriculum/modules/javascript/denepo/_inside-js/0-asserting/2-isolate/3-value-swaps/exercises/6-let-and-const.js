// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'x';
let temp;

// --- swap values ---

temp = a;
console.assert(temp === _, 'Step 1.1');
console.assert(a === _, 'Step 1.2');

a = b;
console.assert(a === _, 'Step 2.1');
console.assert(b === _, 'Step 2.2');

const d = a;
console.assert(d === _, 'Step 3.1');
console.assert(a === _, 'Step 3.2');

// --- test final values ---

console.assert(a === _, 'Test 1');

console.assert(b === _, 'Test 2');

console.assert(c === _, 'Test 3');

console.assert(d === _, 'Test 4');

console.assert(temp === _, 'Test 5');

console.log('-- end --');
