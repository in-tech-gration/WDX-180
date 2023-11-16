// #todo

'use strict';

let input = prompt('enter something with "ear" in it');

let message;
if (input !== null) {
  if (input.includes('ear')) {
    message = 'eary!';
  } else {
    message = 'not eary :(';
  }
} else {
  message = 'you canceled';
}

alert(message);
