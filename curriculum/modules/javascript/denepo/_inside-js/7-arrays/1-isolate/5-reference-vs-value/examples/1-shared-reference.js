'use strict';

// primitives are stored "by value", connected to 1 variable
//  assigning a primitive to a other variable makes a copy of it
//  modifying the other variable does not change the old 1
// PS. JS Tutor will be very helpful with this

let primitive1 = 5;
let primitive2 = primitive1;
primitive2 += 1;
console.log('primitive1:', typeof primitive1, primitive1);
console.log('primitive2:', typeof primitive2, primitive2);

// arrays are stored by reference
//  both variables reference the same array in memory
//  modifying on variable changes what both store

let array1 = [];
let array2 = array1;
array2[0] = 7;
array1[1] = 'bye!';
console.log('array1', typeof array1, array1);
console.log('array2', typeof array2, array2);

// you can "delete" an array by removing all references
//  the JS engine will "garbage collect" it behind the scenes

array1 = null;
array2 = null;
console.log('array1:', typeof array1, array1);
console.log('array2:', typeof array2, array2);
