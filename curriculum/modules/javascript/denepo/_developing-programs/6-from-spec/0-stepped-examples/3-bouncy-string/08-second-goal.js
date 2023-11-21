'use strict';

/* Bouncy String

  a user can input string of letters to be converted into a bouncy string
    (a bouncy string is one with every other letter uppercase)
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their bouncy string will be displayed


  test cases:
    uppercase strings:
      'ABCDEF' -> 'aBcDeF'
      'JELLO' -> 'jElLo'
    lowercase strings:
      'abcdef' -> 'aBcDeF'
      'jello' -> 'jElLo'
    mixed strings:
      'AbCdEf' -> 'aBcDeF'
      'jElLo' -> 'jElLo'
*/

/* --- gather input from the user --- */
//  Data In:      null or a string
//  Data After:   a non-empty string with only letters

let input = null;
while (true) {
  input = prompt('enter some text with only letters');
  console.log(input);

  /* --- repeat if the input is null (sub-goal!) --- */
  if (input === null) {
    continue;
  }
  /* --- repeat if the input is empty (sub-goal!) --- */
  if (input === '') {
    continue;
  }
  /* --- repeat if the input is only letters (sub-goal!) --- */
  let onlyLetters = true;
  for (let char of input) {
    if (!'abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase())) {
      onlyLetters = false;
    }
  }
  if (!onlyLetters) {
    continue;
  }

  /* --- exit if the input passed the previous checks (sub-goal!) --- */
  break;
}
console.log(input);

/* --- bouncify the string --- */
//  Data Before:  a string with only letters, upper or lower case
//  Data After:   the same letters with every other uppercase

let bouncy = '';

let isBigLetter = false;
for (let letter of input) {
  if (isBigLetter) {
    bouncy = bouncy + letter.toLocaleUpperCase();
  } else {
    bouncy = bouncy + letter.toLocaleLowerCase();
  }
  isBigLetter = !isBigLetter;
}

/* --- display the bouncy string --- */
// Data Out:      a bouncy string

// alert(bouncy)
