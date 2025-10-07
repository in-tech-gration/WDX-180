// #todo

'use strict';

let anything = '';

while (true) {
  anything = prompt('enter anything longer than 5 characters');

  if (anything === null) {
    alert('there is no escape');
    continue;
  }

  if (anything.length <= 5) {
    alert('too short');
    continue;
  }

  break;
}

alert('"' + anything + '" is ' + anything.length + ' characters long');
