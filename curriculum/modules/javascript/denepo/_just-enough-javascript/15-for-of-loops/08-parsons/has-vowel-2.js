'use strict';

/* parsons-collapse: hint

  1. declare and initialize the text
  2. declare and initialize the flag
  3. declare and initialize the vowels
  4. iterate through the text characters
    a. if a character is a vowel
      1. toggle the flag
      2. leave the loop
  5. compare the output to the expected value

*/



let word = 'zijn';

let hasVowel = false;

let vowels = 'aeiou';
for (let letter of word) {
  if (vowels.includes(letter)) {
    hasVowel = true;
  }
}

console.log(hasVowel === true);

/* ------- */


console.log(hasVowel === false); // distractor
} // distractor
if (!vowels.includes(letter)) { // distractor


// #todo
