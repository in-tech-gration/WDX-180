// #todo

'use strict';

console.log('-- begin --');

// primitives are stored "by value", connected to 1 variable
//  assigning a primitive to a other variable makes a copy of it
//  modifying the other variable does not change the old 1
// PS. JS Tutor will be very helpful with this

let primitive1 = 5;
let primitive2 = primitive1;
primitive2 += 1;
console.log('primitive1:', primitive1);
console.log('primitive2:', primitive2);

// objects are stored by reference
//  both variables reference the same object in memory
//  modifying on variable changes what both store

let object1 = {};
let object2 = object1;
object2.a = 7;
object1.b = 'bye!';
console.log('object1', object1);
console.log('object2', object2);

// you can "delete" an object by removing all references
//  the JS engine will "garbage collect" it behind the scenes

object1 = null;
object2 = null;
console.log('object1:', object1);
console.log('object2:', object2);

console.log('-- end --');
