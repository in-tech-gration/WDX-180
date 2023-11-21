// #todo

'use strict';

/*
  modify this program so it uses .toLowerCase to check for consonants

  you can do this by changing the name of one variable, one string, and a conditional check
    and of course the user's instructions
*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const vowels = 'aeiouAEIOU';

let hasAVowel = false;
for (const char of characters) {
  if (vowels.includes(char)) {
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one vowel');
} else {
  alert('"' + characters + '" has no vowels');
}
