// #todo

'use strict';

/*
  a user can provide any input they want to a prompt
    - given they cancel, the program is sad
    - given it is shorter than ten characters, they are told how much shorter it is
    - given it is ten characters long, they are told it's perfect
    - given it is longer than 10 characters, they are told how much too long


  test cases:
    the user cancels:
      null -> ':('
    strings with less than 10 characters:
      '' -> '"" is 10 characters too short'
      'hi' -> '"hi" is 8 characters too short'
      'laptop' -> '"laptop" is 4 characters too short'
    strings with exactly 10 characters:
      'javascript' -> '"javascript" is perfect!'
    strings with more than 10 characters:
      'open source' -> '"open source" is 11 characters too long'
      'ik woon in belgie' -> '"ik woon in belgie" is 7 characters too long'
      'javascript is perfect' -> '"javascript is perfect" is 11 characters too long'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input = prompt(_);
console.log('input:', input);

/* --- declare initial output --- */

let output = _;

/* --- create final output --- */

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
        - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
