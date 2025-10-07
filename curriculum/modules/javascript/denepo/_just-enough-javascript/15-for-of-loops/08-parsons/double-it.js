'use strict';


/* parsons-collapse: hint

  1. declare variable with string to double
  2. declare variable with new empty data
  3. iterate through each character in the string
    i. append the character twice to the new data
  4. compare the doubled string to the expected value

*/



let string = '_-|-_';

let doubled = '';
for (let character of string) {
  doubled = doubled + character + character;
}

console.log(doubled === '__--||--__');

// begin distractors

console.log(doubled === '_-|-__-|-_'); // distractor

for (let character in string) { // distractor
for (let character in doubled) { // distractor
doubled = character + character; // distractor


// #todo
