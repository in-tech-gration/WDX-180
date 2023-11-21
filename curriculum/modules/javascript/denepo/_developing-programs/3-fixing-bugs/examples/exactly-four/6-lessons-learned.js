// #todo

'use strict';

/* lessons learned

  after you've passed all the tests take a moment to note down what you learned

*/

/* exactly 4

  a user can enter a number and know if it is 4 characters long
  - given the input is null, they canceled :(
  - given the input is sorter than 4, it is too short
  - given the input is longer than 4, it is too long
  - given the input is exactly 4 characters, it's perfect

  test cases:
  - given the input is null
    null -> 'you canceled :('
  - given the input is shorter than 4
    '' -> 'too short'
    'ab' -> 'too short'
    'abc' -> 'too short'
  - given the input is exactly 4
    'abcd' -> 'perfect!'
  - given the input is longer than 4
    'abcde' -> 'too long'
    'abcdef' -> 'too long'


  --- experiments ---

  1. FAILING: 'abcd'
      EXPECT: 'perfect!'
      ACTUAL: 'too short'

    TRY: replacing <= with < because it's also checking if the length is equal to 4
    PREDICT: input with length 4 will not enter the first path, it will be perfect
    IT DID: skip the first path, but went to the second instead
    EXPLAIN: the second condition is also wrong

  2. FAILING: 'abcd'
      EXPECT: 'perfect!'
      ACTUAL: 'too long'

    TRY: replacing >= with > so it does not check if the input is 4 characters long
    PREDICT: skip over this condition and go to the else when the input is 4 characters
    IT DID: go to the else
    EXPLAIN: both of the first conditions are now correct so they evaluate to `false` when the string is length 4

  --- lessons learned ---

    first of all, off-by-one mistakes are annoying

    second.  it looks like programs may have the same mistake many times
    that makes sense.  if the developer was confused about an operator
      they will probably use it incorrectly all over their program

*/

const input = prompt('enter anything with 4 characters');

let message;
if (input === null) {
  message = 'you canceled :(';
} else {
  // 1. I thought this would be 'false' for input with length 4
  // if (input.length <= 4) {
  if (input.length < 4) {
    message = 'too short';
  }
  // 2. this one should also be `false` for length 4
  // else if (input.length >= 4) {
  else if (input.length > 4) {
    message = 'too long';
  } else {
    message = 'perfect!';
  }
}

alert(message);
