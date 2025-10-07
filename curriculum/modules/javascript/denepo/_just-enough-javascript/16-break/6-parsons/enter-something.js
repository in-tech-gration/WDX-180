'use strict';

/* parsons-collapse: hint

  your loop's condition should have no logic in it

*/



while (true) {
  let userInput = prompt('enter something to leave this loop');

  if (userInput !== null && userInput !== '') {
    break;
  }
}

alert('done!')


// begin distractors

while (false) { // distractor
while (userInput !== null && userInput !== '') { // distractor
BREAK; // distractor


// #todo
