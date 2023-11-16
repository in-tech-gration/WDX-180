// #todo

'use strict';

let animal = 'cat';
// let animal = 'horse';
// let animal = 'fish';
// let animal = 'whale';
// let animal = 'elephant';
// let animal = 'snake';
// let animal = 'dove';

let reversed = '';
for (let letter of animal) {
  reversed = letter + reversed;
}

console.log(animal + ' -> ' + reversed);
