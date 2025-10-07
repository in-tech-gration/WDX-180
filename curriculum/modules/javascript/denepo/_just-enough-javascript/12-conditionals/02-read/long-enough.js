// #todo

'use strict';

let input = prompt('enter anything longer than 5 characters');

let message;
if (input === null) {
  message = 'you canceled :(';
} else {
  if (input.length < 5) {
    message = 'too short';
  } else if (input.length > 5) {
    message = 'long enough';
  } else {
    message = 'exactly 5!';
  }
}

alert(message);

/*
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses
  - mark each block in this program
  - do any of the blocks have their own scoped variables?
  - identify each path through the program with a different color
  - mark each user interaction
  - how does each interaction influence the program's execution path?

  done with these questions?  try "ask me" and "random line"
*/
