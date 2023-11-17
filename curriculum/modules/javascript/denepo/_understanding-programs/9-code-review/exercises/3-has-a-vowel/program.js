'use strict';

/* Has a Vowel

  checks if your text has one or more vowels

*/

/* --- get string from user --- */

var characters = null;
// leave if the user didn't cancel
while (characters === null) {
  characters = prompt('enter some text, the program will check for vowels');

  // leave if the user didn't cancel
  if (characters !== null) {
    break;
  }
}

/* --- make the vowels --- */

const vowels = 'aeiouAEIOU';

/* --- find vowels in the string --- */

var hasAVowel = false;
for (let char of characters) {
  if (vowels.includes(char)) {
    hasAVowel = true;
    // break from the loop
    break;
  } else {
    // skip to the next character
    continue;
  }
}

/* --- make and alert a message --- */

let message = '';
if (true == hasAVowel) {
  alert('"' + characters + '" has at least one vowel');
} else {
  alert('"' + characters + '" has no vowels');
}
