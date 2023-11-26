'use strict';

// PS. study this in JS Tutor, and with the ?variables lens!

// functions allow you to reuse the same code with different values
//  PARAMETERS declare variables available inside your function
//  they are assigned a value when you EXECUTE the function
const logTheParameter = (parameter) => {
  console.log(typeof parameter, parameter);
};

// ARGUMENTS assign values to parameters when functions are EXECUTED
// you can pass arguments directly as values
logTheParameter('4');
logTheParameter(4.0);
logTheParameter('4.0');

// or indirectly using variables
const arg1 = true;
logTheParameter(arg1);

const arg2 = null;
logTheParameter(arg2);

const arg3 = undefined;
logTheParameter(arg3);

// if no argument is passed, parameters will be undefined
logTheParameter();
