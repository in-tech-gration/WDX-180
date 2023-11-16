// #todo

'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text to reverse');
}

let reversed = '';
for (let letter of text) {
  reversed = letter + reversed;
}

alert(text + ' -> ' + reversed);
