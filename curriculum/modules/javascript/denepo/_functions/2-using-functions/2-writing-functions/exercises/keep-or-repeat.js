// #todo

import { keepCharacters } from './utils/keep-characters.js';
import { repeatCharacters } from './utils/repeat-characters.js';

/* ===== main program (use functions) ===== */

alert(`enter some text, then decide if you want to either:

- repeat each character
- remove everything that's not a letter or space`);

let original = null;
while (original === null) {
  original = prompt('enter some text');
}

const remove = confirm(`would you like to:

- remove extra things: "ok"
- repeat each character: "cancel"`);

const lettersAndSpace = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const newThing = remove
  ? keepCharacters(original, lettersAndSpace)
  : repeatCharacters(original, 2);

alert(`before: ${original}
after: ${newThing}`);
