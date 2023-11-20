// #todo

'use strict';

let theOrange = '';

while (theOrange === '') {
  const input = prompt('give me an orange, lower or upper case');

  if (input === null) {
    continue;
  }

  if (input.toLowerCase() === 'orange') {
    theOrange = input;
  }
}

let description = '';

if (theOrange === 'orange') {
  description = 'small';
} else if (theOrange === 'ORANGE') {
  description = 'big';
} else {
  description = 'small and big';
}

alert(theOrange + ' is a ' + description + ' orange');
