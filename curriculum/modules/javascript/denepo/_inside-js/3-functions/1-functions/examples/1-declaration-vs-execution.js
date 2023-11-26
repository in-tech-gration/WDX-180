'use strict';

// Be sure to study this in JS Tutor or debugger

// DECLARING a function creates it in memory
//  without executing the code inside the curly braces
const iExist = () => {
  console.log('I exist!');
};

// EXECUTING a function will run the code in it's body
// you can do this as many times as you like
iExist();
iExist();
iExist();

// there are 3 logs, and one console.log in the source code
//  console.log is not run when the function is DECLARED
//  but it is run each time the function is EXECUTED
