'use strict';

/* parsons-collapse: hint

  0. strict mode!
  1. declare input variable
  2. while input is null
    - gather user input
  3. if input is empty string
    - display a sad face
    else
    - display their input
*/

let input = null;
while (input === null) {
  input = prompt('enter something');
}

if (input === '') {
  alert(':(');
} else {
  alert('your input: ' + input);
}

// --- distractors ---


while input === null { // distractor
if (input === '')  // distractor
LET input = null; // distractor
