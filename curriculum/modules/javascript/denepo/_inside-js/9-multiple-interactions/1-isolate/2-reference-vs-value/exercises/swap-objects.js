// #todo

'use strict';

// -- declare variables (this is correct) --
let a = { a: 1, b: 2, c: 3 };
const aReference = a;
let b = { a: 'x', b: 'y', c: 'z' };
const bReference = b;
let temp;

// -- swap reference types (write this code) --

// -- assert the reference types (this is correct) --
console.assert(a === bReference, 'a references the object with strings');
console.assert(b === aReference, 'b references the object with numbers');
