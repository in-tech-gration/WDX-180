// #todo

'use strict';

/* https://eslint.org/docs/rules/eqeqeq

  you should never use == or !=, instead use === and !==

  this rule will help you avoid bugs caused by implicit coercion

*/

let time = 'Future';
let space = 'future';

let timeIsSpace = time == space;

console.log(timeIsSpace);
