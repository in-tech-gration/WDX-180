'use strict';

let input = prompt('please do not cancel');

let message = '';
if (input === null) {
  message = 'you canceled :(';
} else {
  message = 'thank you for your input: ' + input;
}

alert(message);
