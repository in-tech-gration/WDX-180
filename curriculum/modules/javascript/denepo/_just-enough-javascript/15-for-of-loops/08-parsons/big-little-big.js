// #todo

'use strict';

/* parsons-collapse: hint

  1. declare and initialize the animal
  2. declare and initialize empty string
  3. declare and the boolean flag
  4. iterate through the characters of the string
    a. if flag is true true, concatenate as upper case
    b. else concatenate as lower case
    c. toggle the flag variable
  5. compare the string to the expected output

*/

let before = 'camel';

let after = '';

let upperCase = false;
for (let char of before) {
  if (upperCase) {
    after = after + char.toUpperCase();
  } else {
    after = after + char.toLowerCase();
  }
  upperCase = !upperCase;
}

console.log(after === 'cAmEl');
