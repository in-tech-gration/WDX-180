// #todo

'use strict';

let input = null;
while (input === null) {
  input = prompt('enter some text, the program will check if it is excited');
}

let isExcited = false;
for (const char of input) {
  if (char === '!') {
    isExcited = true;
    break;
  }
}

let message = '';
if (isExcited) {
  message = '"' + input + '" is excited';
} else {
  message = '"' + input + '" is not excited';
}

alert(message);
