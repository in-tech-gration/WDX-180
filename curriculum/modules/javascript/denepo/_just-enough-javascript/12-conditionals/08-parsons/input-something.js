'use strict';


/* parsons-collapse: hint
  1. gather user input
  2. alert a reaction:
    a. sad
    b. !! ??
    c. their input
*/



let userInput = prompt('please input something');


if (userInput === null) {
  alert (':(');
} else if (userInput === '') {
  alert ('nothing!  why !!! ??? !!!');
} else {
  alert ('you inputted: ' + userInput);
}



// begin distractors

let userInput = alert('please input something'); // distractor

if (userInput = null) { // distractor

} else if (userInput = '') { // distractor

} else (userInput === '') { // distractor


// #todo
