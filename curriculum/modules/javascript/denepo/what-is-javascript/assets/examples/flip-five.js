'use strict';

/* Flip Five

  This program reverses the input only if it is 5 characters long.

  Data In:
    any text

  Data Out:
    the reversed input if it was 5 characters long
    the unchanged input if it was not 5 characters long

  Test Cases:
    '' -> ''
    'abc' -> 'abc'
    'hello' -> 'olleh'
    'JavaScript' -> 'JavaScript'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt(
    "enter something. \n\nif it's longer than 5 characters it will be reversed",
  );
  console.log(input);
}

/* --- create the final message --- */

let message = '';
if (input.length === 5) {
  /* --- reverse the input if it is 5 characters long --- */

  for (let character of input) {
    message = character + message;
    console.log(message);
  }
} else {
  /* --- do nothing if the input was not 5 characters --- */

  message = input;
  console.log(message);
}

/* --- display the message --- */

alert(message);
