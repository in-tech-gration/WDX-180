---
title: Intro to Functions
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

#### Functions

  A function is a bit of reusable code. Just as we like to re-use CSS classes, we love to re-use code. Let's start with an example:

  ```javascript
  function addTwo(number) {
    return number + 2;
  }

  const finalAnswer = addTwo(5);
  console.log(finalAnswer);
  ```

  This isn't super useful but hopefully, it shows you the mechanics of how a function works. We created a function called `addTwo`. This function takes in one parameter, `number` and it returns that number with 2 added to it. We can now use that `addTwo` function as much as we want! Let's make something a bit more useful.

  ```javascript
  function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
  }

  console.log(greet("Brian", "Holt", "Lord", "Salutations"));
  console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));
  ```

  Now rather than have to repeat ourselves over and over again with that long string, we can just call greet with the appropriate parameters. Here we use four parameters. The order is important that we send in the parameters because this will be the order function receives these parameters. You can have as many or as few parameters as you like.

  The way to **call** a function is you add parens to the end of it, like this: `someFunctionName()`. If you see parentheses after a variable name, you instantly know that that's a function. Inside the parentheses are the parameters. These variables will be passed to the function that is being called in the order that you put them there. These input variables are called **parameters**. Example:

  ```javascript
  const myHomeCity = "Seattle";
  const myHomeState = "Washington";
  const myHomeCountry = "USA";

  function logOutYourHome(city, state, country) {
    console.log(`You are from ${city}, ${state} ${country}.`);
  }

  logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
  ```

