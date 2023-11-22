// #todo

import { repeatCharacters } from './utils/repeat-characters.js';

/* ===== main program (use functions) ===== */

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be repeated');
}

let repeats = NaN;
while (Number.isNaN(repeats)) {
  const input = prompt('how many times do you want to repeat each character?');
  if (input !== null) {
    repeats = Number(input);
  }
}

let repeated = '';
for (const char of text) {
  repeated += repeatCharacters(char, repeats);
}

alert(`${text} --> ${repeated}`);
