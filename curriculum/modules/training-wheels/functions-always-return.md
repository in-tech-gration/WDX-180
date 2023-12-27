**Programming Training Wheels**: Getting familiar with the return statement

Every single function call in JavaScript will **always** return a value after its execution. 
This is a very important concept that one must learn when starting to work with (and make sense) of functions.
In order to get familiar with the return statement, we propose the following rule when defining a function:

**Always include the `return undefined` statement as the first step.**

For example:

```js
function displayTable(){ 

  // Rest of the code will go here

  return undefined; // <= Get used to adding this statement right away, when defining a function

}
```

As you move on to work on the rest of the function body, the return statement will act as a reminder that some kind of value (most probably, some value other than `undefined`) should be returned.

There are a couple of reasons that you should start defining a function by placing a `return undefined` statement at the last line of the function body:

- It will become a reminder that a function's main purpose is to run some code and return a value back to the line that `called` the function.

```js
const randomNumber = Math.random(); // <= The function call will trigger the execution of some code, produce a random number and return that random number back to this line. After Math.random() has been replaced by a random number (during runtime), JavaScript will proceed to assign that value to the left hand side of the assignment operator and store the value to the `randomNumber` variable.
```

- It will help you memorize the fact that even when a `return` statement has not been explicitly defined inside a function's body, JavaScript will always include an implicit `return undefined` statement, thereby returning the special `undefined` value in those cases. In other words, there's always a `return` statement and a returned value in a function, whether we can see that statement or not.

- It will get you into the good habit of returning some kind of value from your functions. We start by returning the default `undefined` value at first, then consider a better option as we think carefully about the purpose of our function.

- It will help you avoid bugs, such as forgetting to use a `return statement`, resulting in the default `undefined` popping up as an unintended value.

- It will help you better understand and distinguish between `pure` and `impure` functions as you move on to study `functional programming` concepts.

![](./assets/KevlinHenneyUndefined.jpeg)