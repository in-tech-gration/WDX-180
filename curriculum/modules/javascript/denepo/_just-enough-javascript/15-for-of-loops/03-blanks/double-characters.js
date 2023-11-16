// #todo

'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be repeated');
}

let doubled = '';
for (let character of text) {
  doubled = doubled + character + character;
}

alert(text + ' -> ' + doubled);
