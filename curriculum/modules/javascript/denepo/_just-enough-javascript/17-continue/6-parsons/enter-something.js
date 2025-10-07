// #todo

'use strict';

/* parsons-collapse: hint

  1. declare and initialize the input
  2. enter the while loop
    a. gather user input
    b. continue if the input is null
    b. break if the input is NOT an empty string
  3. alert the user's input

*/


let input = '';
while (true) {
  input = prompt('enter something');

  if (input === null) {
    continue;
  }

  if (input !== '') {
    break;
  }
}

alert(input);

// -- distractors --

input = prompt('enter something'); // distractor

while (false) { // distractor
