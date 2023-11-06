/* 
------------------------------------------------------------------------------------
Tutorial: Create variables
------------------------------------------------------------------------------------
*/

// To create a variable in read-only mode is used const
const fruitConst = "Apple";
// If we try to modify the const for example fruit = 'Banana'; we will get an error that it is not possible to modify its value

// If we want to initialize a variable that we can modify its value we will use let
// The let statement declares a block-scoped local variable, optionally initializing it to a value.

let fruitLet = "Apple";
fruitLet = "Banana";

// We can also use var
// The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

var fruitApple = "Apple";
fruitApple = "Banana";
/*
------------------------------------------------------------------------------------
Challenge: 1. Create a const variable and try to modify the value
            2. Create a let variable and modify the value
            3. Create a var variable and modify the value
------------------------------------------------------------------------------------
*/
