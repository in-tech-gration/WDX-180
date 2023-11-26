'use strict';

// comparing arrays with === is based on reference
// comparisons are true when they reference the same array in memory
// psst. JS Tutor will help a lot with this example

// this comparison is false!
const notTheSame1 = [1, 2, 3];
const notTheSame2 = [1, 2, 3];
const huh = notTheSame1 === notTheSame2;
console.log('huh:', typeof huh, huh);

// a more involved example:

const array1 = ['hi', 'bye'];

console.log('--- shared reference ---');

const alsoArray1 = array1;
console.log(alsoArray1 === array1);

// using either variable updates the same array
array1.push('chair');
alsoArray1.push('table');

console.log(array1, alsoArray1);

console.log('--- different different references ---');

const array2 = ['hi', 'bye'];

console.log(array1 === array2);

// updating the second array does not effect the first
array2.push('sofa');

console.log(array1, array2);
