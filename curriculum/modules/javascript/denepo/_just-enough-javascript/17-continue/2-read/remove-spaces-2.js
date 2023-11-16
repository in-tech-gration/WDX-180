// #todo

'use strict';

let input = null;

while (true) {
  input = prompt(
    'enter something with at least one space, the spaces will be removed',
  );

  if (input === null) {
    alert('no escape');
    continue;
  }

  if (input === '') {
    alert('gotta enter something');
    continue;
  }

  if (!input.includes(' ')) {
    alert('there must be a space!');
    continue;
  }

  break;
}

let spaceless = '';
for (let char of input) {
  if (char !== ' ') {
    spaceless = spaceless + char;
  }
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
