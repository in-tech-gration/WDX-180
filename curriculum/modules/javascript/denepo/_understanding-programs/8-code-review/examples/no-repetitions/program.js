'use strict';

/* No Repetitions

  This program replaces any groups of repeated characters
  with one single character.

  A user can provide a text with repeated characters to remove.
  - given the text has no repeated characters
    it is returned unchanged
  - given the text has repeated characters
    they are replaced with a single instance of that character

  test cases
    no repeated characters:
      '' -> ''
      'asdf' -> 'asdf'
      'JavaScript' -> 'JavaScript'
      '0123456789' -> '0123456789'
    with repeated characters
      'aaa' -> 'a'
      'JJavaSScriptt' -> 'JavaScriptt'
      'hello jello jiggler' -> 'helo jelo jigler'

*/

/* --- gather user input ---
  data in: null or a string
  data after: a string
*/

var noRepetitions = '';

var phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}

console.log('initial text:', phrase);

/* --- remove repeated characters ---
  data before: a string, possibly with repeated characters
*/

// used in the for-of loop to store the previous character
var previous;

for (var next of phrase) {
  if (next != previous && next != '') {
    noRepetitions = noRepetitions + next;
    console.log('keeping:', next);
  }
  if (next !== '') {
    // assign the value in `next` to `previous`
    previous = next;
  }
}

console.log('with no repetitions:', noRepetitions);

/* --- alert the final output ---
  data out: the user's input without any repeated characters
*/

alert(noRepetitions);
