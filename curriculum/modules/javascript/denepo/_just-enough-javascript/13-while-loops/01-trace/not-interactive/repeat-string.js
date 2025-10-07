// #todo

'use strict';

let animal = 'dog';
// let animal = 'cat';
// let animal = 'horse';
// let animal = 'fish';
// let animal = 'whale';
// let animal = 'elephant';
// let animal = 'snake';
// let animal = 'dove';

let repeated = '';
let i = 0;
while (i < animal.length) {
  repeated = repeated + '\n' + animal;
  i = i + 1;
}

console.log(repeated);
