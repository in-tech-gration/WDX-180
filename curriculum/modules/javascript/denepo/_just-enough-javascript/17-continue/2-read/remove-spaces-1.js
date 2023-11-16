// #todo

'use strict';

let input = null;

let hasSpaces = false;
while (!hasSpaces) {
  input = prompt(
    'enter something with at least one space, the spaces will be removed',
  );

  if (input === null) {
    alert('no escape');
  } else if (input === '') {
    alert('gotta enter something');
  } else if (!input.includes(' ')) {
    alert('there must be a space!');
  } else {
    hasSpaces = true;
  }
}

let spaceless = '';
for (let character of input) {
  if (character === ' ') {
    continue;
  }
  spaceless = spaceless + character;
}

alert(input + ' -> ' + spaceless);

/*
  - find all the variable declarations
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses
  - what strategy was used for the input loop?
  - describe how the for-of loop creates a new string with no spaces
  - what is most interesting to you about this program? or surprising? or confusing?
  - do you find this program or the other `remove-spaces` easier to read?

  done with these questions?  try "ask me" and "random line"
*/
