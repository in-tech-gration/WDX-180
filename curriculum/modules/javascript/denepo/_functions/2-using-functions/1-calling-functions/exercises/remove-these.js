/* remove these

  removes user-provided character from their input

*/

import { removeCharacters } from './utils/remove-characters.js';

/* ===== main program (use functions) ===== */

alert('enter some text, then decide what you want to remove from it');

let original = null;
while (original === null) {
  original = prompt('enter the text to modify');
}

let removeThese = null;
while (removeThese === null) {
  removeThese = prompt(
    `enter all the characters you would like to remove from:\n- "${original}"`,
  );
}

// use `removeCharacters` to create a new value assigned to `removified`
__;

alert(`before: ${original}
after: ${removified}`);
