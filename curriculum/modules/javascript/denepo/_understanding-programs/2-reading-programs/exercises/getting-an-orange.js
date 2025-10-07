// #todo

'use strict';

/* -- 1. get an orange --

  - how many control flow structures are there in this goal?
  - describe the input a user needs to give to exit this loop
  - how many paths are there through this Input/Output (I/O) loop?
*/

let theOrange = '';

while (theOrange === '') {
  /* -- 1.a gather user input -- */

  const input = prompt('give me an orange, lower or upper case');

  /* -- 1.b check if the user canceled --
    - which user action will pass this condition?
  */

  if (input === null) {
    continue;
  }

  /* -- 1.c check if the user's input is an orange --
    - what is the scope for `theOrange`?
    - what is the scope for `input`?
  */

  if (input.toLowerCase() === 'orange') {
    theOrange = input;
  }
}

/* -- 2. describe the orange --

  - how many comparisons are there in this goal?
  - how many possible descriptions are there?
  - how many paths are there through this conditional?
  - which variables are used in this goal, where were they declared?
*/

let description = '';

if (theOrange === 'orange') {
  description = 'small';
} else if (theOrange === 'ORANGE') {
  description = 'big';
} else {
  description = 'small and big';
}

/* -- 3. alert the description for the user -- */

alert(theOrange + ' is a ' + description + ' orange');
