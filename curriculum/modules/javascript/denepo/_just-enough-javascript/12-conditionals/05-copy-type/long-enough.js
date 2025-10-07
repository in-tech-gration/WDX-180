// #todo

'use strict';

let input = prompt('enter anything longer than 5 characters');

let message;
if (input === null) {
  message = 'you canceled :(';
} else if (input.length < 5) {
  message = 'too short';
} else if (input.length > 5) {
  message = 'long enough';
} else {
  message = 'exactly 5!';
}

alert(message);
