// #todo

'use strict';

let animal = null;
while (animal === null) {
  animal = prompt('enter an animal, it will become bigger');
}

let bigAnimal = '';
for (let letter of animal) {
  let upperCase = letter.toUpperCase();
  bigAnimal = bigAnimal + upperCase;
}

alert(animal + ' -> ' + bigAnimal);
