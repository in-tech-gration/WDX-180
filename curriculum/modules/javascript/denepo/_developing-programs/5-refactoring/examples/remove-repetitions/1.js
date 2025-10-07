'use strict';

/*
  refactor this program to use a boolean flag in the I/O loop
*/

let phrase = null;

let isValid = false;
while (!isValid) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );

  if (phrase !== null) {
    isValid = true;
  }
}

let previous = '';

let noRepetitions = '';
for (const next of phrase) {
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
    previous = next;
  }
}

alert(noRepetitions);
