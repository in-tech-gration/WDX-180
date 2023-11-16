// #todo

'use strict';

let message = 'your favorite color is ';

while (true) {
  let input = prompt('what is your favorite color?');

  if (input === null) {
    alert('there is no escape');
    continue;
  }

  let confirmed = confirm('is this correct? "' + input + '"');
  if (confirmed) {
    message = message + input;
    break;
  }
}

alert(message);

/* distractors:


    Continue

    Break


*/
