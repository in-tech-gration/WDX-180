'use strict';

/* Cat Detector

  This programs prompts the user to input a cat,
  and lets them know if they did input a cat or not.

  Data In:
    ???

  Data Out:
    ???

  Test Cases:
    ???


  PS. try the "ask me" button!
*/

/* --- ??? --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- ??? --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- ??? --- */

alert(message);
