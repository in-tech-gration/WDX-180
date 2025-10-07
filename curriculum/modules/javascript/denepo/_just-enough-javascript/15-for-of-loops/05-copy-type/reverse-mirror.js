// #todo

'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let reversed = '';
for (let character of text) {
  reversed = character + text;
}

let mirrored = text + '|' + reversed;

alert(mirrored);
