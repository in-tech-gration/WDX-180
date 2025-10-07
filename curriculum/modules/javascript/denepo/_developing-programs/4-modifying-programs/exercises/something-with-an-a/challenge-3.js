// #todo

'use strict';

/*
  modify the program to search for "coffee" in the user's input

  upper or lower case is your choice
*/

const userInput = prompt('please enter something with an "a" in it');

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'nothing!  why !!! ??? !!!';
} else if (userInput.includes('a')) {
  reaction = '"' + userInput + '" is perfect!';
} else {
  reaction = '"' + userInput + '" has no "a" in it';
}

alert(reaction);
