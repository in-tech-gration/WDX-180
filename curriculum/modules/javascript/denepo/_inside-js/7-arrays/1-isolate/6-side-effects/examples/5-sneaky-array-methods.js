'use strict';

/* Sneaky Array Methods

  there are a lot of array methods that modify your array
  this isn't a bad thing, you just need to be aware of it

  hint: use JS Tutor

*/

// --- .push, .pop, .shift, .unshift ---

const letters1 = ['b', 'c'];
letters1.unshift('a');
letters1.push('d');

// --- .reverse ---

// oops, arr1 is also modified
//  because arr2 is a reference to the same array!
const letters2 = letters1.reverse();

console.log('are the same array:', letters1 === letters2);
console.log(letters1, letters2);

letters2.pop();
letters2.shift();

console.log(letters1);
