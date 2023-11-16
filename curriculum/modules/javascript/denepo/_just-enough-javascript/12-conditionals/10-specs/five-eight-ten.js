// #todo

'use strict';

/*
  a user can provide any input they want to a prompt
    - given they cancel, the program is sad
    - given it is empty, they're not even close
    - given it is less than 5 characters, they're doing better
    - given it is less than 8 characters, they're almost there
    - given it is less than 10 characters, they're so close
    - given it is exactly 10 characters, they're perfect
    - given it is longer than 10 characters, they're too long


  test cases:
    the user cancels:
      null -> ':('
    the empty string:
      '' -> 'not even close'
    strings with less than 5 characters:
      '!' -> 'better'
      'hi' -> 'better'
      'xyz' -> 'better'
      'tree' -> 'better'
    strings with less than 8 characters
      'horse' -> 'almost there'
      'banana' -> 'almost there'
      'bananas' -> 'almost there'
    strings with less than 10 characters
      'daylight' -> 'so close'
      'warehouse' -> 'so close'
    strings with 10 characters
      'javascript' -> 'perfect!'
    strings with more than 10 characters:
      'watermelons' -> 'too long'
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
