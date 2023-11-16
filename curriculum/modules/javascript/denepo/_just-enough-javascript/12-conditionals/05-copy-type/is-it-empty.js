// #todo

'use strict';

let input = prompt('do whatever you want');

let message = 'your input is ';
if (input === null) {
  let maybeNot = '';
  if (input.length !== 0) {
    maybeNot = 'not ';
  }
  message = message + maybeNot + 'empty';
} else {
  message = message + 'null';
}

alert(message);
