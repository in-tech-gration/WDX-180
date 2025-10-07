// #todo

'use strict';

// use `const` for every variable that is never reassigned

let message = 'your favorite color is ';

while (true) {
  let input = prompt('what is your favorite color?');

  if (input === null) {
    alert('there is no escape');
    continue;
  }

  if (input.length === 0) {
    alert('you must enter something');
    continue;
  }

  let didConfirm = confirm(
    'are you sure ' + input + ' is your favorite color?',
  );
  if (didConfirm) {
    message = message + input;
    break;
  }
}

alert(message);
