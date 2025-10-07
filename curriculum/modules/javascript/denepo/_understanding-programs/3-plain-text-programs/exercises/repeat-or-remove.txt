// #todo

'use strict';

/* -- get a phrase from the user -- */

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

/* -- ask the user how to process the phrase -- */

const dontRemoveLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

/* -- decide which logic to use -- */

let newPhrase = '';
if (!dontRemoveLetters) {
  /* -- repeat each character -- */

  let index = 0;
  while (index < phrase.length) {
    const char = phrase[index];
    newPhrase = newPhrase + char + char;
    index = index + 1;
  }
} else {
  /* -- remove everything that is not a letter -- */

  const theAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let index = 0;
  while (index < phrase.length) {
    const letter = phrase[index];
    if (theAlphabet.includes(letter.toLowerCase())) {
      newPhrase = newPhrase + letter;
    }
    index = index + 1;
  }
}

/* -- communicate the result -- */

alert(newPhrase);
