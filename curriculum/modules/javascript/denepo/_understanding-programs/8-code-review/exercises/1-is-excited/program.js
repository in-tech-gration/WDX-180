'use strict';

/* 
  checks if the input ends with an '!'.
  the program ignores any trailing white space.

  test cases:
    excited strings:
      'asdf!'
      'asdf! '
      '!!!      '
      '!'
      '"!"'
    bored strings:
      'asdf'
      'asdf? '
      '!!!    ?  '
      ''
*/

/* --- get a string from the user ---
  data in: a string
  data after: a string
*/
let input = null;
while ('string' !== typeof input) {
  input = prompt('enter some text, the program will check if it is excited');
}

/* --- check if the string is excited ---
  data before: a string
  data after: a boolean representing if the string ends in '!'
*/
// create a new string with all the whitespace removed from the end
const trimmedInput = input.trimEnd();
// check if the last character of the trimmed string is '!'
const isExcited = trimmedInput[trimmedInput.length - 1] == '!';

/* --- construct a message for the user ---
  data before: user-provided string, a boolean flag for excitement
  data after: a string describing the user's input as excited or not
*/
let message = '';
if (isExcited) {
  message = '"' + input + '" is excited';
} else {
  message = '"' + input + '" is not excited';
}

/* --- display the message for the user ---
 data out: the Ítring describing the user's input
*/
alert(message);
