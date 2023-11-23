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
a = c;
console.assert(a === _, 'Step 2.1');
console.assert(c === _, 'Step 2.2');
c = temp;
console.assert(c === _, 'Step 3.1');
console.assert(temp === _, 'Step 3.2');

temp = c;
console.assert(temp === _, 'Step 4.1');
console.assert(c === _, 'Step 4.2');
c = b;
console.assert(c === _, 'Step 5.1');
console.assert(b === _, 'Step 5.2');
b = temp;
console.assert(b === _, 'Step 6.1');
console.assert(temp === _, 'Step 6.2');

// --- test final values ---

console.assert(a === 'x', 'Test 1');

console.assert(b === 'y', 'Test 2');

console.assert(c === 'z', 'Test 3');

console.assert(temp === _, 'Test 4');

console.log('-- end --');
