---
title: JavaScript - Functions 1
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

### Study Plan

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

See also the [exhaustive reference chapter about JavaScript functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions){:target="_blank"} to get to know the details.

**Defining functions**

**Function declarations**

A **function definition** (also called a **function declaration**, or **function statement**) consists of the [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function){:target="_blank"} keyword, followed by:

- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly braces, `{ /* … */ }`.

For example, the following code defines a function named `square`:

```js
function square(number) {
  return number * number;
}
```

Go ahead, try it out! Click the `Live coding` button below and try to call the 
`square` function with a couple of different values, store them in a variable
and display the variable using `console.log()` or `alert()`.

[&#9658; Live coding](#flems-enable)

The function `square` takes one parameter, called `number`. The function consists of one statement that says to return the parameter of the function (that is, `number`) multiplied by itself. The [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return){:target="_blank"} statement specifies the value returned by the function, which is `number * number`.

Parameters are essentially passed to functions **by value** — so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, **the change is not reflected globally or in the code which called that function**.

When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // What do you think this log will output?
```

[&#9658; Live coding](#flems-enable)

When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:

```js
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // What do you think this log will output?
```

[&#9658; Live coding](#flems-enable)

Function declarations and expressions can be nested, which forms a _scope chain_. For example:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
```

See [function scopes and closures](#function_scopes_and_closures) for more information.

**Function expressions**

While the function declaration above is syntactically a statement, functions can also be created by a [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function){:target="_blank"}.

Such a function can be **anonymous**; it does not have to have a name. For example, the function `square` could have been defined as:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

[&#9658; Live coding](#flems-enable)

However, a name _can_ be provided with a function expression. Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
console.log(factorial(4)); // What do you think this log will output?
```

Think about how the code will execute on the second call (4) and try
to predict the result. Then, hit the `Live coding` button below to
check your assumptions.

[&#9658; Live coding](#flems-enable)

Function expressions are convenient when passing a function as an argument to another function. The following example defines a `map` function that should receive a function as first argument and an array as second argument. Then, it is called with a function defined by a function expression:

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]
```

[&#9658; Live coding](#flems-enable)

In JavaScript, a function can be defined based on a condition. For example, the following function definition defines `myFunc` only if `num` equals `0`:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

In addition to defining functions as described here, you can also use the [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function){:target="_blank"} constructor to create functions from a string at runtime, much like [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval){:target="_blank"}.

A **method** is a function that is a property of an object. Read more about objects and methods in [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects){:target="_blank"}.

**Calling functions**

_Defining_ a function does not _execute_ it. Defining it names the function and specifies what to do when the function is called.

**Calling** the function actually performs the specified actions with the indicated parameters. For example, if you define the function `square`, you could call it as follows:

```js
square(5);
```

The preceding statement calls the function with an argument of `5`. The function executes its statements and returns the value `25`.

Functions must be _in scope_ when they are called, but the function declaration can be [hoisted](#function_hoisting) (appear below the call in the code). The scope of a function declaration is the function in which it is declared (or the entire program, if it is declared at the top level).

The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function. The `showProps()` function (defined in [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties){:target="_blank"}){:target="_blank"} is an example of a function that takes an object as an argument.

A function can call itself. For example, here is a function that computes factorials recursively:

```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// You could then compute the factorials of `1` through `5` as follows:

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
```

[&#9658; Live coding](#flems-enable)

There are other ways to call functions. There are often cases where a function needs to be called dynamically, or the number of arguments to a function vary, or in which the context of the function call needs to be set to a specific object determined at runtime.

It turns out that _functions are themselves objects_ — and in turn, these objects have methods. (See the [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function){:target="_blank"} object.) The [`call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call){:target="_blank"} and [`apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply){:target="_blank"} methods can be used to achieve this goal.

**Function hoisting**

Consider the example below:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

This code runs without any error, despite the `square()` function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Function hoisting only works with function _declarations_ — not with function _expressions_. The following code will not work:

<!-- ```js example-bad -->
```js
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

**Function parameters**

There are two special kinds of parameter syntax: _default parameters_ and _rest parameters_.

**Default parameters**

In JavaScript, parameters of functions default to `undefined`. However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.

In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are `undefined`.

In the following example, if no value is provided for `b`, its value would be `undefined` when evaluating `a*b`, and a call to `multiply` would normally have returned `NaN`. However, this is prevented by the second line in this example:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

[&#9658; Live coding](#flems-enable)

With _default parameters_, a manual check in the function body is no longer necessary. You can put `1` as the default value for `b` in the function head:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

[&#9658; Live coding](#flems-enable)

For more details, see [default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters){:target="_blank"} in the reference.

**Rest parameters**

The [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters){:target="_blank"} syntax allows us to represent an indefinite number of arguments as an array.

In the following example, the function `multiply` uses _rest parameters_ to collect arguments from the second one to the end. The function then multiplies these by the first argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

[&#9658; Live coding](#flems-enable)

<!-- ### Exercises -->

<!-- SGEN:META:PROGRESS:task=Study the Functions 1 module and practice -->
