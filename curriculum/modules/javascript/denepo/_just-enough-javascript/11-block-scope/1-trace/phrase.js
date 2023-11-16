// #todo

'use strict';

let phrase = '';

{
  let word = 'hello';
  phrase = phrase + word;
}

{
  let word = 'world';
  phrase = phrase + ' ' + word;
}

console.log(phrase === 'hello world'); // true
