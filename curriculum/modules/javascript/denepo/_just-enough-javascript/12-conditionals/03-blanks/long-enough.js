// #todo

'use strict';

let input = prompt('enter anything longer than 5 characters');

let message;
if (input === null) {
  message = 'you canceled :(';
} else if (input.length === 5) {
  message = 'exactly 5!';
} else if (input.length > 5) {
  message = 'long enough';
} else {
  message = 'too short';
}

alert(message);

/* distractors:

  If

  Else

*/
