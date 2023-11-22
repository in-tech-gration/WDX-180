'use strict';

// -- declare variables (this is correct) --
let a = [1, 2, 3];
const aReference = a;
let b = ['x', 'y', 'z'];
const bReference = b;
let temp;

// -- swap reference types (write this code) --

// -- assert the references (this is correct) --
console.assert(a === bReference, 'a references the array with strings');
console.assert(b === aReference, 'b references the array with numbers');
