// #todo

'use strict';

let input = '';

while (true) {
  input = prompt('enter something longer than 4 characters');

  if (input === null) {
    alert('there is no escape');
    continue;
  }

  if (input.length <= 4) {
    alert('your input is too short');
    continue;
  }

  break;
}

alert(input);

/* distractors:


    stop

    goto


*/
