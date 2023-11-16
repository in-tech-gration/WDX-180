// #todo

'use strict';

let message = '';

let isEary = false;
while (!isEary) {
  let input = prompt('enter something that includes "ear"');

  if (input === null) {
    alert('there is no escape');
  } else if (input.toLowerCase().includes('ear')) {
    message = '"' + input + '" includes "ear"';
    isEary = true;
  }
}

alert(message);

/*
  - find all the variable declarations
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses
  - mark each block in this program
  - find the 3 control flow checks in this program
  - what is the purpose of each check?
  - what strategy is used by the while loop's conditional check?

  done with these questions?  try "ask me" and "random line"
*/
