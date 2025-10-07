// #todo

'use strict';

console.log('-- begin --');

/* declare and assign variables as described in the comments

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/

_;
console.log(furniture); // should log 'chair'

_;
console.log(building); // should log 'house'

furniture = 'table';
console.log(_); // should log 'table'

_;
console.log(food); // should log undefined

_;
console.log(food); // should log 'apple'

console.log(_); // should log 'house'

console.log(_); // should log 'table'

_;
console.log(_); // should log 'apple, pear'

console.log('-- end --');
