// #todo

'use strict';

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let newPhrase = '';

if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
  }
} else {
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}

alert(newPhrase);
