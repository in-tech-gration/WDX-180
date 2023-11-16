// #todo

'use strict';

/* parsons-collapse: hint

  1. declare first name
  2. declare last name
  3. construct a greeting for angus
  4. be excited about meeting angus
  5. make sure the greeting is correct

*/

let first = 'angus';
let last = 'croll';

let greeting = 'hello ' + first + ' ' + last;

greeting = greeting + '!';

console.log(greeting === 'hello angus croll!');

// begin distractors

let greeting = 'hello' + first + last; // distractor
greeting === greeting + '!'; // distractor
let first = angus; // distractor
let last = croll; // distractor
