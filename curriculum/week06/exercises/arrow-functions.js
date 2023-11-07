//In the previous file you aquired the basic concept of functions and how to make a function.

/*
In this file as the filename suggests, we would learn about arrow functions, before starting with this it is recommended to have a basic idea of how functions work and how they are build, so that we could understand what is the purpose of "Arrow functions".
*/

/*
What is arrow function or => ?
It's a new feature that introduced in ES6 and is called arrow function. The left part denotes the input of a function and the right part the output of that function.
Arrow functions introduce concise body syntax, or implicit return. This allows the omission of the curly brackets and the return keyword. Implicit return is useful for creating succinct one-line operations in map , filter , and other common array methods.

(If you are familiar with python you can compare it to list comprehension or comprehension method, it is used to reduce the line of codes and make the function/code look compact and neat.)
*/

//How does it work?

hello = function() {
  return ("Hello World!") ;  //A normal function.
};

//----------------------------------------------------------------------------------------------------------

hello = val => "Hello " + val ; //The same function above but with arrow function '=>'.

/* 

As you can see from the example above, that you have to write less lines of code for the same function that you created using the layman way.
But there are some points that you should remember while using the arrow function, such as:
-> You don't need to use {} or return when you are returning a single value.
-> You can avoid using (), when there is only one parameter in your function.
-> You should not add return in single return type as you have to use {} for applying the return keyword.

*/

//------------------------------------------------------------------------------------------------------

/* 
Aside from this there are many ways to creatively use the arrow function, you should try the things mentioned above in your local console and experiment with it.
If you wanna read more about this you can visit the links below:
-> https://www.w3schools.com/js/js_arrow_function.asp
-> https://devdocs.io/javascript/

*/

//-------------------------------------------------------------------------------------------------------

/* 
A challenge problem to test your understanding and making it crystal clear.
(Do not skip it as it will only benefit you.)

Q1) Write an arrow function expression called greet(). It should accept a single argument representing a person's name. It should return a greeting string.
Q2) Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
Q3) Write an arrow function for the following JavaScript function:

function nameAge(name, age) {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
}


If you wanna practice more or you are stuck, you can check the solutions at:

Avoid looking at the solutions first, and try to complete the problems above by yourself.

https://www.tutorialsandyou.com/javascript/javascript-arrow-function-exercises-and-practice-questions-73.html
*/

//----------------------------------------------------------------------------------------------------------

/*
Believe in your grind, here's a quote for you:

"There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself." ~miyamoto musashi
*/