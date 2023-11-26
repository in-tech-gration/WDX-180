'use strict';

// using const with arrays objects is like locking your backpack to a pole
//  someone can't steal your bag because it's locked in place
//  but they can still take things out or put things in

// in JS Tutor:
//  you can change what is stored in the array
//  you CAN NOT change the arrow reference connected to the variable

const constantArray = [4];
constantArray[0] = 6; // no error
constantArray[1] = 7; // no error
constantArray.push(12); // no error
constantArray.pop(); // no error
// constantArray = [6]; // error!

let letArray = [4];
letArray[0] = 6; // no error
letArray[1] = 7; // no error
letArray.push(12); // no error
letArray.pop(); // no error
letArray = [6]; // no error
