// #todo

'use strict';

console.log('-- begin --');

// using const with Objects objects is like locking your backpack to a pole
//  someone can't steal your bag because it's locked in place
//  but they can still take things out or put things in

// in JS Tutor:
//  you can change what is stored in the Object
//  you CAN NOT move the arrow reference connected to the variable

const constantObject = { a: 1 };
constantObject.a = 'hello'; // no error
constantObject.b = 'bye'; // no error
// constantObject = { z: 10 }; // error!

let letObject = { a: 1 };
letObject.a = 'hello'; // no error
letObject.b = 'bye'; // no error
letObject = { z: 10 }; // no error

console.log('-- end --');
