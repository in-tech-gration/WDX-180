// #todo

'use strict';

let phrase = '';
while (phrase === '' || phrase === null) {
  phrase = prompt('enter some text');
}

let noRepeats = '';
for (let character of phrase) {
  if (!noRepeats.includes(character)) {
    noRepeats = noRepeats + character;
  }
}

alert('"' + phrase + ' -> "' + noRepeats + '"');
