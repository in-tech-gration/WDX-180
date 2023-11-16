'use strict';


/* parsons-collapse: hint

  1. declare variable with string to reverse
  2. declare variable with new empty string
  3. iterate through each character in the string
    i. append each character to the beginning of the new string
  4. compare the reversed string to the expected value

*/



let languageName = 'JavaScript';

let reversedName = '';
for (let character of languageName) {
  reversedName = character + reversedName;
}

console.log(reversedName === 'tpircSavaJ');

// begin distractors

console.log(reversedName === 'ScriptJava'); // distractor
console.log(reversedName === 'TpirCsavaj'); // distractor

for (character of languageName) { // distractor
reversedName = reversedName + character; // distractor


// #todo
