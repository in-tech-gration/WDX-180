---
title: Week 08 | JavaScript Core 2
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

<hr class="mb-0">

<h1 id="{{ Week 08-JavaScript Core 2 | slugify }}">
  <span class="week-prefix">Week 08 |</span> JavaScript Core 2
</h1>

<img src="assets/header--cookie-the-pom-gySMaocSdqs-unsplash.jpg" />

<div class="week-controls">

  {% assign week_num = 08 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 08 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 27/11/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num < 36 %}

      {% assign next_week_num = 08 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

<!-- VERSION -->
<hr style="margin-bottom:0" />
<div class="center opacity-50 opacity-100:hover">
  You are viewing v2.0 of this content. To go back to v1.0 click <a href="v1.0">this link</a>.
</div>
<!-- VERSION -->

---

<!-- Week 08 - Day 1 | JavaScript - Functions 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 08 - Day 1</span> | JavaScript - Functions 2</h2>
  </summary>

<!-- Schedule -->

### Study Plan

Let's continue where we've left off with Functions in JavaScript.

**Recursion**

A function can refer to and call itself. It can be referred to either by the function expression or declaration's name, or via any in-scope variable that refers to the function object. For example, consider the following function definition:

```js
const foo = function bar() {
  // statements go here
};
```

Within the function body, you can refer to the function itself either as `bar` or `foo`, and call itself using `bar()` or `foo()`.

A function that calls itself is called a _recursive function_. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case).

For example, consider the following loop:

```js
let x = 0;
// "x < 10" is the loop condition
while (x < 10) {
  // do stuff
  x++;
}
```

It can be converted into a recursive function declaration, followed by a call to that function:

