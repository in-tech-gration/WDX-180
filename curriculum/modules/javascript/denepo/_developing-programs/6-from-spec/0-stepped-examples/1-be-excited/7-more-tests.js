'use strict';

/* Be Excited

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
    '123'   -> '123!'
    '..!!..'  -> '..!!..!'
    'HYF'   -> 'HYF!'
    'HYF!!' -> 'HYF!!!'
*/

/* --- get a string from the user --- */
//  Data In:    a string or null
//  Data After:   the first string the user submits

let input = null;
while (input === null) {
  input = prompt('enter something');
  console.log(input);
}
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same string with an exclamation mark

let output = input + '!';
console.log(output);

/* --- display the string to the user --- */
//  Data Out:  an excited string

alert(output);
