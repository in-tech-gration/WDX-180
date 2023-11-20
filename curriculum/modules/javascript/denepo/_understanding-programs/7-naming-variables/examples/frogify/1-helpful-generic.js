// #todo

'use strict';

/* generic

  generic names that describe the variables' roles in the program
  generic names could be used in any program with similar logic or behavior

  _a -> input:
    named because it holds a string of user input to be processed in the program

  _b -> output:
    named because it will hold the final output value of this program
    the output will be created based on the input

  _c -> next:
    the next character in the input string, stepped by the for-of loop

*/

let input = null;
while (input === null) {
  input = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

let output = '';

for (const next of input) {
  if (next === 'f') {
    output = output + 'frog';
  } else if (next === 'F') {
    output = output + 'FROG';
  } else {
    output = output + next;
  }
}

alert(output);
