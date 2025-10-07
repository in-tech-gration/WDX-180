// #todo

/* ===== import functions ===== */

import { search } from '../utils/search.js';

/* ===== main program (use functions) ===== */

alert(
  `enter as many texts as you want

then enter a search query (case sensitive)
-> only text that includes the query will be kept`,
);

// -- gather strings --
const strings = [];
while (true) {
  const input = prompt('enter something or click "cancel" to finish');

  if (input === null) {
    break;
  } else if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  strings.push(input);
}
console.log(strings);

// -- get search query --
let query = null;
while (query === null || query === '') {
  query = prompt('enter a search query');
}
console.log(query);

// -- keep only strings that include the search query --
const matches = search(strings, query);
console.log(matches);

// -- generate a message for the user --
let message = `query: ${query}

matches:
- ${matches.join('\n- ')}`;

// -- alert the final message --
alert(message);
