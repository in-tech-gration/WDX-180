// #todo

'use strict';

let userInput = '';

let isTooShort = true;
while (isTooShort) {
  userInput = prompt('enter anything longer than 5 characters');

  if (userInput === null) {
    alert('there is no escape');
    continue;
  }

  isTooShort = userInput.length <= 5;
  if (isTooShort) {
    alert('too short');
  }
}

alert('"' + userInput + '" is ' + userInput.length + ' characters long');
