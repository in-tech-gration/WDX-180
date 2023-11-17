// #todo

'use strict';

/* Prefer Const

  A linting rule that checks if you used `let` for variable that is never reassigned

  having extra code that does not do anything can be confusing
  this lint warning usually happens because of a mistake

  https://eslint.org/docs/rules/no-unused-expressions
*/

let likesApples = confirm('do you like apples?');

let greeting = 'hello, ';
if (likesApples) {
  greeting + 'welcome to my apple garden';
} else {
  greeting + 'welcome to my orange garden';
}

alert(greeting);
