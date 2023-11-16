'use strict';


/* parsons-collapse: hint

  1. declare a variable with the whole alphabet
  2. declare a variable with only vowels
  3. declare a variable to store the output
  4. iterate through each letter of the alphabet
    a. if it is NOT a vowel
      append it to the output
  5. compare the final value to the expected value

*/



let before = 'abcdefghijklmnopqrstuvwxyz';

let vowels = 'aeiou';

let after = '';
for (let letter of before) {
  if (!vowels.includes(letter)) {
    after = after + letter;
  }
}

console.log(after === 'bcdfghjklmnpqrstvwxyz');

/* ------------------- */


if (vowels.includes(letter)) { // distractor
for (let character of before) { // distractor


// #todo
