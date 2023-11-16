'use strict';

let input = null;
while (input === null) {
  input = prompt('no canceling allowed');
  console.log(input);
}

let message = 'thank you for your input: ' + input;
alert(message);
