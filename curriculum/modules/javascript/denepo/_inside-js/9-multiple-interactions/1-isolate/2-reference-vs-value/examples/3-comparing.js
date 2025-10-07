// #todo

'use strict';

console.log('-- begin --');

// comparing objects with === is based on reference
// comparisons are true when they reference the same object in memory
// psst. JS Tutor will help a lot with this example

// this comparison is false!
const notTheSame1 = { a: 1, b: 2 };
const notTheSame2 = { a: 1, b: 2 };
console.log(notTheSame1 === notTheSame2);

// a more involved example:

const object1 = { x: 7, y: 8 };
const alsoObject1 = object1;

console.log('same object in memory');
console.log(alsoObject1 === object1);

// using either variable updates the same object

object1.p = 'chair';
alsoObject1.q = 'table';

console.log('different objects in memory');
const object2 = { x: 7, y: 8 };

console.log(object1 !== object2);
console.log(alsoObject1 !== object2);

// updating the second object does not effect the first
object2.x = 'sofa';

console.log('-- end --');
