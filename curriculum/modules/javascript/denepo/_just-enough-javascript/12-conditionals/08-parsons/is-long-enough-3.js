// #todo

'use strict';

/* parsons-collapse: hint
  1. gather input
  2. alert a reaction
    a. they canceled
    b. did not cancel
      1. correct
      2. incorrect
*/

let input = prompt('something longer than 4 characters:');

if (input === null) {
  alert(':(');
} else {
  if (input.length > 4) {
    alert('perfect');
  } else {
    alert('too short!');
  }
}
