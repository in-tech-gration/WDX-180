// #todo

'use strict';

console.log('-- begin --');

// --- declare & initialize variables ---

let a = 'y';
let b = 'x';
let temp;

// --- swap the values stored by a and b ---

// 1: store a's value for later
temp = a;
console.assert(temp === 'y', 'Step 1.1');
console.assert(a === 'y', 'Step 1.2');

// 2: assign b's value to a
a = b;
console.assert(a === 'x', 'Step 2.1');
console.assert(b === 'x', 'Step 2.2');

// 3: assign the saved value to b
b = temp;
console.assert(b === 'y', 'Step 3.1');
console.assert(temp === 'y', 'Step 3.2');

// --- assert expected values ---

const testA = a === 'x';
console.assert(testA, 'a should store "x"');

const testB = b === 'y';
console.assert(testB, 'b should store "y"');

const testTemp = temp === 'y';
console.assert(testTemp, 'temp should store "y"');

console.log('-- end --');
