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

let bigAnimal = '';
for (let letter of animal) {
  let upperCase = letter.toUpperCase();
  bigAnimal = bigAnimal + upperCase;
}

console.log(bigAnimal);
