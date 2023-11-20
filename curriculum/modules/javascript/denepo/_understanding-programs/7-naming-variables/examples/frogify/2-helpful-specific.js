// #todo

'use strict';

/* specific

  specific names that relate to the program's use case
  specific names may not make sense if you use them in a different program

  _a -> toBeFrogged:
    named because it is a string of text that does not have enough frogs
    more frogs will be added

  _b -> frogged:
    named because it is a new string based on toBeFrogged, but with more frogs

  _c -> maybeF:
    named because the character we care about is either "f" or "F"
    so the variable name is focusing on how it will be checked in the conditionals

*/

let toBeFrogged = null;
while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

let frogged = '';

for (const maybeF of toBeFrogged) {
  /* -- append to new string -- */

  if (maybeF === 'f') {
    frogged = frogged + 'frog';
  } else if (maybeF === 'F') {
    frogged = frogged + 'FROG';
  } else {
    frogged = frogged + maybeF;
  }
}

alert(frogged);
