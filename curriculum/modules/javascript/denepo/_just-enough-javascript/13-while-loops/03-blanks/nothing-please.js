'use strict';

let input = null;

while (input === null) {
  input = prompt('type nothing and click "enter"');
}

let message = '';
if (input === '') {
  message = 'thank you for nothing!';
} else {
  message = 'this is not nothing: ' + input;
}

alert(message);
