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



let text = 'xkcd';

let hasVowel = false;

let vowels = 'aeiou';
for (let char of text) {
  if (vowels.includes(char)) {
    hasVowel = true;
  }
}

console.log(hasVowel === false);

/* ------- */


console.log(hasVowel === true); // distractor
continue; // distractor
hasVowel === true; // distractor


// #todo
