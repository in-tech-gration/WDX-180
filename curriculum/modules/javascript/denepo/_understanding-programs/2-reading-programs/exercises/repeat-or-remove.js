// #todo

'use strict';

/* --- get a phrase from the user --- */

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

/* --- ask the user how to process the phrase --- */

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

/* --- either keep the letters, or repeat the characters --- */

let newPhrase = '';

if (keepLetters) {
  /* --- iterate through each character of the user's phrase --- */

  const letters = 'abcdefghijklmnopqrstuvwxyz';

  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
  }
} else {
  /* --- iterate through each character in the user's phrase --- */

  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}

/* --- alert the new phrase --- */

alert(newPhrase);
