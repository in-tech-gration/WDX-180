'use strict';

/*
  refactor this program to use a `while` loop instead of a `for-of` loop
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}

let previous = '';

let noRepetitions = '';

let i = 0;
while (i < phrase.length) {
  const next = phrase[i];
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
    previous = next;
  }
  i++;
}

alert(noRepetitions);
