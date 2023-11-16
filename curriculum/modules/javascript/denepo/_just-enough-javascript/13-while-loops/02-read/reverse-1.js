// #todo

'use strict';

let text = null;
while (text === null || text === '') {
  text = prompt('enter something to reverse');
}

let reversed = '';

let index = 0;
while (index < text.length) {
  let nextChar = text[index];
  reversed = nextChar + reversed;
  index = index + 1;
}

alert(text + ' -> ' + reversed);

/*
  - find all the variable declarations
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses
  - how many operators can you find in this program (including repeated operators)
  - how many different operators can you find in this program?
  - what types are used with each operator?

  done with these questions?  try "ask me" and "random line"
*/
