// #todo

'use strict';

/*
  modify this program so it only accepts strings longer than 10 characters.

  you can make this change on one line
*/

const limit = 5;

let phrase = '';

let longEnough = false;
while (!longEnough) {
  phrase = prompt('enter anything longer than ' + limit + ' characters');

  if (phrase === null) {
    alert('there is no escape');
  } else if (phrase.length <= limit) {
    alert('too short');
  } else {
    longEnough = true;
  }
}

alert('"' + phrase + '" is ' + phrase.length + ' characters long');
