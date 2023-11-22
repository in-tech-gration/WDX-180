'use strict';

// Be sure to study this in JS Tutor or debugger

// DEFINING a function creates it in memory
//  without executing the code inside the curly braces
const iExist = () => {
  console.log('I exist!');
};

// CALLING a function will run the code in it's body
// you can do this as many times as you like
iExist();
iExist();
iExist();

// there are 3 logs, and one console.log in the source code
//  console.log is not run when the function is DEFINED
//  but it is run each time the function is CALLING