#### Various Ways of Writing Functions

  There are a few ways to write functions that are mostly the same (there are some differences but for now don't worry about it.)

  ```javascript
  function bark() {
    console.log("woof");
  }

  const meow = function () {
    console.log("meeeeeeeow");
  };

  // the => is just = > put together, the font just combines them to one glyph
  const chirp = () => {
    console.log("chirp chirp");
  };

  bark();
  meow();
  chirp();
  ```

  All of these are functions and work as such. There are very subtle differences in how they work but for now, it's enough to know "those are functions". Most of the time they work exactly the same (as you see here.)

---

#### Scope

  We'll talk about scope multiple times but we'll start off here with it. Every time you call a function, it has its own scope. Other things can't peek into it; it just has its own little workspace for it to work with. Once it's done, any variable that you haven't explicitly held on to or returned at the end is discarded. For example:

  ```javascript
  function addFive(number) {
    const someVariable = "you can't see me outside this function";
    return number + 5;
  }

  addFive(10);
  console.log(someVariable);
  ```

  This is not going to work. `someVariable` is inside of the `addFive` scope and once `addFive` completes, it throws `someVariable` away since it's now out-of-scope.

  ```javascript
  let friendsAtYourParty = 0;
  for (let i = 0; i <= 10; i++) {
    friendsAtYourParty++;
  }
  console.log(i);
  ```

  Even this doesn't work since `i` is only in scope for the loop and then after that, it's thrown away. This can be a difficult one to deal with as someone new to coding because you'll go to log something or use a variable and it's out of scope so it's not there. Just know if that happens, this is probably the problem.

  Scope is hard. And scope is particularly strange in JavaScript (it varies by programming language.) If it feels hard it's because it is. A general, imperfect way for you to think about it right now is that a variable is "alive" (in scope) in between whatever the closest `{` is until that `{` closes its corresponding `}`. A few examples are below, see if you can get it right. Keep in mind that the variable will stay in scope as long as any scope it exists in still exists. If I declare a variable in an outer scope and modify a variable in an inner scope, that variable will survive as long as the outer scope does. **It matters where the variable is declared.**

  ```javascript
  const A = "A";
  let F;

  function doStuff(B) {
    console.log(B);
    const C = "C";
    let H = "H";
    if (1 + 1 === 2) {
      const D = "D";
      H = "something else";
    }
    console.log(D);
    console.log(H);
    F = "F";
  }

  let E = 0;
  while (E < 3) {
    E++;
    console.log(A);
    const G = "G";
  }
  console.log(E);
  console.log(G);

  doStuff("B");
  console.log(B);
  console.log(C);
  console.log(F);
  ```

  This is a pretty convoluted example but see what you think. Once you're ready, the next block will be the answers.

  ```display-javascript
  const A = "A";
  let F;

  function doStuff(B) {
    console.log(B); // works, B parameter is still in scope
    const C = "C";
    let H = "H";
    if (1 + 1 === 2) {
      const D = "D";
      H = "something else";
    }
    console.log(D); // does not work, D was declared in that if statement block
    console.log(H); // works, H was declared outside the if statement
    F = "F";
  }

  let E = 0;
  while (E < 3) {
    E++;
    console.log(A); // works, the outer block (called the global scope) is still in scope
    const G = "G";
  }
  console.log(E); // works, E was declared outside the while loop
  console.log(G); // does not work, declared inside the while loop and it's over

  doStuff("B");
  console.log(B); // does not work, the B parameter expires after the function call
  console.log(C); // does not work, C was declared inside the function and the function is over
  console.log(F); // works, F was declared in the global scope
  ```

---

#### Built-ins

  Lots of functions already exist for you! Smart people have created these commonly-used functions for things we often need. For example, say you have a string and you want to make everything lowercase, you can do this:

  ```javascript
  const sentence = "ThIs HaS wEiRd CaSiNg On It";
  const lowerCaseSentence = sentence.toLowerCase();
  console.log(lowerCaseSentence);
  ```

  Always be looking for the parentheses. And the best place to look all this stuff up is from our friends at Mozilla (makers of Firefox): [the MDN][mdn]. MDN used to stand for "Mozilla Developer Network" I think but now it's just synonymous with the documentation for the web. I literally look at this website several times a day. As I said before, you are not expected to remember everything. Looking things up on the MDN is **not** cheating.

  There are so many builtins there's no way we could ever cover all of them. Here are just a few examples. The rest you'll learn as you go.

  ```javascript
  // want to round a number? use Math!
  const number = 5.3;
  const roundedNumber = Math.round(number);
  console.log(number);
  ```

  ```javascript
  // want to see if a string contains another string?
  const testStringOne = "The quick brown fox jumps over the lazy dog";
  const testStringTwo =
    "Mirror, mirror on the wall, don't say it cause I know I'm cute";
  const stringToLookFor = "cute";

  console.log(testStringOne.includes(stringToLookFor));
  console.log(testStringTwo.includes(stringToLookFor));
  ```
  ```javascript
  // want to know how many milliseconds have elapsed since Jan 1 1970?
  console.log(Date.now());
  ```


---

### Summary

### Exercises

#### Task 1

  In this task, we want you to copy and paste the following code in a file called `functions.js` and complete the challenges found inside:

  ```javascript
    /* 
  ------------------------------------------------------------------------------------
  Tutorial: Functions in JavaScript
  ------------------------------------------------------------------------------------
  */


  /*
  ------------------------------------------------------------------------------------
  FUNCTIONS: A function is a repeating piece of "Processing" while the input and output changes.
  ------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------
  EXAMPLE: washing machine which takes dirty clothes as an input, do some processing i.e washing the clothes and returns the washed clothes as an output. Functions are same as washing machine, they take some input, do some processing on that input and then returns that processed value as an output. 
  ------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------

  SYNTAX:-

  function functionName(parameterOne, parameterTwo){
      some processing code...
  }

  ------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------
  FUNCTION EXAMPLE - the below 👇 example takes a name as an input and prints hello "passedName" in the console;
  ------------------------------------------------------------------------------------
  */


  function showName(name){
      console.log("hello " + name);
  }

  showName("sourabh"); // will print "hello sourabh" in the console


  /*
  ------------------------------------------------------------------------------------

  PARAMETERS & ARGUMENTS:-

  1. PARAMETERS: Parameters are the variable names listed inside of the function definition's parenthesis. (for the above showName function the parameter is "name" listed inside the parenthesis.)

  2. ARGUMENTS: Arguments are the actual values passed to a function when it is called. (for the above function showName the argument is "sourabh" which is passed to the function "showName" when called.)
    
  ------------------------------------------------------------------------------------
  */

  /*
  ------------------------------------------------------------------------------------

  RETURN VALUE & UNDEFINED:-

  A funtion which do not returns something returns a special value "undefined".
  Also we can assign the returned value of a function as a value in a variable identifier.
    
  ------------------------------------------------------------------------------------
  */

  console.log(showName("Tanay pratap")); // will print "undefined" in the console because showName is not returning any value

  // Returning value from the function
  function add(num1, num2){
      return num1 + num2;
  }

  console.log(add(5, 6)); // will print 11 in the console


  /*
  ------------------------------------------------------------------------------------
  Challenge: create a function "welcomeUser" which will take username as an input and returns "Welcome " + passed username as an output.
  
  -> your function name should be "welcomeUser".
  -> parameter name should be "userName".
  -> return Welcome + passed username value as an return value.
  -> pass your name as an argument to the "welcomeUser" function.
  -> store that return value in a new variable named as "greeting".
  -> use console.log() to show the greeting value.
  ------------------------------------------------------------------------------------
  */
  ```

#### Task 2

  In this task, we want you to copy and paste the following code in a file called `arrow-functions.js` and complete the challenges found inside:

  ```javascript
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
  ```

#### Task 3

  In this task, we want you to copy and paste the following code in a file called `higher-order-functions.js` and complete the challenges found inside:

  ```javascript
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
  ```



### Extra Resources

### Sources and Attributions

  **Content is based on the following sources:**

  [Functions](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/F-functions.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/F-functions.md){:target="_blank"}

  [Scope](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/G-scope.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/G-scope.md){:target="_blank"}

  [Built-ins](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/H-builtins.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/H-builtins.md){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/btholt/complete-intro-to-web-dev-v3){:target="_blank"}!

  **Exercises are based on the following sources:**

  [TeachMeJavaScriptLikeIm5 arrow-functions](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/8-functions/arrow-function.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/8-functions/arrow-function.js){:target="_blank"}

  [TeachMeJavaScriptLikeIm5 functions](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/8-functions/functions.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/8-functions/functions.js){:target="_blank"}

  [TeachMeJavaScriptLikeIm5 higher-order-functions](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/8-functions/higher-order-functions.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/8-functions/higher-order-functions.js){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5){:target="_blank"}!