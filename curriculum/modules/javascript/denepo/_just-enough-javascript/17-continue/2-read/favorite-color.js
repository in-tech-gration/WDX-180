// #todo

'use strict';

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

/*
  - find all the variable declarations
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses
  - how many paths are there through this program?
  - which inputs must a user give to take each path?
  - is it possible to be stuck in an infinite loop?

  done with these questions?  try "ask me" and "random line"
*/
