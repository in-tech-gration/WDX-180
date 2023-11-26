// #todo

'use strict';

/*
  only keep text that contain the search query
*/

alert(
  `enter as many phrases as you want

then enter a search query (case sensitive)
-> only phrases that includes the query will be kept`,
);

// -- gather strings --
const strings = [];

while (true) {
  const input = prompt('enter some text or click "cancel"');

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
const matches = [];
for (const string of strings) {
  if (string.includes(query)) {
    matches.push(string);
  }
}
console.log(matches);

// -- generate a message for the user --
let message = `query: ${query}

matches:
- ${matches.join('\n- ')}`;

// -- alert the final message --
alert(message);
