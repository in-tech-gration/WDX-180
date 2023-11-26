// #todo

'use strict';

console.log('-- begin --');

// filtering is when you are given many things and only keep a few of them
// filtering an array is the same, given an array of many things
//  create a new array containing only some of them
// psst.  use the Debugger or JS Tutor
//  practice using breakpoints to skip to the lines you want to study

const _1_words = ['chair', 'quote', 'bucket', 'sofa'];
// keep the words with an "a"
const _1_wordsWithA = [];
for (const word of _1_words) {
  if (word.includes('a')) {
    _1_wordsWithA.push(word);
  }
}

const _2_numbers = [-5, 0, 13, 100];

// keep numbers less than 0
const _2_lessThanZero = [];
for (const number of _2_numbers) {
  if (number < 0) {
    _2_lessThanZero.push(number);
  }
}

// keep numbers that are divisible by 2
const _3_evenNumbers = [];
for (const number of _2_numbers) {
  if (number % 2 === 0) {
    _3_evenNumbers.push(number);
  }
}

console.log('-- end --');
