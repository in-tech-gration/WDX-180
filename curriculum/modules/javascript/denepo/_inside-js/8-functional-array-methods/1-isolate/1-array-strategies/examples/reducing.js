// #todo

'use strict';

console.log('-- begin --');

// reducing a soup means boiling away water to leave a thicker soup
// reducing an array means to create a single new value
//  by combining all the elements of the array
// psst.  use the Debugger or JS Tutor
//  practice using breakpoints to skip to the lines you want to study

// add all numbers together
const _1_numbers = [-12, 3.6, 83, 0];
let _1_sumOfNumbers = 0;
for (const number of _1_numbers) {
  _1_sumOfNumbers += number;
}

// cast each item to a string and concatenate them
const _2_values = [10, false, 'hello', null, undefined];
let _2_concatenated = '';
for (const value of _2_values) {
  _2_concatenated += String(value);
}

// huh, what is this?
const _3_letters = ['a', 'b', 'c', 'd'];
let _3_snowball = '';
for (const letter of _3_letters) {
  const everythingSoFar = _3_snowball + letter;
  _3_snowball += everythingSoFar;
}

console.log('-- end --');
