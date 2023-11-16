import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-field', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  // --- remove the character if there is only one ---

  // --- display the result ---
});
