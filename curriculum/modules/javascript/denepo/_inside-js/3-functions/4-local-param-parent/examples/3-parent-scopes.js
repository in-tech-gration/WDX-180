// #todo

'use strict';

console.log('-- begin --');

/*
  all variables used inside this function's body are declared in the parent scope
  when you update the variables inside the function, they also change in the parent scope!
  this can make your programs very hard to understand. best to avoid it
*/

const usesParents = () => {
  parent1 = `${parent1}-`;
  parent2 = '-';
  return `${parent1}, ${parent2}`;
};

let parent1 = 'a';
let parent2 = 'b';

const fromParents1 = usesParents();
console.log('fromParents1:', fromParents1);
console.log('parent1:', parent1);
console.log('parent2:', parent2, '\n');

parent1 = '|';
parent2 = `${parent2}|`;

console.log('parent1:', parent1);
console.log('parent2:', parent2, '\n');

const fromParents2 = usesParents();
console.log('fromParents2:', fromParents2);
console.log('parent1:', parent1);
console.log('parent2:', parent2, '\n');

parent1 = `${parent1}|`;
parent2 = `${parent2}|`;

console.log('parent1:', parent1);
console.log('parent2:', parent2);

console.log('-- end --');
