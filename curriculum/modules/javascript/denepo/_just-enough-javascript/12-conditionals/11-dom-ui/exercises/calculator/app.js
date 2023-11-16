import {
  whenFormDataChanges,
  readNumber,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('___', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let left = readNumber('__');
  let right = readNumber('__');

  let operator = readString('__');

  // --- calculate the result ---

  // --- display the result ---
});
