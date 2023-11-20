// #todo

'use strict';

/* logging strategy

  log each chunk
  log the user's input on each iteration of the I/O loop
  log the user's orange
  log the conditional paths
  log the final description

*/

/* -- get an orange -- */

console.log('-- getting the orange');

let theOrange = '';
while (theOrange === '') {
  const input = prompt('give me an orange, lower or upper case');
  // logging the user's input
  //  this will help us figure out what happens in the rest of the loop
  //  the type is logged as well because prompt can return object or string
  console.log('input:', typeof input, input);

  if (input === null) {
    continue;
  }

  if (input.toLowerCase() === 'orange') {
    theOrange = input;
  }
}
// logging the final value of theOrange after the I/O loop is complete
//  this will always be a string so you don't need to log the type
console.log('theOrange:', theOrange);

/* -- describe the orange -- */

console.log('-- describing the orange');

let description = '';
// logging which conditional path was taken
if (theOrange === 'orange') {
  console.log('path: all lower case');
  description = 'small';
} else if (theOrange === 'ORANGE') {
  console.log('path: all upper case');
  description = 'big';
} else {
  console.log('path: mixed lower/upper case');
  description = 'lumpy';
}
// logging the final value of the description variable
console.log('description:', description);

alert(theOrange + ' is a ' + description + ' orange');
