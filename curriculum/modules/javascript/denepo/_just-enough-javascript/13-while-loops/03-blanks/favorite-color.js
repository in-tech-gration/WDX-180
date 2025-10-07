// #todo

'use strict';

let message = 'your favorite color is ';

let isEmpty = true;
while (isEmpty) {
  let input = prompt('what is your favorite color?');

  if (input === null) {
    alert('there is no escape');
  } else if (input.length === 0) {
    alert('input cannot be empty');
  } else {
    message = message + input;
    isEmpty = false;
  }
}

alert(message);

/* distractors:


    While


*/
