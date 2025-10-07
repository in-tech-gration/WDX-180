// #todo

'use strict';

/* https://eslint.org/docs/rules/prefer-const

  this rule does not allow `let` variable that are not reassigned

*/

let input = null;
while (input === null) {
  input = prompt('enter something, it will be broken');
}

for (let char of input) {
  alert(char);
}
