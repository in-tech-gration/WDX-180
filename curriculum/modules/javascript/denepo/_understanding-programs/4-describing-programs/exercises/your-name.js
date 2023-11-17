// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('enter your name:');

  if (userInput === null || userInput === '') {
    alert('nothing is not a name');
    continue;
  }

  const userDidConfirm = confirm('is this your name: "' + userInput + '"');
  if (userDidConfirm) {
    break;
  }
}

alert('your name is: "' + userInput + '"');