```js
function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

However, some algorithms cannot be simple iterative loops. For example, getting all the nodes of a tree structure (such as the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model){:target="_blank"}) is easier via recursion:

```js
function walkTree(node) {
  if (node === null) {
    return;
  }
  // do something with node
  for (const child of node.childNodes) {
    walkTree(child);
  }
}
```

Compared to the function `loop`, each recursive call itself makes many recursive calls here.

It is possible to convert any recursive algorithm to a non-recursive one, but the logic is often much more complex, and doing so requires the use of a stack.

In fact, recursion itself uses a stack: the function stack. The stack-like behavior can be seen in the following example:

```js
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
}
foo(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
```

[&#9658; Live coding](#flems-enable)

**Immediately Invoked Function Expressions (IIFE)**

An [Immediately Invoked Function Expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE){:target="_blank"} is a code pattern that directly calls a function defined as an expression. It looks like this:

```js
(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();
```

Instead of saving the function in a variable, the function is immediately invoked. This is almost equivalent to just writing the function body, but there are a few unique benefits:

- It creates an extra [scope](#function_scopes_and_closures) of variables, which helps to confine variables to the place where they are useful.
- It is now an _expression_ instead of a sequence of _statements_. This allows you to write complex computation logic when initializing variables.

For more information, see the [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE){:target="_blank"} glossary entry.

**Function scopes and closures**

Functions form a [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope){:target="_blank"} for variables—this means variables defined inside a function cannot be accessed from anywhere outside the function. The function scope inherits from all the upper scopes. For example, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access. On the other hand, the parent function (and any other parent scope) does _not_ have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables in the inner function.

```js
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
```

[&#9658; Live coding](#flems-enable)

**Closures**

We also refer to the function body as a _closure_. A closure is any piece of source code (most commonly, a function) that refers to some variables, and the closure "remembers" these variables even when the scope in which these variables were declared has exited.

Closures are usually illustrated with nested functions to show that they remember variables beyond the lifetime of its parent scope; but in fact, nested functions are unnecessary. Technically speaking, all functions in JavaScript form closures—some just don't capture anything, and closures don't even have to be functions. The key ingredients for a _useful_ closure are the following:

- A parent scope that defines some variables or functions. It should have a clear lifetime, which means it should finish execution at some point. Any scope that's not the global scope satisfies this requirement; this includes blocks, functions, modules, and more.
- An inner scope defined within the parent scope, which refers to some variables or functions defined in the parent scope.
- The inner scope manages to survive beyond the lifetime of the parent scope. For example, it is saved to a variable that's defined outside the parent scope, or it's returned from the parent scope (if the parent scope is a function).
- Then, when you call the function outside of the parent scope, you can still access the variables or functions that were defined in the parent scope, even though the parent scope has finished execution.

The following is a typical example of a closure:

```js
// The outer function defines a variable called "name"
const pet = function (name) {
  const getName = function () {
    // The inner function has access to the "name" variable of the outer function
    return name;
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"
```

[&#9658; Live coding](#flems-enable)

It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned.

```js
const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver
```

[&#9658; Live coding](#flems-enable)

In the code above, the `name` variable of the outer function is accessible to the inner functions, and there is no other way to access the inner variables except through the inner functions. The inner variables of the inner functions act as safe stores for the outer arguments and variables. They hold "persistent" and "encapsulated" data for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

[&#9658; Live coding](#flems-enable)

In the code above, we use the [IIFE](#immediately_invoked_function_expressions_iife) pattern. Within this IIFE scope, two values exist: a variable `apiCode` and an unnamed function that gets returned and gets assigned to the variable `getCode`. `apiCode` is in the scope of the returned unnamed function but not in the scope of any other part of the program, so there is no way for reading the value of `apiCode` apart from via the `getCode` function.

**Multiply-nested functions**

Functions can be multiply-nested. For example:

- A function (`A`) contains a function (`B`), which itself contains a function (`C`).
- Both functions `B` and `C` form closures here. So, `B` can access `A`, and `C` can access `B`.
- In addition, since `C` can access `B` which can access `A`, `C` can also access `A`.

Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. This is called _scope chaining_. Consider the following example:

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)
```

[&#9658; Live coding](#flems-enable)

In this example, `C` accesses `B`'s `y` and `A`'s `x`. This can be done because:

1. `B` forms a closure including `A` (i.e., `B` can access `A`'s arguments and variables).
2. `C` forms a closure including `B`.
3. Because `C`'s closure includes `B` and `B`'s closure includes `A`, then `C`'s closure also includes `A`. This means `C` can access _both_ `B` _and_ `A`'s arguments and variables. In other words, `C` _chains_ the scopes of `B` and `A`, _in that order_.

The reverse, however, is not true. `A` cannot access `C`, because `A` cannot access any argument or variable of `B`, which `C` is a variable of. Thus, `C` remains private to only `B`.

**Name conflicts**

When two arguments or variables in the scopes of a closure have the same name, there is a _name conflict_. More nested scopes take precedence. So, the innermost scope takes the highest precedence, while the outermost scope takes the lowest. This is the scope chain. The first on the chain is the innermost scope, and the last is the outermost scope. Consider the following:

```js
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)
```

The name conflict happens at the statement `return x * 2` and is between `inside`'s parameter `x` and `outside`'s variable `x`. The scope chain here is `inside` => `outside` => global object. Therefore, `inside`'s `x` takes precedences over `outside`'s `x`, and `20` (`inside`'s `x`) is returned instead of `10` (`outside`'s `x`).

**Using the arguments object**

The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:

```js
arguments[i];
```

where `i` is the ordinal number of the argument, starting at `0`. So, the first argument passed to a function would be `arguments[0]`. The total number of arguments is indicated by `arguments.length`.

Using the `arguments` object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function. You can use `arguments.length` to determine the number of arguments actually passed to the function, and then access each argument using the `arguments` object.

For example, consider a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:

```js
function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

// You can pass any number of arguments to this function, and it concatenates each argument into a string "list":
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

[&#9658; Live coding](#flems-enable)

> The `arguments` variable is "array-like", but not an array. It is array-like in that it has a numbered index and a `length` property. However, it does _not_ possess all of the array-manipulation methods.



See the [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function){:target="_blank"} object in the JavaScript reference for more information.

**Arrow functions**

An [arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions){:target="_blank"} (also called a _fat arrow_ to distinguish from a hypothetical `->` syntax in future JavaScript) has a shorter syntax compared to function expressions and does not have its own [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this){:target="_blank"}, [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments){:target="_blank"}, [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super){:target="_blank"}, or [`new.target`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target){:target="_blank"}. Arrow functions are always anonymous.

Two factors influenced the introduction of arrow functions: _shorter functions_ and _non-binding_ of `this`.

**Shorter functions**

In some functional patterns, shorter functions are welcome. Compare:

```js
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]
```

[&#9658; Live coding](#flems-enable)

**No separate this**

Until arrow functions, every new function defined its own [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this){:target="_blank"} value (a new object in the case of a constructor, undefined in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode){:target="_blank"} function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming.

```js
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

const p = new Person();
```

In ECMAScript 3/5, this issue was fixed by assigning the value in `this` to a variable that could be closed over.

```js
function Person() {
  // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
```

Alternatively, a [bound function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind){:target="_blank"} could be created so that the proper `this` value would be passed to the `growUp()` function.

An arrow function does not have its own `this`; the `this` value of the enclosing execution context is used. Thus, in the following code, the `this` within the function that is passed to `setInterval` has the same value as `this` in the enclosing function:

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

const p = new Person();
```

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 08 - Day 2 | JavaScript - Expressions & operators 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 08 - Day 2</span> | JavaScript - Expressions & operators 2</h2>
  </summary>

<!-- Schedule -->

### Study Plan

  This chapter describes more of JavaScript's expressions and operators.

<!-- ### Destructuring -->


**Destructuring**

  For more complex assignments, the [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring){:target="_blank"} syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and
  object literals.

  Without destructuring, it takes multiple statements to extract values from arrays and objects:

  ```js
  const foo = ["one", "two", "three"];

  const one = foo[0];
  const two = foo[1];
  const three = foo[2];
  ```

  Click the `Live coding` button below and interact with the code.
  Use `console.log()` or `alert()` to display the variable values.

  [&#9658; Live coding](#flems-enable)

  With destructuring, you can extract multiple values into distinct variables using a single statement:

  ```js
  const [one, two, three] = foo;
  ```

<!-- ## String operators -->


**String operators**

  In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

  For example,

  ```js
  console.log("my " + "string"); // console logs the string "my string".
  ```

  [&#9658; Live coding](#flems-enable)

  The shorthand assignment operator `+=` can also be used to concatenate strings.

  For example,

  ```js
  let myString = "alpha";
  myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
  ```

<!-- ## Comma operator -->


**Comma operator**

  The [comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator){:target="_blank"} (`,`)
  evaluates both of its operands and returns the value of the last operand.
  This operator is primarily used inside a `for` loop, to allow multiple variables to be updated each time through the loop.
  It is regarded bad style to use it elsewhere, when it is not necessary.
  Often two separate statements can and should be used instead.

  For example, if `a` is a 2-dimensional array with 10 elements on a side, the following code uses the comma operator to update two variables at once.
  The code prints the values of the diagonal elements in the array:

  ```js
  const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const a = [x, x, x, x, x];

  for (let i = 0, j = 9; i <= j; i++, j--) {
    //                              ^
    console.log(`a[${i}][${j}]= ${a[i][j]}`);
  }
  ```

  [&#9658; Live coding](#flems-enable)

<!-- ## Unary operators -->


**Unary operators**

  A unary operation is an operation with only one operand.

<!-- ### void -->


**void**

  The [`void` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void){:target="_blank"} specifies an expression to be evaluated without returning a value. `expression` is a JavaScript expression to evaluate.
  The parentheses surrounding the expression are optional, but it is good style to use them to avoid precedence issues.

<!-- ## Relational operators -->


**Relational operators**

  A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.

<!-- ### in -->


**in**

  The [`in` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in){:target="_blank"} returns `true` if the specified property is in the specified object.
  The syntax is:

  <!-- ```js-nolint -->


  ```js
  propNameOrNumber in objectName
  ```

  where `propNameOrNumber` is a string, numeric, or symbol expression representing a property name or array index, and `objectName` is the name of an object.

  The following examples show some uses of the `in` operator.

  ```js
  // Arrays
  const trees = ["redwood", "bay", "cedar", "oak", "maple"];
  0 in trees; // returns true
  3 in trees; // returns true
  6 in trees; // returns false
  "bay" in trees; // returns false
  // (you must specify the index number, not the value at that index)
  "length" in trees; // returns true (length is an Array property)

  // built-in objects
  "PI" in Math; // returns true
  const myString = new String("coral");
  "length" in myString; // returns true

  // Custom objects
  const myCar = { make: "Honda", model: "Accord", year: 1998 };
  "make" in myCar; // returns true
  "model" in myCar; // returns true
  ```

<!-- ### instanceof -->


**instanceof**

  The [`instanceof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof){:target="_blank"} returns `true`
  if the specified object is of the specified object type. The syntax is:

  <!-- ```js-nolint -->


  ```js
  object instanceof objectType
  ```

  where `object` is the object to test against `objectType`, and `objectType` is a constructor representing a type, such as [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map){:target="_blank"} or [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array){:target="_blank"}.

  Use `instanceof` when you need to confirm the type of an object at runtime.
  For example, when catching exceptions, you can branch to different exception-handling code depending on the type of exception thrown.

  For example, the following code uses `instanceof` to determine whether `obj` is a `Map` object. Because `obj` is a `Map` object, the statements inside the `if` block execute.

  ```js
  const obj = new Map();
  if (obj instanceof Map) {
    // statements to execute
  }
  ```

<!-- ## Basic expressions -->


**Basic expressions**

  All operators eventually operate on one or more basic expressions. These basic expressions include [identifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations){:target="_blank"} and [literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#literals){:target="_blank"}, but there are a few other kinds as well. They are briefly introduced below, and their semantics are described in detail in their respective reference sections.

<!-- ### Grouping operator -->


**Grouping operator**

  The grouping operator `( )` controls the precedence of evaluation in
  expressions. For example, you can override multiplication and division first, then
  addition and subtraction to evaluate addition first.

  <!-- ```js-nolint -->


  ```js
  const a = 1;
  const b = 2;
  const c = 3;

  // default precedence
  a + b * c; // 7
  // evaluated by default like this
  a + (b * c); // 7

  // now overriding precedence
  // addition before multiplication
  (a + b) * c; // 9

  // which is equivalent to
  a * c + b * c; // 9
  ```

<!-- ### Property accessor -->


**Property accessor**

  The [property accessor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors){:target="_blank"} syntax gets property values on objects, using either dot notation or bracket notation.

  ```js
  object.property;
  object["property"];
  ```

  The [working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects){:target="_blank"} guide goes into more details about object properties.

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 08 - Day 3 | JavaScript - Numbers & Strings -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 08 - Day 3</span> | JavaScript - Numbers & Strings</h2>
  </summary>

<!-- Schedule -->

### Study Plan

  This chapter introduces the two most fundamental data types in JavaScript: numbers and strings. We will introduce their underlying representations, and functions used to work with and perform calculations on them.

<!-- ## Numbers -->


**Numbers**

  In JavaScript, numbers are implemented in [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format){:target="_blank"} (i.e., a number between ±2^−1022 and ±2^+1023, or about ±10^−308 to ±10^+308, with a numeric precision of 53 bits). Integer values up to ±2^53 − 1 can be represented exactly.

  In addition to being able to represent floating-point numbers, the number type has three symbolic values: [Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity){:target="_blank"}, `-Infinity`, and [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN){:target="_blank"} (not-a-number).

  See also [JavaScript data types and structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures){:target="_blank"} for context with other primitive types in JavaScript.

  You can use four types of number literals: decimal, binary, octal, and hexadecimal.

<!-- ### Decimal numbers -->


**Decimal numbers**

  <!-- ```js-nolint -->


  ```js
  1234567890
  42
  ```

  Decimal literals can start with a zero (`0`) followed by another decimal digit, but if all digits after the leading `0` are smaller than 8, the number is interpreted as an octal number. This is considered a legacy syntax, and number literals prefixed with `0`, whether interpreted as octal or decimal, cause a syntax error in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals){:target="_blank"} — so, use the `0o` prefix instead.

  <!-- ```js-nolint example-bad -->


  ```js
  0888 // 888 parsed as decimal
  0777 // parsed as octal, 511 in decimal
  ```

<!-- ### Binary numbers -->


**Binary numbers**

  Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (`0b` or `0B`). If the digits after the `0b` are not 0 or 1, the following [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError){:target="_blank"} is thrown: "Missing binary digits after 0b".

  <!-- ```js-nolint -->


  ```js
  0b10000000000000000000000000000000 // 2147483648
  0b01111111100000000000000000000000 // 2139095040
  0B00000000011111111111111111111111 // 8388607
  ```

<!-- ### Octal numbers -->


**Octal numbers**

  The standard syntax for octal numbers is to prefix them with `0o`. For example:

  <!-- ```js-nolint -->


  ```js
  0O755 // 493
  0o644 // 420
  ```

  There's also a legacy syntax for octal numbers — by prefixing the octal number with a zero: `0644 === 420` and `"\045" === "%"`. If the digits after the `0` are outside the range 0 through 7, the number will be interpreted as a decimal number.

  ```js
  const n = 0755; // 493
  const m = 0644; // 420
  ```

  [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode){:target="_blank"} forbids this octal syntax.

<!-- ### Hexadecimal numbers -->


**Hexadecimal numbers**

  Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (`0x` or `0X`). If the digits after 0x are outside the range (0123456789ABCDEF), the following [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError){:target="_blank"} is thrown: "Identifier starts immediately after numeric literal".

  <!-- ```js-nolint -->


  ```js
  0xFFFFFFFFFFFFF // 4503599627370495
  0xabcdef123456  // 188900967593046
  0XA             // 10
  ```

<!-- ### Exponentiation -->


**Exponentiation**

  <!-- ```js-nolint -->


  ```js
  0e-5   // 0
  0e+5   // 0
  5e1    // 50
  175e-2 // 1.75
  1e3    // 1000
  1e-3   // 0.001
  1E3    // 1000
  ```

<!-- ### Numeric separators -->


**Numeric separators**

  For all literal syntaxes shown above, an underscore (`_`) can be inserted between digits to improve readability.

  <!-- ```js-nolint -->


  ```js
  1_000_000_000_000
  1_050.95
  0b1010_0001_1000_0101
  0o2_2_5_6
  0xA0_B0_C0
  1_000_000_000_000_000_000_000n
  ```

  See the [lexical grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals){:target="_blank"} reference for more details about number literals.

<!-- ## Number object -->


**Number object**

  The built-in [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number){:target="_blank"} object has properties for numerical constants, such as maximum value, not-a-number, and infinity. You cannot change the values of these properties and you use them as follows:

  ```js
  const biggestNum = Number.MAX_VALUE;
  const smallestNum = Number.MIN_VALUE;
  const infiniteNum = Number.POSITIVE_INFINITY;
  const negInfiniteNum = Number.NEGATIVE_INFINITY;
  const notANum = Number.NaN;
  ```

  You always refer to a property of the predefined `Number` object as shown above, and not as a property of a `Number` object you create yourself.

  The following table summarizes the `Number` object's properties.

  | Property                               | Description                                                                                                                                |
  | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
  | [Number.MAX_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE){:target="_blank"}         | The largest positive representable number (`1.7976931348623157e+308`)                                                                      |
  | [Number.MIN_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE){:target="_blank"}         | The smallest positive representable number (`5e-324`)                                                                                      |
  | [Number.NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN){:target="_blank"}               | Special "not a number" value                                                                                                               |
  | [Number.NEGATIVE_INFINITY](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY){:target="_blank"} | Special negative infinite value; returned on overflow                                                                                      |
  | [Number.POSITIVE_INFINITY](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY){:target="_blank"} | Special positive infinite value; returned on overflow                                                                                      |
  | [Number.EPSILON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON){:target="_blank"}           | Difference between `1` and the smallest value greater than `1` that can be represented as a [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number){:target="_blank"} (`2.220446049250313e-16`) |
  | [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER){:target="_blank"}  | Minimum safe integer in JavaScript (−2^53 + 1, or `−9007199254740991`)                                                                     |
  | [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER){:target="_blank"}  | Maximum safe integer in JavaScript (+2^53 − 1, or `+9007199254740991`)                                                                     |



  | Method                               | Description                                                                                                                           |
  | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
  | [Number.parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat){:target="_blank"}    | Parses a string argument and returns a floating point number. Same as the global [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat()){:target="_blank"} function.                 |
  | [Number.parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt){:target="_blank"}      | Parses a string argument and returns an integer of the specified radix or base. Same as the global [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt()){:target="_blank"} function. |
  | [Number.isFinite()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite){:target="_blank"}      | Determines whether the passed value is a finite number.                                                                               |
  | [Number.isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger){:target="_blank"}     | Determines whether the passed value is an integer.                                                                                    |
  | [Number.isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN){:target="_blank"}         | Determines whether the passed value is [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN){:target="_blank"}. More robust version of the original global [isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN()){:target="_blank"}.           |
  | [Number.isSafeInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger){:target="_blank"} | Determines whether the provided value is a number that is a _safe integer_.                                                           |



  The `Number` prototype provides methods for retrieving information from `Number` objects in various formats. The following table summarizes the methods of `Number.prototype`.

  | Method                                                | Description                                                                                |
  | ----------------------------------------------------- | ------------------------------------------------------------------------------------------ |
  | [toExponential()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Number/toExponential){:target="_blank"} | Returns a string representing the number in exponential notation.                          |
  | [toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Number/toFixed){:target="_blank"}             | Returns a string representing the number in fixed-point notation.                          |
  | [toPrecision()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Number/toPrecision){:target="_blank"}     | Returns a string representing the number to a specified precision in fixed-point notation. |



<!-- ## Math object -->


**Math object**

  The built-in [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math){:target="_blank"} object has properties and methods for mathematical constants and functions. For example, the `Math` object's `PI` property has the value of pi (3.141…), which you would use in an application as

  ```js
  Math.PI;
  ```

  Similarly, standard mathematical functions are methods of `Math`. These include trigonometric, logarithmic, exponential, and other functions. For example, if you want to use the trigonometric function sine, you would write

  ```js
  Math.sin(1.56);
  ```

  Note that all trigonometric methods of `Math` take arguments in radians.

  The following table summarizes the `Math` object's methods.

  <table class="standard-table">
    <caption>
      Methods of
      <code>Math</code>
    </caption>
    <thead>
      <tr>
        <th scope="col">Method</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs" target="_blank">abs()</a></td>
        <td>Absolute value</td>
      </tr>
      <tr>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin" target="_blank">sin()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos" target="_blank">cos()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan" target="_blank">tan()</a>
        </td>
        <td>Standard trigonometric functions; with the argument in radians.</td>
      </tr>
      <tr>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin" target="_blank">asin()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos" target="_blank">acos()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan" target="_blank">atan()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2" target="_blank">atan2()</a>
        </td>
        <td>Inverse trigonometric functions; return values in radians.</td>
      </tr>
      <tr>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh" target="_blank">sinh()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh" target="_blank">cosh()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh" target="_blank">tanh()</a>
        </td>
        <td>Hyperbolic functions; argument in hyperbolic angle.</td>
      </tr>
      <tr>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh" target="_blank">asinh()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh" target="_blank">acosh()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh" target="_blank">atanh()</a>
        </td>
        <td>Inverse hyperbolic functions; return values in hyperbolic angle.</td>
      </tr>
      <tr>
        <td>
          <p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow" target="_blank">pow()</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/exp" target="_blank">exp()</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1" target="_blank">expm1()</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log" target="_blank">log()</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10" target="_blank">log10()</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p" target="_blank">log1p()</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2" target="_blank">log2()</a>
          </p>
        </td>
        <td>Exponential and logarithmic functions.</td>
      </tr>
      <tr>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" target="_blank">floor()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil" target="_blank">ceil()</a>
        </td>
        <td>
          Returns the largest/smallest integer less/greater than or equal to an
          argument.
        </td>
      </tr>
      <tr>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min" target="_blank">min()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max" target="_blank">max()</a>
        </td>
        <td>
          Returns the minimum or maximum (respectively) value of a comma separated
          list of numbers as arguments.
        </td>
      </tr>
      <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank">random()</a></td>
        <td>Returns a random number between 0 and 1.</td>
      </tr>
      <tr>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round" target="_blank">round()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround" target="_blank">fround()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc" target="_blank">trunc()</a>,
        </td>
        <td>Rounding and truncation functions.</td>
      </tr>
      <tr>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt" target="_blank">sqrt()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt" target="_blank">cbrt()</a>,
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot" target="_blank">hypot()</a>
        </td>
        <td>
          Square root, cube root, Square root of the sum of square arguments.
        </td>
      </tr>
      <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign" target="_blank">sign()</a></td>
        <td>
          The sign of a number, indicating whether the number is positive,
          negative or zero.
        </td>
      </tr>
      <tr>
        <td>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32" target="_blank">clz32()</a>
          <br/>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul" target="_blank">imul()</a>
        </td>
        <td>
          Number of leading zero bits in the 32-bit binary representation.<br />The
          result of the C-like 32-bit multiplication of the two arguments.
        </td>
      </tr>
    </tbody>
  </table>



  Unlike many other objects, you never create a `Math` object of your own. You always use the built-in `Math` object.

<!-- ## BigInts -->


**BigInts**

  One shortcoming of number values is they only have 64 bits. In practice, due to using IEEE 754 encoding, they cannot represent any integer larger than [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER){:target="_blank"} (which is 2<sup>53</sup> - 1) accurately. To solve the need of encoding binary data and to interoperate with other languages that offer wide integers like `i64` (64-bit integers) and `i128` (128-bit integers), JavaScript also offers another data type to represent _arbitrarily large integers_: [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt){:target="_blank"}.

  A BigInt can be defined as an integer literal suffixed by `n`:

  ```js
  const b1 = 123n;
  // Can be arbitrarily large.
  const b2 = -1234567890987654321n;
  ```

  BigInts can also be constructed from number values or string values using the [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt){:target="_blank"} constructor.

  ```js
  const b1 = BigInt(123);
  // Using a string prevents loss of precision, since long number
  // literals don't represent what they seem like.
  const b2 = BigInt("-1234567890987654321");
  ```

  Conceptually, a BigInt is just an arbitrarily long sequence of bits which encodes an integer. You can safely do any arithmetic operations without losing precision or over-/underflowing.

  ```js
  const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
  const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
  ```

  Compared to numbers, BigInt values yield higher precision when representing large _integers_; however, they cannot represent _floating-point numbers_. For example, division would round to zero:

  ```js
  const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt
  ```

  `Math` functions cannot be used on BigInt values; they only work with numbers.

  Choosing between BigInt and number depends on your use-case and your input's range. The precision of numbers should be able to accommodate most day-to-day tasks already, and BigInts are most suitable for handling binary data.

  Read more about what you can do with BigInt values in the [Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators){:target="_blank"} section, or the [BigInt reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt){:target="_blank"}.

<!-- ## Strings -->


**Strings**

  JavaScript's [String](https://developer.mozilla.org/en-US/docs/Glossary/String){:target="_blank"} type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values (UTF-16 code units). Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it. You can create strings using string literals or string objects.

<!-- ### String literals -->


**String literals**

  You can declare strings in source code using either single or double quotes:

  <!-- ```js-nolint -->


  ```js
  'foo'
  "bar"
  ```

  Within a string literal, most characters can be entered literally. The only exceptions are the backslash (`\`, which starts an escape sequence), the quote character being used to enclose the string, which terminates the string, and the newline character, which is a syntax error if not preceded by a backslash.

  More advanced strings can be created using escape sequences:

<!-- #### Hexadecimal escape sequences -->


**Hexadecimal escape sequences**

  The number after \x is interpreted as a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal){:target="_blank"} number.

  <!-- ```js-nolint -->


  ```js
  "\xA9" // "©"
  ```

<!-- #### Unicode escape sequences -->


**Unicode escape sequences**

  The Unicode escape sequences require at least four hexadecimal digits following `\u`.

  <!-- ```js-nolint -->


  ```js
  "\u00A9" // "©"
  ```

<!-- #### Unicode code point escapes -->


**Unicode code point escapes**

  With Unicode code point escapes, any character can be escaped using hexadecimal numbers so that it is possible to use Unicode code points up to `0x10FFFF`. With the four-digit Unicode escapes it is often necessary to write the surrogate halves separately to achieve the same result.

  See also [String.fromCodePoint()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint){:target="_blank"} or [String.prototype.codePointAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt){:target="_blank"}.

  <!-- ```js-nolint -->


  ```js
  "\u{2F804}"

  // the same with simple Unicode escapes
  "\uD87E\uDC04"
  ```

<!-- ## String object -->


**String object**

  You can call methods directly on a string value:

  ```js
  console.log("hello".toUpperCase()); // HELLO
  ```

  [&#9658; Live coding](#flems-enable)

  The following methods are available on [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String){:target="_blank"} values:

  - Query: get the character or character code at a particular string index. Methods include [at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at){:target="_blank"}, [charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt){:target="_blank"}, [charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt){:target="_blank"}, and [codePointAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt){:target="_blank"}.
  - Search: get information about a substring that conforms to a pattern, or test if a particular substring exists. Methods include [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf){:target="_blank"}, [lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf){:target="_blank"}, [startsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith){:target="_blank"}, [endsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith){:target="_blank"}, [includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes){:target="_blank"}, [match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match){:target="_blank"}, [matchAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll){:target="_blank"}, and [search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search){:target="_blank"}
  - Composition: combine strings into a longer string. Methods include [padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart){:target="_blank"}, [padEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd){:target="_blank"}, [concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat){:target="_blank"}, and [repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat){:target="_blank"}.
  - Decomposition: break a string into smaller strings. Methods include [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split){:target="_blank"}, [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice){:target="_blank"}, [substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring){:target="_blank"}, [substr()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr){:target="_blank"}, [trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim){:target="_blank"}, [trimStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart){:target="_blank"}, and [trimEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd){:target="_blank"}.
  - Transformation: return a new string based on the current string's content. Methods include [toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase){:target="_blank"}, [toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase){:target="_blank"}, [toLocaleLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase){:target="_blank"}, [toLocaleUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase){:target="_blank"}, [normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize){:target="_blank"}, and [toWellFormed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toWellFormed){:target="_blank"}.

  When working with strings, there are two other objects that provide important functionality for string manipulation: [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp){:target="_blank"} and [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl){:target="_blank"}. They are introduced in [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions){:target="_blank"} and [internationalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Internationalization){:target="_blank"} respectively.

<!-- ## Template literals -->


**Template literals**

  [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals){:target="_blank"} are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

  Template literals are enclosed by backtick ([grave accent](https://en.wikipedia.org/wiki/Grave_accent)){:target="_blank"} characters (`` ` ``) instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (`${expression}`).

<!-- ### Multi-lines -->


**Multi-lines**

  Any new line characters inserted in the source are part of the template literal. Using normal strings, you would have to use the following syntax in order to get multi-line strings:

  ```js
  console.log(
    "string text line 1\n\
  string text line 2",
  );
  // "string text line 1
  // string text line 2"
  ```

  To get the same effect with multi-line strings, you can now write:

  ```js
  console.log(`string text line 1
  string text line 2`);
  // "string text line 1
  // string text line 2"
  ```

<!-- ### Embedded expressions -->


**Embedded expressions**

  In order to embed expressions within normal strings, you would use the following syntax:

  ```js
  const five = 5;
  const ten = 10;
  console.log(
    "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
  );
  // "Fifteen is 15 and not 20."
  ```

  Now, with template literals, you are able to make use of the syntactic sugar making substitutions like this more readable:

  ```js
  const five = 5;
  const ten = 10;
  console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
  // "Fifteen is 15 and not 20."
  ```

  For more information, read about [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals){:target="_blank"} in the [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference){:target="_blank"}.

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 08 - Day 4 | JavaScript - Representing dates & times -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 08 - Day 4</span> | JavaScript - Representing dates & times</h2>
  </summary>

<!-- Schedule -->

### Study Plan 

<!-- ## Date object -->


**Date object**

JavaScript does not have a date data type. However, you can use the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date){:target="_blank"} object and its methods to work with dates and times in your applications. The `Date` object has a large number of methods for setting, getting, and manipulating dates. It does not have any properties.

JavaScript handles dates similarly to Java. The two languages have many of the same date methods, and both languages store dates as the number of milliseconds since midnight at the beginning of January 1, 1970, UTC, with a Unix Timestamp being the number of seconds since the same instant. The instant at the midnight at the beginning of January 1, 1970, UTC is called the [epoch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date){:target="_blank"}.

The `Date` object range is -100,000,000 days to 100,000,000 days relative to the epoch.

To create a `Date` object:

```js
const dateObjectName = new Date([parameters]);
```

where `dateObjectName` is the name of the `Date` object being created; it can be a new object or a property of an existing object.

Calling `Date` without the `new` keyword returns a string representing the current date and time.

The `parameters` in the preceding syntax can be any of the following:

- Nothing: creates today's date and time. For example, `today = new Date();`.
- A string representing a date, in many different forms. The exact forms supported differ among engines, but the following form is always supported: `YYYY-MM-DDTHH:mm:ss.sssZ`. For example, `xmas95 = new Date("1995-12-25")`. If you omit hours, minutes, or seconds, the value will be set to zero.
- A set of integer values for year, month, and day. For example, `xmas95 = new Date(1995, 11, 25)`.
- A set of integer values for year, month, day, hour, minute, and seconds. For example, `xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

<!-- ### Methods of the Date object -->


**Methods of the Date object**

The `Date` object methods for handling dates and times fall into these broad categories:

- "set" methods, for setting date and time values in `Date` objects.
- "get" methods, for getting date and time values from `Date` objects.
- "to" methods, for returning string values from `Date` objects.
- parse and UTC methods, for parsing `Date` strings.

With the "get" and "set" methods you can get and set seconds, minutes, hours, day of the month, day of the week, months, and years separately. There is a `getDay` method that returns the day of the week, but no corresponding `setDay` method, because the day of the week is set automatically. These methods use integers to represent these values as follows:

- Seconds and minutes: 0 to 59
- Hours: 0 to 23
- Day: 0 (Sunday) to 6 (Saturday)
- Date: 1 to 31 (day of the month)
- Months: 0 (January) to 11 (December)
- Year: years since 1900

For example, suppose you define the following date:

```js
const xmas95 = new Date("1995-12-25");
```

Then `xmas95.getMonth()` returns 11, and `xmas95.getFullYear()` returns 1995.

The `getTime` and `setTime` methods are useful for comparing dates. The `getTime` method returns the number of milliseconds since the epoch for a `Date` object.

For example, the following code displays the number of days left in the current year:

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year
```

[&#9658; Live coding](#flems-enable)

This example creates a `Date` object named `today` that contains today's date. It then creates a `Date` object named `endYear` and sets the year to the current year. Then, using the number of milliseconds per day, it computes the number of days between `today` and `endYear`, using `getTime` and rounding to a whole number of days.

The `parse` method is useful for assigning values from date strings to existing `Date` objects. For example, the following code uses `parse` and `setTime` to assign a date value to the `ipoDate` object:

```js
const ipoDate = new Date();
ipoDate.setTime(Date.parse("Aug 9, 1995"));
```

<!-- ### Example -->


**Example**

In the following example, the function `JSClock()` returns the time in the format of a digital clock.

Click the `Live coding` button and try to use the `JSClock` function along
with the built-in `setInterval` function to log the time every second.

```js
function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
```

[&#9658; Live coding](#flems-enable)

The `JSClock` function first creates a new `Date` object called `time`; since no arguments are given, time is created with the current date and time. Then calls to the `getHours`, `getMinutes`, and `getSeconds` methods assign the value of the current hour, minute, and second to `hour`, `minute`, and `second`.

The following statements build a string value based on the time. The first statement creates a variable `temp`. Its value is `hour % 12`, which is `hour` in the 12-hour system. Then, if the hour is `0`, it gets re-assigned to `12`, so that midnights and noons are displayed as `12:00` instead of `0:00`.

The next statement appends a `minute` value to `temp`. If the value of `minute` is less than 10, the conditional expression adds a string with a preceding zero; otherwise it adds a string with a demarcating colon. Then a statement appends a seconds value to `temp` in the same way.

Finally, a conditional expression appends "P.M." to `temp` if `hour` is 12 or greater; otherwise, it appends "A.M." to `temp`.

<!-- The following sections were appended from: https://github.com/in-tech-gration/content/blob/main/files/en-us/web/javascript/reference/global_objects/date/index.md -->



<!-- ### Several ways to create a Date object -->


**Several ways to create a Date object**

The following examples show several ways to create JavaScript dates:

<!-- > Creating a date from a string has a lot of behavior inconsistencies. See [date time string format](#date_time_string_format) for caveats on using different formats. -->



```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // passing epoch timestamp
```

Also, check out [Date Time String Format](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format){:target="_blank"}.

<!-- ### Calculating elapsed time -->


**Calculating elapsed time**

The following examples show how to determine the elapsed time between two JavaScript dates in milliseconds.

Due to the differing lengths of days (due to daylight saving changeover), months, and years, expressing elapsed time in units greater than hours, minutes, and seconds requires addressing a number of issues, and should be thoroughly researched before being attempted.

**Using Date objects:**

```js
const start = Date.now();

// The event to time goes here:
doSomethingForALongTime();
const end = Date.now();
const elapsed = end - start; // elapsed time in milliseconds
```

**Using built-in methods:**

```js
const start = new Date();

// The event to time goes here:
doSomethingForALongTime();
const end = new Date();
const elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds
```

**To test a function and get back its return:**

```js
function printElapsedTime(testFn) {
  const startTime = Date.now();
  const result = testFn();
  const endTime = Date.now();

  console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
  return result;
}

function yourFunction(){
  // Write some slow code in here (for loop, etc.)
}

const yourFunctionReturn = printElapsedTime(yourFunction);
```

[&#9658; Live coding](#flems-enable)

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 08 - Day 5 | JavaScript - Intro to Arrays -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 08 - Day 5</span> | JavaScript - Intro to Arrays</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

#### Intro to Arrays



  ![](./assets/flat-design-devops-illustration-3d.jpg)

  [Watch **CS Discoveries: Introduction to Arrays**](https://www.youtube.com/watch?v=seBDTeZmb-k){:target="_blank"}

  <!-- Objects are unordered collections of data using keys and values. Arrays, in contrast, are **ordered collections of data**. If you put something in an array, it has an order. For example, you might a list of the days of the week. -->



  Arrays, in JavaScript, are **ordered collections of data**. If you put something in an array, it has an order. For example, you might a list of the days of the week.

  ```javascript
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[1]);
  console.log(daysOfTheWeek[6]);
  ```

  You first can see how we declare an array, using `[ ]`. Inside of an array, you can store anything you can store in a variable. You can have an array of numbers, an array of strings, an array of objects, an array of arrays, an array of arrays of arrays, etc.

  You can also see above how we access individual elements in an array: we use square brackets again and then we reference the number that we want to access. Again, remember, that the numbering starts at 0. So the first element is index 0.

  Arrays also have many methods (another word for functions that live on an object) and properties (another word for key/value pairs) that live on them. Let's see some of those:

  ```javascript
  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
  console.log(primeNumbers.length);
  console.log(primeNumbers.join(" | "));
  ```

  `primeNumbers.length` gives you back a number that is how long the array is. In this case there are eight elements in the array so it gives us back `8`. `primeNumbers.join(" | "))` takes your whole array and makes it into one string. The `" | "` parameter I'm passing is what I want to be put between each element, so you end up with the string `"1 | 2 | 3 | 5 | 7 | 11 | 13 | 17"`.

  So what if I want to add an element to the array after I've created it? Use `push`!

  ```javascript
  const courses = [
    { teacher: "Will Sentance", course: "JavaScript: The Hard Parts" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React" },
    { teacher: "Steve Kinney", course: "Build Your Own Programming Language" },
    { teacher: "Scott Moss", course: "Intro to Node.js" },
  ];

  courses.push({ teacher: "Jen Kramer", course: "Getting Started with CSS" });

  console.log(courses);

  courses[2] = { teacher: "Brian Holt", course: "Complete Intro to Databases" };

  console.log(courses);
  ```

  [&#9658; Live coding](#flems-enable)

  The first thing we do is add an element to the end using the push function that arrays have. It "pushes" the element on the end.

  Below that, we're overriding index 2 with a new course. This will throw away what was there before and set it to be what we've set it to be.

  Okay, now, given that, what if we wanted to `console.log` everything in the array? Do you already have all the tools to do that? Let's see to do it.

  ```javascript
  const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
  ];

  // method 1
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }

  // method 2
  cities.forEach(function (city) {
    console.log(city);
  });
  ```

  [&#9658; Live coding](#flems-enable)

  The first way, using a for loop, is using that `i` control variable which gets incremented each loop. We use that `i` to access each item in the array on each iteration of the loop. We have the loop to stop when `i` gets equal to the `length` of cities. Very useful pattern. You'll see it a lot.

  The second way is using a function that arrays have called `forEach`. This `forEach` method takes in a function and that function will be called once on each item of the array. It will pass that item into the function, which is what `city` is in this situation. Both are useful patterns to know. You'll use both frequently. While you're getting started, just use the one you feel comfortable with. They have different things that make them preferable in different situations but usually you can use either. Method 2 may be a bit more advanced but I don't think you should be scared of it. For now prefer method 1. I just wanted you to see method 2.

<!-- Summary -->

### Exercises

#### Task 1: Declaring JavaScript Arrays



  In this task, we want you to load the [declaring-arrays.js](./exercises/declaring-arrays.js){:target="_blank"} from an HTML named `declaring-arrays.html` and complete the challenges found inside.

#### Task 2: Indexing JavaScript Arrays



  In this task, we want you to load the [indexing-arrays.js](./exercises/indexing-arrays.js){:target="_blank"} from an HTML named `indexing-arrays.html` and complete the challenges found inside.

#### Task 3: Modifying JavaScript Arrays



  In this task, we want you to load the [modifying-arrays.js](./exercises/modifying-arrays.js){:target="_blank"} from an HTML named `modifying-arrays.html` and complete the challenges found inside.

#### Task 4: Properties and Methods of JavaScript Arrays



  In this task, we want you to load the [properties-and-methods-of-arrays.js](./exercises/properties-and-methods-of-arrays.js){:target="_blank"} from an HTML named `properties-and-methods-of-arrays.html` and complete the challenges found inside.

#### Task 5: Test your skills: JavaScript Arrays



  In this task, we want you to load the [arrays-skills.js](./exercises/arrays-skills.js){:target="_blank"} from an HTML named `arrays-skills.html` and complete the challenges found inside.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week08/progress/progress.draft.w08.d05.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

### Sources and Attributions

  **Content is based on the following sources:**

  - [Arrays](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/K-arrays.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/K-arrays.md){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/btholt/complete-intro-to-web-dev-v3){:target="_blank"}!

  **Exercises are based on the following sources:**

  - [TeachMeJavaScriptLikeIm5 declaring-arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/declaring-arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/declaring-arrays.js){:target="_blank"}

  - [TeachMeJavaScriptLikeIm5 indexing-arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/indexing-arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/indexing-arrays.js){:target="_blank"}

  - [TeachMeJavaScriptLikeIm5 modifying-arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/modifying-arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/modifying-arrays.js){:target="_blank"}

  - [TeachMeJavaScriptLikeIm5 properties_and_methods_of_arrays](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/3-arrays/properties_and_methods_of_arrays.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/3-arrays/properties_and_methods_of_arrays.js){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5){:target="_blank"}!
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!



---

<!-- COMMENTS: -->
<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>