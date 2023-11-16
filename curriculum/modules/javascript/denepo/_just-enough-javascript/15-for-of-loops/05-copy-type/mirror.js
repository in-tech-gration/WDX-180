// #todo

'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let mirrored = '|';
for (let character of text) {
  mirrored = character + mirrored + character;
}

alert(mirrored);
