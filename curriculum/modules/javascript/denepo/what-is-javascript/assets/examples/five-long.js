'use strict';

/* Five Long

  This program only accepts strings that are exactly 5 characters.

  Data In:
    any text 5 characters long

  Data Out:
    a friendly success message

  Test Cases:
    '12345' -> 'yes! "12345" is 5 characters long.'
    'qwert' -> 'yes! "qwert" is 5 characters long.'
    'Plunk' -> 'yes! "Plunk" is 5 characters long.'

*/

/* --- prompt until the input is long enough --- */

let input = null;
while (true) {
  /* --- gather user input --- */

  input = prompt('enter anything that is 5 characters long');
  console.log(input);

  /* --- check if the input exists and is 5 characters --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create a message for the user --- */

let message = 'yes! "' + input + '" is 5 characters long.';
console.log(message);

/* --- display the message to the user --- */

alert(message);
