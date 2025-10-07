// #todo

'use strict';

/* 1. declare 3 variables */

let a = 'y';
let b = 'x';
let temp;

/* 2. swap the values between a and b */

/* parsons-collapse: hint
  1. read the value from 'b' and assign it to 'temp'
  2. read the value from 'a' and assign it to 'b'
  3. read the value from 'temp' and assign it to 'a'
*/

temp = b;
b = a;
a = temp;

/* 3. compare the final values */

console.log(a === 'x');
console.log(b === 'y');
console.log(temp === 'x');

/* -------------- */

temp === b; // distractor
b === a; // distractor
a === temp; // distractor
