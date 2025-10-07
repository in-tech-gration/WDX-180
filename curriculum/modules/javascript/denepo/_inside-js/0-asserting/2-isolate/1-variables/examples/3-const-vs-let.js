// #todo

'use strict';

console.log('-- begin --');

// --- const ---

// const is short for "constant".  a variable that never changes

// const variables cannot be declared without assigning a value
// this will throw an error
//  "Missing initializer in const declaration"
//  this is a "creation phase" error, meaning the code will not even execute!
// uncomment the next two lines of code to get the error

// const constantVariable1;
// console.log(constantVariable1);

// const variables also cannot be reassigned
// this will throw an error
//  "Assignment to constant variable"
const constantVariable2 = 'constant value';
constantVariable2 = 'new value';
console.log(constantVariable2);

// --- let ---

// all of these things are possible with let

// declare and assign
let letVariable1 = 'value 1';
console.log(letVariable1);

// reassign
letVariable1 = 'value 2';
console.log(letVariable1);

// declare without assigning
let letVariable2;
console.log(letVariable2);

/*
  the exercises in the following slides will use let to reassign values
  this is to help you understand how variables work in memory.

  when writing your own code, it is best to always use const.
  it will take some practice to write code like this, but is worth it.
  programs with only const are easier to understand and debug
*/

console.log('-- end --');
