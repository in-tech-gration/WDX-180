// #todo

'use strict';

/*
  modify the program so the sorted strings are alerted from long to short
*/

alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let shortStrings = 'short:';
let mediumStrings = 'medium:';
let longStrings = 'long:';

while (true) {
  const input = prompt('enter something');

  if (input === null) {
    break;
  }

  if (input.length < 5) {
    shortStrings = shortStrings + '\n- "' + input + '"';
  } else if (input.length < 10) {
    mediumStrings = mediumStrings + '\n- "' + input + '"';
  } else {
    longStrings = longStrings + '\n- "' + input + '"';
  }
}

alert(shortStrings + '\n\n' + mediumStrings + '\n\n' + longStrings);
