// #todo

'use strict';

let message = 'your favorite color is ';

while (true) {
  let input = prompt('what is your favorite color?');

  if (input === null) {
    alert('there is no escape');
    continue;
  }

  if (input.length !== 0) {
    message = message + input;
    break;
  }
}

alert(message);
