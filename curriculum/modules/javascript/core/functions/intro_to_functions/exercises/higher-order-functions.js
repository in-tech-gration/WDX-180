/*
In this file as the filename suggests, we would learn about higher order functions, before starting with this it is recommended to have a basic idea of how functions work and how they are build, so that we could understand what is the purpose of "Higher Order functions".
*/

/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
What is a Higher Order Function (HOF) ?
A function that accepts and/or returns another function is called a higher-order function.
It’s higher-order because instead of strings, numbers, or booleans, it goes higher to operate on functions.
Probably the greatest benefit of HOFs is greater reusability.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Why is the need for higher order functions ? 
As a functional programming language, JavaScript uses higher-order functions to implement abstraction at an even higher level.
Abstraction means hiding certain details and showing only essential information to the user. 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

//Below is an example to understand what higher order functions are:

//Pass function as an argument to another function

//array of names to be used in the function

const names= ['John', 'Tina','Kale','Max'];

//Function "useFunction" takes an array and another function fn as parameters
function useFunction(arr,fn){
  for(let i=0; i<arr.length; i++){
    fn(arr[i]);
  }
}                                

//Function that is being used as a parameter
function argFn (name){
  console.log("Hello " + name );
}

//calling useFunction() with argFn() as a parameter
useFunction(names,argFn);

/*Result printed:
  Hello John
  Hello Tina
  Hello Kale
  Hello Max
*/



/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Some popular higher order functions in JavaScript are:
1.map
2.filter
3.reduce
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/



/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Map
The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

Syntax:
var new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[, thisArg])

In the callback, only the element is required. Other parameters are optional.

Example: 
In the following example, each number in an array is doubled.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); //Output array "doubled" -> [2, 4, 6, 8]

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2. Filter
The filter() method takes each element in an array and it applies a conditional statement against it. 
If this conditional returns true, the element gets pushed to the output array.
If the condition returns false, the element does not get pushed to the output array.

Syntax
var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg])

The syntax for filter is similar to map, except the callback function should return true to keep the element, or false otherwise. In the callback, only the element is required.

Example:
In the following example, odd numbers are "filtered" out, leaving only even numbers.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // Output array "evens" -> [2, 4]

/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3. Reduce
The reduce() method reduces an array of values down to just one value. 
To get the output value, it runs a reducer function on each element of the array.

Syntax
arr.reduce(callback[, initialValue])

The callback argument is a function that will be called once for every item in the array. 

Example:
The following example adds every number together in an array of numbers.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(sum); // Output "sum" -> 10


/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Challenges:
1. Map -> Take an array arr = [1, 4, 9, 16, 25] and create a new array containing the square roots of the numbers in the first array.
2. Filter -> Take an array arr = [2, 1, 7, 3, 6, 5, 8] and create a new array containing only odd numbers from first array.
3. Reduce -> Take an array arr = [1,3,5,7] and return the product of all the elements in the array.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/