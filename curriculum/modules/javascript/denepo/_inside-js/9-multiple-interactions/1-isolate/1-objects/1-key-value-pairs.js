'use strict';

console.log('-- begin --');

/*
  hint: use JS Tutor
*/

// do you find yourself doing this?
const bread = 'for dipping';
const chili = 'a soup';
const milk = 'a white beverage';

// maybe it's time for this: object literal declaration
//  an object with key/value pairs
const foods = {
  bread: 'for dipping',
  chili: 'a soup',
  milk: 'drink it',
};

// access individual entries with a . followed by the key
console.log(foods.bread); // 'for dipping'
console.log(foods.chili); // 'a soup'
console.log(foods.milk); // 'drink it'

// non-existent keys have the value undefined
console.log(foods.tables === undefined, 'Test 2: undefined entries');

// you can add key/value pairs because objects are like backpacks
//  using const is like locking a backpack outside
//  people can still add and remove things from the object
//  but the same object will always be referenced by this variable
foods.nuts = 'roasted, salted';
console.log(foods.nuts); // 'roasted, salted'

// you can reassign keys like so:
foods.milk = 'goat or cow?';
console.log(foods.milk); // 'goat or cow?'

// and can remove key/value pairs like so:
delete foods.chili;
console.log(foods.chili); // undefined

console.log('-- end --');
