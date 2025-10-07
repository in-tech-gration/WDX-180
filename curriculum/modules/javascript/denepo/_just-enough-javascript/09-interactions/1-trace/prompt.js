// #todo

'use strict';

/*
  input the correct values to log the expected values
*/

let input1 = prompt('1. cancel this prompt');
console.log(input1 === null); // true

let input2 = prompt('2. click "ok" without typing anything');
console.log(input2 === ''); // true

let input3 = prompt('3. enter "hello"');
console.log(input3 === 'hello'); // true

let input4 = prompt('4. enter your name');
console.log(input4); // ?
