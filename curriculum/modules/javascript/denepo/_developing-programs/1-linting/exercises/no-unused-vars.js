// #todo

'use strict';

/* https://eslint.org/docs/rules/no-unused-vars

  don't declare variables that are never used
  this makes your code much harder to read and understand

*/

let likesApples = confirm('do you like apples?');

let greeting = '';
if (likesApples) {
  greeting = 'hello, welcome to my apple garden';
} else {
  greeting = 'hello, welcome to my orange garden';
}
