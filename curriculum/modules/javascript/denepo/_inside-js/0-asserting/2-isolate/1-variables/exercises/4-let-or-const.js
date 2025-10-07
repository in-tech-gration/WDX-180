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
console.log(x); // should print 'a'

_;
console.log(y); // should print 'b'

console.log(x); // should print 'a'

_;
console.log(z); // should print undefined

console.log(y); // should print 'b'

_;
console.log(z); // should print 'c'

_;
console.log(y); // should print 'bd'

console.log(x); // should print 'a'

console.log('-- end --');
