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

let doubled = '';
for (let character of animal) {
  doubled = doubled + character + character;
}

console.log(animal + ' -> ' + doubled);
