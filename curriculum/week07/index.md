---
title: Week 07 | JavaScript Core 1
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

<hr class="mb-0">

<h1 id="{{ Week 07-JavaScript Core 1 | slugify }}">
  <span class="week-prefix">Week 07 |</span> JavaScript Core 1
</h1>

<img src="assets/header--andrew-neel-cckf4TsHAuw-unsplash.jpg" />

<div class="week-controls">

  {% assign week_num = 07 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 07 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 24/11/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num < 36 %}

      {% assign next_week_num = 07 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

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

<!-- Week 07 - Day 1 | JavaScript - Grammar and types -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 07 - Day 1</span> | JavaScript - Grammar and types</h2>
  </summary>

<!-- Schedule -->

### Study Plan

This chapter discusses JavaScript's basic grammar, variable declarations, data types and literals.

**Basics**

JavaScript borrows most of its syntax from Java, C, and C++, but it has also been influenced by Awk, Perl, and Python.

JavaScript is **case-sensitive** and uses the **Unicode** character set. For example, the word Früh (which means "early" in German) could be used as a variable name.

```js
const Früh = "foobar";
```

But, the variable `früh` is not the same as `Früh` because JavaScript is case sensitive.

In JavaScript, instructions are called [statements](https://developer.mozilla.org/en-US/docs/Glossary/Statement){:target="_blank"} and are separated by semicolons (;).

A semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired, then they _must_ be separated by semicolons.

> ECMAScript also has rules for automatic insertion of semicolons ([ASI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion){:target="_blank"}) to end statements. (For more information, see the detailed reference about JavaScript's [lexical grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar){:target="_blank"}.)



It is considered best practice, however, to always write a semicolon after a statement, even when it is not strictly needed. This practice reduces the chances of bugs getting into the code.

The source text of JavaScript script gets scanned from left to right, and is converted into a sequence of input elements which are _tokens_, _control characters_, _line terminators_, _comments_, or [whitespace](https://developer.mozilla.org/en-US/docs/Glossary/Whitespace){:target="_blank"}. (Spaces, tabs, and newline characters are considered whitespace.)

**Comments**

The syntax of **comments** is the same as in C++ and in many other languages:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

You can't nest block comments. This often happens when you accidentally include a `*/` sequence in your comment, which will terminate the comment.

<!-- ```js-nolint example-bad -->


```js
/* You can't, however, /* nest comments */ SyntaxError */
```

In this case, you need to break up the `*/` pattern. For example, by inserting a backslash:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Comments behave like whitespace, and are discarded during script execution.

> You might also see a third type of comment syntax at the start of some JavaScript files, which looks something like this: `#!/usr/bin/env node`.
>
> This is called **hashbang comment** syntax, and is a special comment used to specify the path to a particular JavaScript engine that should execute the script. See [Hashbang comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments){:target="_blank"} for more details.



**Declarations**

JavaScript has three kinds of variable declarations.

- [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var){:target="_blank"}
  - : Declares a variable, optionally initializing it to a value.
- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let){:target="_blank"}
  - : Declares a block-scoped, local variable, optionally initializing it to a value.
- [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const){:target="_blank"}
  - : Declares a block-scoped, read-only named constant.

**Variables**

You use variables as symbolic names for values in your application. The names of variables, called [identifiers](https://developer.mozilla.org/en-US/docs/Glossary/Identifier){:target="_blank"}, conform to certain rules.

A JavaScript identifier usually starts with a letter, underscore (`_`), or dollar sign (`). Subsequent characters can also be digits (`0` – `9`). Because JavaScript is case sensitive, letters include the characters `A` through `Z` (uppercase) as well as `a` through `z` (lowercase).

You can use most Unicode letters such as `å` and `ü` in identifiers. (For more details, see the [lexical grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers){:target="_blank"} reference.) You can also use [Unicode escape sequences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals){:target="_blank"} to represent characters in identifiers.

Some examples of legal names are `Number_hits`, `temp99`, `$credit`, and `_name`.

**Declaring variables**

You can declare a variable in two ways:

- With the keyword [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var){:target="_blank"}. For example, `var x = 42`. This syntax can be used to declare both **local** and **global** variables, depending on the _execution context_.
- With the keyword [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const){:target="_blank"} or [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let){:target="_blank"}. For example, `let y = 13`. This syntax can be used to declare a block-scope local variable. (See [Variable scope](#variable_scope) below.)

You can declare variables to unpack values using the [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring){:target="_blank"} syntax. For example, `const { bar } = foo`. This will create a variable named `bar` and assign to it the value corresponding to the key of the same name from our object `foo`.

Variables should always be declared before they are used. JavaScript used to allow assigning to undeclared variables, which creates an **[undeclared global](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#description){:target="_blank"}** variable. This is an error in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables){:target="_blank"} and should be avoided altogether.

**Declaration and initialization**

In a statement like `let x = 42`, the `let x` part is called a _declaration_, and the `= 42` part is called an _initializer_. The declaration allows the variable to be accessed later in code without throwing a [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError){:target="_blank"}, while the initializer assigns a value to the variable. In `var` and `let` declarations, the initializer is optional. If a variable is declared without an initializer, it is assigned the value [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined){:target="_blank"}.

```js
let x;
console.log(x); // logs "undefined"
```

In essence, `let x = 42` is equivalent to `let x; x = 42`.

`const` declarations always need an initializer, because they forbid any kind of assignment after declaration, and implicitly initializing it with `undefined` is likely a programmer mistake.

<!-- ```js-nolint example-bad -->


```js
const x; // SyntaxError: Missing initializer in const declaration
```

**Variable scope**

A variable may belong to one of the following [scopes](https://developer.mozilla.org/en-US/docs/Glossary/Scope){:target="_blank"}:

- Global scope: The default scope for all code running in script mode.
- Module scope: The scope for code running in module mode.
- Function scope: The scope created with a [function](https://developer.mozilla.org/en-US/docs/Glossary/Function){:target="_blank"}.

In addition, variables declared with [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let){:target="_blank"} or [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const){:target="_blank"} can belong to an additional scope:

- Block scope: The scope created with a pair of curly braces (a [block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block){:target="_blank"}){:target="_blank"}.

When you declare a variable outside of any function, it is called a _global_ variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a _local_ variable, because it is available only within that function.

`let` and `const` declarations can also be scoped to the [block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement){:target="_blank"} that they are declared in.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

However, variables created with `var` are not block-scoped, but only local to the _function (or global scope)_ that the block resides within.

For example, the following code will log `5`, because the scope of `x` is the global context (or the function context if the code is part of a function). The scope of `x` is not limited to the immediate `if` statement block.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

**Variable hoisting**

`var`-declared variables are [hoisted](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting){:target="_blank"}, meaning you can refer to the variable anywhere in its scope, even if its declaration isn't reached yet. You can see `var` declarations as being "lifted" to the top of its function or global scope. However, if you access a variable before it's declared, the value is always `undefined`, because only its _declaration_ and _default initialization (with `undefined`)_ is hoisted, but not its _value assignment_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

The above examples will be interpreted the same as:

```js
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();
```

Because of hoisting, all `var` statements in a function should be placed as near to the top of the function as possible. This best practice increases the clarity of the code.

Whether `let` and `const` are hoisted is a matter of definition debate. Referencing the variable in the block before the variable declaration always results in a [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError){:target="_blank"}, because the variable is in a "[temporal dead zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz){:target="_blank"}" from the start of the block until the declaration is processed.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Unlike `var` declarations, which only hoist the declaration but not its value, [function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_hoisting){:target="_blank"} are hoisted entirely — you can safely call the function anywhere in its scope. See the [hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting){:target="_blank"} glossary entry for more discussion.

**Global variables**

Global variables are in fact properties of the _global object_.

In web pages, the global object is [window](https://developer.mozilla.org/en-US/docs/Web/API/){:target="_blank"}, so you can read and set global variables using the `window.variable` syntax. In all environments, the [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis){:target="_blank"} variable (which itself is a global variable) may be used to read and set global variables. This is to provide a consistent interface among various JavaScript runtimes.

Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the `window` or `frame` name. For example, if a variable called `phoneNumber` is declared in a document, you can refer to this variable from an `iframe` as `parent.phoneNumber`.

**Constants**

You can create a read-only, named constant with the [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const){:target="_blank"} keyword. The syntax of a constant identifier is the same as any variable identifier: it must start with a letter, underscore, or dollar sign (`), and can contain alphabetic, numeric, or underscore characters.

```js
const PI = 3.14;
```

A constant cannot change value through assignment or be re-declared while the script is running. It must be initialized to a value. The scope rules for constants are the same as those for `let` block-scope variables.

You cannot declare a constant with the same name as a function or variable in the same scope. For example:

<!-- ```js-nolint example-bad -->


```js
// THIS WILL CAUSE AN ERROR
function f() {}
const f = 5;

// THIS WILL CAUSE AN ERROR TOO
function f() {
  const g = 5;
  var g;
}
```

However, `const` only prevents _re-assignments_, but doesn't prevent _mutations_. The properties of objects assigned to constants are not protected, so the following statement is executed without problems.

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

Also, the contents of an array are not protected, so the following statement is executed without problems.

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

**Data structures and types**

**Data types**

The latest ECMAScript standard defines eight data types:

- Seven data types that are [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive){:target="_blank"}:
  1. [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean){:target="_blank"}. `true` and `false`.
  2. [null](https://developer.mozilla.org/en-US/docs/Glossary/Null){:target="_blank"}. A special keyword denoting a null value. (Because JavaScript is case-sensitive, `null` is not the same as `Null`, `NULL`, or any other variant.)
  3. [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined){:target="_blank"}. A top-level property whose value is not defined.
  4. [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number){:target="_blank"}. An integer or floating point number. For example: `42` or `3.14159`.
  5. [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt){:target="_blank"}. An integer with arbitrary precision. For example: `9007199254740992n`.
  6. [String](https://developer.mozilla.org/en-US/docs/Glossary/String){:target="_blank"}. A sequence of characters that represent a text value. For example: `"Howdy"`.
  7. [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol){:target="_blank"}. A data type whose instances are unique and immutable.

- and [Object](https://developer.mozilla.org/en-US/docs/Glossary/Object){:target="_blank"}

Although these data types are relatively few, they enable you to perform useful operations with your applications. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions){:target="_blank"} are the other fundamental elements of the language. While functions are technically a kind of object, you can think of objects as named containers for values, and functions as procedures that your script can perform.

**Data type conversion**

JavaScript is a _dynamically typed_ language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

So, for example, you could define a variable as follows:

```js
let answer = 42;
```

And later, you could assign the same variable a string value, for example:

```js
answer = "Thanks for all the fish!";
```

Because JavaScript is dynamically typed, this assignment does not cause an error message.

**Numbers and the '+' operator**

In expressions involving numeric and string values with the `+` operator, JavaScript converts numeric values to strings. For example, consider the following statements:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

With all other operators, JavaScript does _not_ convert numeric values to strings. For example:

```js
"37" - 7; // 30
"37" * 7; // 259
```

**Converting strings to numbers**

In the case that a value representing a number is in memory as a string, there are methods for conversion.

- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt()){:target="_blank"}
- [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat()){:target="_blank"}
- [Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number()){:target="_blank"}

`parseInt` only returns whole numbers, so its use is diminished for decimals.

> [!NOTE]
> Additionally, a best practice for `parseInt` is to always include the _radix_ parameter. The radix parameter is used to specify which numerical system is to be used.



```js
parseInt("101", 2); // 5
```

An alternative method of retrieving a number from a string is with the `+` (unary plus) operator. This implicitly performs [number conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion){:target="_blank"}, which is the same process as the [Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number()){:target="_blank"} function.

<!-- ```js-nolint -->


```js
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 07 - Day 2 | JavaScript - Control Flow & Error Handling -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 07 - Day 2</span> | JavaScript - Control Flow & Error Handling</h2>
  </summary>

<!-- Schedule -->

### Study Plan

JavaScript supports a compact set of statements, specifically
control flow statements, that you can use to incorporate a great deal of interactivity
in your application. This chapter provides an overview of these statements.

The [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements){:target="_blank"}
contains exhaustive details about the statements in this chapter. The semicolon
(`;`) character is used to separate statements in JavaScript code.

Any JavaScript expression is also a statement.
See [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators){:target="_blank"}
for complete information about expressions.

**Block statement**

The most basic statement is a _block statement_, which is used to group
statements. The block is delimited by a pair of curly braces:

```js
{
  statement1;
  statement2;
  // …
  statementN;
}
```

**Example**

Block statements are commonly used with control flow statements (`if`,
`for`, `while`).

```js
let x = 0;
while (x < 10) {
  x++;
}
```

[&#9658; Live coding](#flems-enable)

Here, `{ x++; }` is the block statement.

> [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var){:target="_blank"}-declared variables are not block-scoped, but are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. For example:
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> This outputs `2` because the `var x` statement within the block is in the same scope as the `var x` statement before the block. (In C or Java, the equivalent code would have output `1`.)
>
> This scoping effect can be mitigated by using [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let){:target="_blank"} or [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const){:target="_blank"}.



**Conditional statements**

A conditional statement is a set of commands that executes if a specified condition is
true. JavaScript supports two conditional statements: `if...else` and
`switch`.

**if...else statement**

Use the `if` statement to execute a statement if a logical condition is
`true`. Use the optional `else` clause to execute a statement if
the condition is `false`.

An `if` statement looks like this:

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

Here, the `condition` can be any expression that evaluates to
`true` or `false`. (See [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description){:target="_blank"}
for an explanation of what evaluates to `true` and `false`.)

If `condition` evaluates to `true`,
`statement1` is executed. Otherwise,
`statement2` is executed. `statement1` and
`statement2` can be any statement, including further nested
`if` statements.

You can also compound the statements using `else if` to have multiple
conditions tested in sequence, as follows:

```js
if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else if (conditionN) {
  statementN;
} else {
  statementLast;
}
```

In the case of multiple conditions, only the first logical condition which evaluates to
`true` will be executed. To execute multiple statements, group them within a
block statement (`{ /* … */ }`).

**Best practice**

In general, it's good practice to always use block statements—_especially_ when
nesting `if` statements:

```js
if (condition) {
  // Statements for when condition is true
  // …
} else {
  // Statements for when condition is false
  // …
}
```

In general it's good practice to not have an `if...else` with an assignment like `x = y` as a condition:

<!-- ```js-nolint example-bad -->


```js
if (x = y) {
  // statements here
}
```

However, in the rare case you find yourself wanting to do something like that, the [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while){:target="_blank"} documentation has a [Using an assignment as a condition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition){:target="_blank"} section with guidance on a general best-practice syntax you should know about and follow.

**Falsy values**

The following values evaluate to `false` (also known as [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy){:target="_blank"} values):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- the empty string (`""`)

All other values—including all objects—evaluate to `true` when passed to a
conditional statement.

> Do not confuse the primitive boolean values
> `true` and `false` with the true and false values of the
> [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean){:target="_blank"} object!
>
> For example:
>
> ```js
> const b = new Boolean(false);
> if (b) {
>   // this condition evaluates to true
> }
> if (b == true) {
>   // this condition evaluates to false
> }
> ```



**Example**

In the following example, the function `checkData` returns `true`
if the number of characters in a `Text` object is three. Otherwise, it
displays an alert and returns `false`.

```js
function checkData() {
  if (document.form1.threeChar.value.length === 3) {
    return true;
  }
  alert(
    `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
  );
  return false;
}
```

**switch statement**

A `switch` statement allows a program to evaluate an expression and attempt
to match the expression's value to a `case` label. If a match is found, the
program executes the associated statement.

A `switch` statement looks like this:

```js
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
```

JavaScript evaluates the above switch statement as follows:

- The program first looks for a `case` clause with a label matching the
  value of expression and then transfers control to that clause, executing the
  associated statements.
- If no matching label is found, the program looks for the optional
  `default` clause:
  - If a `default` clause is found, the program transfers control to that
    clause, executing the associated statements.
  - If no `default` clause is found, the program resumes execution at the
    statement following the end of `switch`.
  - (By convention, the `default` clause is written as the last clause,
    but it does not need to be so.)

**break statements**

The optional `break` statement associated with each `case` clause
ensures that the program breaks out of `switch` once the matched statement is
executed, and then continues execution at the statement following `switch`.
If `break` is omitted, the program continues execution inside the
`switch` statement (and will execute statements under the next `case`, and so on).

**Example**

In the following example, if `fruitType` evaluates to
`"Bananas"`, the program matches the value with `case "Bananas"`
and executes the associated statement. When `break` is encountered, the
program exits the `switch` and continues execution from the statement
following `switch`. If `break` were omitted, the statement for
`case "Cherries"` would also be executed.

```js
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");
```

**Exception handling statements**

You can throw exceptions using the `throw` statement and handle them using
the `try...catch` statements.

- [`throw` statement](#throw_statement)
- [`try...catch` statement](#try...catch_statement)

**Exception types**

Just about any object can be thrown in JavaScript. Nevertheless, not all thrown objects
are created equal. While it is common to throw numbers or strings as errors, it is
frequently more effective to use one of the exception types specifically created for
this purpose:

- [ECMAScript exceptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types){:target="_blank"}
- [`DOMException`](https://developer.mozilla.org/en-US/docs/Web/API/DOMException){:target="_blank"}

**throw statement**

Use the `throw` statement to throw an exception. A `throw`
statement specifies the value to be thrown:

```js
throw expression;
```

You may throw any expression, not just expressions of a specific type. The following
code throws several exceptions of varying types:

```js
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString() {
    return "I'm an object!";
  },
};
```

**try...catch statement**

The `try...catch` statement marks a block of statements to try, and
specifies one or more responses should an exception be thrown. If an exception is
thrown, the `try...catch` statement catches it.

The `try...catch` statement consists of a `try` block, which
contains one or more statements, and a `catch` block, containing statements
that specify what to do if an exception is thrown in the `try` block.

In other words, you want the `try` block to succeed—but if it does not, you
want control to pass to the `catch` block. If any statement within the
`try` block (or in a function called from within the `try` block)
throws an exception, control _immediately_ shifts to the `catch`
block. If no exception is thrown in the `try` block, the `catch`
block is skipped. The `finally` block executes after the `try` and
`catch` blocks execute but before the statements following the
`try...catch` statement.

The following example uses a `try...catch` statement. The example calls a
function that retrieves a month name from an array based on the value passed to the
function. If the value does not correspond to a month number
(`1` – `12`), an exception is thrown with the value
`'Invalid month code'` and the statements in the `catch` block set the
`monthName` variable to `'unknown'`.

```js
function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  // prettier-ignore
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (!months[mo]) {
    throw new Error("Invalid month code"); // throw keyword is used here
  }
  return months[mo];
}

try {
  // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}
```

**The catch block**

You can use a `catch` block to handle all exceptions that may be generated
in the `try` block.

<!-- ```js-nolint -->


```js
catch (exception) {
  statements
}
```

The `catch` block specifies an identifier (`exception`
in the preceding syntax) that holds the value specified by the `throw`
statement. You can use this identifier to get information about the exception that was
thrown.

JavaScript creates this identifier when the `catch` block is entered. The
identifier lasts only for the duration of the `catch` block. Once the
`catch` block finishes executing, the identifier no longer exists.

For example, the following code throws an exception. When the exception occurs, control
transfers to the `catch` block.

```js
try {
  throw "myException"; // generates an exception
} catch (err) {
  // statements to handle any exceptions
  logMyErrors(err); // pass exception object to error handler
}
```

> When logging errors to the console inside
> a `catch` block, using `console.error()` rather than
> `console.log()` is advised for debugging. It formats the message as an
> error, and adds it to the list of error messages generated by the page.



**The finally block**

The `finally` block contains statements to be executed _after_ the
`try` and `catch` blocks execute. Additionally, the
`finally` block executes _before_ the code that follows the
`try...catch...finally` statement.

It is also important to note that the `finally` block will execute
_whether or not_ an exception is thrown. If an exception is thrown, however, the
statements in the `finally` block execute even if no `catch` block
handles the exception that was thrown.

You can use the `finally` block to make your script fail gracefully when an
exception occurs. For example, you may need to release a resource that your script has
tied up.

The following example opens a file and then executes statements that use the file.
(Server-side JavaScript allows you to access files.) If an exception is thrown while the
file is open, the `finally` block closes the file before the script fails.
Using `finally` here _ensures_ that the file is never left open, even
if an error occurs.

```js
openMyFile();
try {
  writeMyFile(theData); // This may throw an error
} catch (e) {
  handleError(e); // If an error occurred, handle it
} finally {
  closeMyFile(); // Always close the resource
}
```

If the `finally` block returns a value, this value becomes the return value
of the entire `try...catch...finally` production, regardless of any
`return` statements in the `try` and `catch` blocks:

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    // `f` exits here
    console.log(4); // not reachable
  }
  console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false
```

Overwriting of return values by the `finally` block also applies to
exceptions thrown or re-thrown inside of the `catch` block:

```js
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus"');
    // This throw statement is suspended until
    // finally block has completed
    throw e;
  } finally {
    return false; // overwrites the previous "throw"
    // `f` exits here
  }
}

try {
  console.log(f());
} catch (e) {
  // this is never reached!
  // while f() executes, the `finally` block returns false,
  // which overwrites the `throw` inside the above `catch`
  console.log('caught outer "bogus"');
}

// Logs:
// caught inner "bogus"
// false
```

**Nesting try...catch statements**

You can nest one or more `try...catch` statements.

If an inner `try` block does _not_ have a corresponding
`catch` block:

1. it _must_ contain a `finally` block, and
2. the enclosing `try...catch` statement's `catch` block is
   checked for a match.

For more information, see [nested try-blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks){:target="_blank"}
on the [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch){:target="_blank"}
reference page.

**Utilizing Error objects**

Depending on the type of error, you may be able to use the `name` and
`message` properties to get a more refined message.

The `name` property provides the general class of `Error` (such
as `DOMException` or `Error`), while `message`
generally provides a more succinct message than one would get by converting the error
object to a string.

If you are throwing your own exceptions, in order to take advantage of these properties
(such as if your `catch` block doesn't discriminate between your own
exceptions and system ones), you can use the `Error` constructor.

For example:

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("The message");
  }
  doSomethingToGetAJavaScriptError();
}

try {
  doSomethingErrorProne();
} catch (e) {
  // Now, we actually use `console.error()`
  console.error(e.name); // 'Error'
  console.error(e.message); // 'The message', or a JavaScript error message
}
```

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 07 - Day 3 | JavaScript - Loops and iteration -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 07 - Day 3</span> | JavaScript - Loops and iteration</h2>
  </summary>

<!-- Schedule -->

### Study Plan

Loops offer a quick and easy way to do something repeatedly. This
module introduces the different iteration statements available to JavaScript.

You can think of a loop as a computerized version of the game where you tell someone to
take _X_ steps in one direction, then _Y_ steps in another. For example,
the idea "Go five steps to the east" could be expressed this way as a loop:

```js
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

[&#9658; Live coding](#flems-enable)

There are many different kinds of loops, but they all essentially do the same thing:
they repeat an action some number of times. (Note that it's possible that number could
be zero!)

The various loop mechanisms offer different ways to determine the start and end points
of the loop. There are various situations that are more easily served by one type of
loop over the others.

The statements for loops provided in JavaScript are:

- [for statement](#for_statement)
- [do...while statement](#do...while_statement)
- [while statement](#while_statement)
- [labeled statement](#labeled_statement)
- [break statement](#break_statement)
- [continue statement](#continue_statement)
- [for...in statement](#for...in_statement)
- [for...of statement](#for...of_statement)

**for statement**

A [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for){:target="_blank"} loop repeats until a specified condition evaluates to false. The JavaScript `for` loop is similar to the Java and C `for` loop.

A `for` statement looks as follows:

<!-- ```js-nolint -->


```js
for (initialization; condition; afterthought)
  statement
```

When a `for` loop executes, the following occurs:

1. The initializing expression `initialization`, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
2. The `condition` expression is evaluated. If the value of `condition` is true, the loop statements execute. Otherwise, the `for` loop terminates. (If the `condition` expression is omitted entirely, the condition is assumed to be true.)
3. The `statement` executes. To execute multiple statements, use a [block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block){:target="_blank"} (`{ }`) to group those statements.
4. If present, the update expression `afterthought` is executed.
5. Control returns to Step 2.

**Example**

In the example below, the function contains a `for` statement that counts
the number of selected options in a scrolling list (a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select){:target="_blank"}
element that allows multiple selections).

```html
<form name="selectForm">
  <label for="musicTypes"
    >Choose some music types, then click the button below:</label
  >
  <select id="musicTypes" name="musicTypes" multiple>
    <option selected>R&amp;B</option>
    <option>Jazz</option>
    <option>Blues</option>
    <option>New Age</option>
    <option>Classical</option>
    <option>Opera</option>
  </select>
  <button id="btn" type="button">How many are selected?</button>
</form>
<script>
  function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes;
    alert(`You have selected ${countSelected(musicTypes)} option(s).`);
  });
</script>
```

[&#9658; Live coding](#flems-enable)

Here, the `for` statement declares the variable `i` and initializes it to `0`. It checks that `i` is less than the number of options in the `<select>` element, performs the succeeding `if` statement, and increments `i` by 1 after each pass through the loop.

**do...while statement**

The [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/do...while){:target="_blank"} statement repeats until a
specified condition evaluates to false.

A `do...while` statement looks as follows:

<!-- ```js-nolint -->


```js
do
  statement
while (condition);
```

`statement` is always executed once before the condition is
checked. (To execute multiple statements, use a block statement (`{ }`)
to group those statements.)

If `condition` is `true`, the statement executes again. At the
end of every execution, the condition is checked. When the condition is
`false`, execution stops, and control passes to the statement following
`do...while`.

**Example**

In the following example, the `do` loop iterates at least once and
reiterates until `i` is no longer less than `5`.

```js
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

[&#9658; Live coding](#flems-enable)

**while statement**

A [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while){:target="_blank"} statement executes its statements as long as a
specified condition evaluates to `true`. A `while` statement looks
as follows:

<!-- ```js-nolint -->


```js
while (condition)
  statement
```

If the `condition` becomes `false`,
`statement` within the loop stops executing and control passes to the
statement following the loop.

The condition test occurs _before_ `statement` in the loop is
executed. If the condition returns `true`, `statement` is executed
and the `condition` is tested again. If the condition returns
`false`, execution stops, and control is passed to the statement following
`while`.

To execute multiple statements, use a block statement (`{ }`) to group
those statements.

**Example 1**

The following `while` loop iterates as long as `n` is
less than `3`:

```js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

With each iteration, the loop increments `n` and adds that value to
`x`. Therefore, `x` and `n` take on the following
values:

- After the first pass: `n` = `1` and `x` =
  `1`
- After the second pass: `n` = `2` and `x` =
  `3`
- After the third pass: `n` = `3` and `x` =
  `6`

After completing the third pass, the condition `n < 3` is no longer
`true`, so the loop terminates.

**Example 2**

Avoid infinite loops. Make sure the condition in a loop eventually becomes
`false`—otherwise, the loop will never terminate! The statements in the
following `while` loop execute forever because the condition never becomes
`false`:

<!-- ```js example-bad -->


```js
// Infinite loops are bad!
while (true) {
  console.log("Hello, world!");
}
```

**labeled statement**

A [label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label){:target="_blank"} provides a statement with an identifier that
lets you refer to it elsewhere in your program. For example, you can use a label to
identify a loop, and then use the `break` or `continue` statements
to indicate whether a program should interrupt the loop or continue its execution.

The syntax of the labeled statement looks like the following:

<!-- ```js-nolint -->


```js
label:
  statement
```

The value of `label` may be any JavaScript identifier that is not a
reserved word. The `statement` that you identify with a label may be
any statement. For examples of using labeled statements, see the examples of `break` and `continue` below.

**break statement**

Use the [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break){:target="_blank"} statement to terminate a loop,
`switch`, or in conjunction with a labeled statement.

- When you use `break` without a label, it terminates the innermost
  enclosing `while`, `do-while`, `for`, or
  `switch` immediately and transfers control to the following statement.
- When you use `break` with a label, it terminates the specified labeled
  statement.

The syntax of the `break` statement looks like this:

<!-- ```js-nolint -->


```js
break;
break label;
```

1. The first form of the syntax terminates the innermost enclosing loop or `switch`.
2. The second form of the syntax terminates the specified enclosing labeled statement.

**Example 1**

The following example iterates through the elements in an array until it finds the
index of an element whose value is `theValue`:

```js
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
```

**Example 2: Breaking to a label**

```js
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

**continue statement**

The [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue){:target="_blank"} statement can be used to restart a
`while`, `do-while`, `for`, or `label`
statement.

- When you use `continue` without a label, it terminates the current
  iteration of the innermost enclosing `while`, `do-while`, or
  `for` statement and continues execution of the loop with the next
  iteration. In contrast to the `break` statement, `continue` does
  not terminate the execution of the loop entirely. In a `while` loop, it
  jumps back to the condition. In a `for` loop, it jumps to the
  `increment-expression`.
- When you use `continue` with a label, it applies to the looping statement
  identified with that label.

The syntax of the `continue` statement looks like the following:

<!-- ```js-nolint -->


```js
continue;
continue label;
```

**Example 1**

The following example shows a `while` loop with a `continue`
statement that executes when the value of `i` is `3`. Thus,
`n` takes on the values `1`, `3`, `7`, and
`12`.

```js
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
// Logs:
// 1 3 7 12
```

[&#9658; Live coding](#flems-enable)

If you comment out the `continue;`, the loop would run till the end and you would see `1,3,6,10,15`.

**Example 2**

A statement labeled `checkIandJ` contains a statement labeled
`checkJ`. If `continue` is encountered, the program
terminates the current iteration of `checkJ` and begins the next
iteration. Each time `continue` is encountered, `checkJ`
reiterates until its condition returns `false`. When `false` is
returned, the remainder of the `checkIandJ` statement is completed,
and `checkIandJ` reiterates until its condition returns
`false`. When `false` is returned, the program continues at the
statement following `checkIandJ`.

If `continue` had a label of `checkIandJ`, the program
would continue at the top of the `checkIandJ` statement.

```js
let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i);
  i += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}
```

[&#9658; Live coding](#flems-enable)

**for...in statement**

The [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in){:target="_blank"} statement iterates a specified
variable over all the enumerable properties of an object. For each distinct property,
JavaScript executes the specified statements. A `for...in` statement looks as
follows:

<!-- ```js-nolint -->


```js
for (variable in object)
  statement
```

**Example**

The following function takes as its argument an object and the object's name. It then
iterates over all the object's properties and returns a string that lists the property
names and their values.

```js
function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}
```

For an object `car` with properties `make` and `model`, `result` would be:

```plain
car.make = Ford
car.model = Mustang
```

**Arrays**

Although it may be tempting to use this as a way to iterate over [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array){:target="_blank"}
elements, the `for...in` statement will return the name of your user-defined
properties in addition to the numeric indexes.

Therefore, it is better to use a traditional [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for){:target="_blank"} loop
with a numeric index when iterating over arrays, because the `for...in`
statement iterates over user-defined properties in addition to the array elements, if
you modify the Array object (such as adding custom properties or methods).

**for...of statement**

The [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of){:target="_blank"} statement creates a loop Iterating
over [iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols){:target="_blank"} (including
[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array){:target="_blank"}, [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map){:target="_blank"}, [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set){:target="_blank"},
[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments){:target="_blank"} object and so on), invoking a custom
iteration hook with statements to be executed for the value of each distinct property.

<!-- ```js-nolint -->


```
for (variable of iterable)
  statement
```

The following example shows the difference between a `for...of` loop and a
[for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in){:target="_blank"} loop. While `for...in` iterates
over property names, `for...of` iterates over property values:

```js
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7
```

[&#9658; Live coding](#flems-enable)

The `for...of` and `for...in` statements can also be used with [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring){:target="_blank"}. For example, you can simultaneously loop over the keys and values of an object using [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries){:target="_blank"}.

```js
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2
```

[&#9658; Live coding](#flems-enable)

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 07 - Day 4 | JavaScript - Functions 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 07 - Day 4</span> | JavaScript - Functions 1</h2>
  </summary>

<!-- Schedule -->

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



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 07 - Day 5 | JavaScript - Expressions & operators 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 07 - Day 5</span> | JavaScript - Expressions & operators 1</h2>
  </summary>

<!-- Schedule -->

### Study Plan

  This chapter describes JavaScript's expressions and operators, including assignment, comparison, arithmetic, logical, string, ternary and more.

  At a high level, an _expression_ is a valid unit of code that resolves to a value. There are two types of expressions: those that have side effects (such as assigning values) and those that purely _evaluate_.

  The expression `x = 7` is an example of the first type. This expression uses the `=` _operator_ to assign the value seven to the variable `x`. The expression itself evaluates to `7`.

  The expression `3 + 4` is an example of the second type. This expression uses the `+` operator to add `3` and `4` together and produces a value, `7`. However, if it's not eventually part of a bigger construct (for example, a [variable declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations){:target="_blank"} like `const z = 3 + 4`), its result will be immediately discarded — this is usually a programmer mistake because the evaluation doesn't produce any effects.

  As the examples above also illustrate, all complex expressions are joined by _operators_, such as `=` and `+`. In this section, we will introduce the following operators:

  - [Assignment operators](#assignment_operators)
  - [Comparison operators](#comparison_operators)
  - [Arithmetic operators](#arithmetic_operators)
  - [Logical operators](#logical_operators)
  - [String operators](#string_operators)
  - [Conditional (ternary) operator](#conditional_ternary_operator)
  - [Unary operators](#unary_operators)
  - [Relational operators](#relational_operators)

  These operators join operands either formed by higher-precedence operators or one of the [basic expressions](#basic_expressions). A complete and detailed list of operators and expressions is also available in the [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators){:target="_blank"}.

  The _precedence_ of operators determines the order they are applied when evaluating an expression. For example:

  ```js
  const x = 1 + 2 * 3;
  const y = 2 * 3 + 1;
  ```

  Despite `*` and `+` coming in different orders, both expressions would result in `7` because `*` has precedence over `+`, so the `*`-joined expression will always be evaluated first. You can override operator precedence by using parentheses (which creates a [grouped expression](#grouping_operator) — the basic expression). To see a complete table of operator precedence as well as various caveats, see the [Operator Precedence Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table){:target="_blank"} page.

  JavaScript has both _binary_ and _unary_ operators, and one special ternary operator, the conditional operator.
  A binary operator requires two operands, one before the operator and one after the operator:

  ```plain
  operand1 operator operand2
  ```

  For example, `3 + 4` or `x * y`. This form is called an _infix_ binary operator, because the operator is placed between two operands. All binary operators in JavaScript are infix.

  A unary operator requires a single operand, either before or after the operator:

  ```plain
  operator operand
  operand operator
  ```

  For example, `x++` or `++x`. The `operator operand` form is called a _prefix_ unary operator, and the `operand operator` form is called a _postfix_ unary operator. `++` and `--` are the only postfix operators in JavaScript — all other operators, like `!`, `typeof`, etc. are prefix.

<!-- ## Assignment operators -->


**Assignment operators**

  An assignment operator assigns a value to its left operand based on the value of its right operand.
  The simple assignment operator is equal (`=`), which assigns the value of its right operand to its left operand.
  That is, `x = f()` is an assignment expression that assigns the value of `f()` to `x`.

  There are also compound assignment operators that are shorthand for the operations listed in the following table:

  | Name                                                                                                              | Shorthand operator | Meaning            |
  | ----------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
  | [Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment){:target="_blank"}                                           | `x = f()`          | `x = f()`          |
  | [Addition assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment){:target="_blank"}                         | `x += f()`         | `x = x + f()`      |
  | [Subtraction assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment){:target="_blank"}                   | `x -= f()`         | `x = x - f()`      |
  | [Multiplication assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment){:target="_blank"}             | `x *= f()`         | `x = x * f()`      |
  | [Division assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment){:target="_blank"}                         | `x /= f()`         | `x = x / f()`      |
  | [Remainder assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment){:target="_blank"}                       | `x %= f()`         | `x = x % f()`      |
  | [Exponentiation assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment){:target="_blank"}             | `x **= f()`        | `x = x ** f()`     |
  | [Left shift assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment){:target="_blank"}                     | `x <<= f()`        | `x = x << f()`     |
  | [Right shift assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment){:target="_blank"}                   | `x >>= f()`        | `x = x >> f()`     |
  | [Unsigned right shift assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment){:target="_blank"} | `x >>>= f()`       | `x = x >>> f()`    |
  | [Bitwise AND assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment){:target="_blank"}                   | `x &= f()`         | `x = x & f()`      |
  | [Bitwise XOR assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment){:target="_blank"}                   | `x ^= f()`         | `x = x ^ f()`      |
  | [Bitwise OR assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment){:target="_blank"}                     | `x \|= f()`        | `x = x \| f()`     |
  | [Logical AND assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment){:target="_blank"}                   | `x &&= f()`        | `x && (x = f())`   |
  | [Logical OR assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment){:target="_blank"}                     | `x \|\|= f()`      | `x \|\| (x = f())` |
  | [Nullish coalescing assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment){:target="_blank"}     | `x ??= f()`        | `x ?? (x = f())`   |



<!-- ### Assigning to properties -->


**Assigning to properties**

  If an expression evaluates to an [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects){:target="_blank"}, then the left-hand side of an assignment expression may make assignments to properties of that expression.
  For example:

  ```js
  const obj = {};

  obj.x = 3;
  console.log(obj.x); // Prints 3.
  console.log(obj); // Prints { x: 3 }.

  const key = "y";
  obj[key] = 5;
  console.log(obj[key]); // Prints 5.
  console.log(obj); // Prints { x: 3, y: 5 }.
  ```

  For more information about objects, read [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects){:target="_blank"}.

  If an expression does not evaluate to an object, then assignments to properties of that expression do not assign:

  ```js
  const val = 0;
  val.x = 3;

  console.log(val.x); // Prints undefined.
  console.log(val); // Prints 0.
  ```

  In [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors){:target="_blank"}, the code above throws, because one cannot assign properties to primitives.

  It is an error to assign values to unmodifiable properties or to properties of an expression without properties (`null` or `undefined`).

<!-- ## Comparison operators -->


**Comparison operators**

  A comparison operator compares its operands and returns a logical value based on whether the comparison is true.
  The operands can be numerical, string, logical, or [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects){:target="_blank"} values.
  Strings are compared based on standard lexicographical ordering, using Unicode values.
  In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison.
  This behavior generally results in comparing the operands numerically.
  The sole exceptions to type conversion within comparisons involve the `===` and `!==` operators, which perform strict equality and inequality comparisons.
  These operators do not attempt to convert the operands to compatible types before checking equality.
  The following table describes the comparison operators in terms of this sample code:

  ```js
  const var1 = 3;
  const var2 = 4;
  ```

  <table class="standard-table">
    <caption>
      Comparison operators
    </caption>
    <thead>
      <tr>
        <th scope="col">Operator</th>
        <th scope="col">Description</th>
        <th scope="col">Examples returning true</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Equality">Equal</a> (<code>==</code>)
        </td>
        <td>Returns <code>true</code> if the operands are equal.</td>
        <td>
          <code>3 == var1</code>
          <p><code>"3" == var1</code></p>
          <code>3 == '3'</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Inequality">Not equal</a> (<code>!=</code>)
        </td>
        <td>Returns <code>true</code> if the operands are not equal.</td>
        <td>
          <code>var1 != 4<br />var2 != "3"</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality">Strict equal</a> (<code>===</code>)
        </td>
        <td>
          Returns <code>true</code> if the operands are equal and of the same
          type. See also [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is){:target="_blank"} and
          <a href="/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness">sameness in JS</a>.
        </td>
        <td><code>3 === var1</code></td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strict not equal</a> (<code>!==</code>)
        </td>
        <td>
          Returns <code>true</code> if the operands are of the same type but not equal, or are of different type.
        </td>
        <td>
          <code>var1 !== "3"<br />3 !== '3'</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than">Greater than</a> (<code>></code>)
        </td>
        <td>
          Returns <code>true</code> if the left operand is greater than the right operand.
        </td>
        <td>
          <code>var2 > var1<br />"12" > 2</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">Greater than or equal</a>
          (<code>>=</code>)
        </td>
        <td>
          Returns <code>true</code> if the left operand is greater than or equal to the right operand.
        </td>
        <td>
          <code>var2 >= var1<br />var1 >= 3</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than">Less than</a>
          (<code>&#x3C;</code>)
        </td>
        <td>
          Returns <code>true</code> if the left operand is less than the right operand.
        </td>
        <td>
          <code>var1 &#x3C; var2<br />"2" &#x3C; 12</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Less than or equal</a>
          (<code>&#x3C;=</code>)
        </td>
        <td>
          Returns <code>true</code> if the left operand is less than or equal to the right operand.
        </td>
        <td>
          <code>var1 &#x3C;= var2<br />var2 &#x3C;= 5</code>
        </td>
      </tr>
    </tbody>
  </table>



  > `=>` is not a comparison operator but rather is the notation
  > for [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions){:target="_blank"}.



<!-- ## Arithmetic operators -->


**Arithmetic operators**

  An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value.
  The standard arithmetic operators are addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
  These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces [Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity){:target="_blank"}). For example:

  ```js
  1 / 2; // 0.5
  1 / 2 === 1.0 / 2.0; // this is true
  ```

  In addition to the standard arithmetic operations (`+`, `-`, `*`, `/`), JavaScript provides the arithmetic operators listed in the following table:

  <table class="fullwidth-table">
    <caption>
      Arithmetic operators
    </caption>
    <thead>
      <tr>
        <th scope="col">Operator</th>
        <th scope="col">Description</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Remainder">Remainder</a> (<code>%</code>)
        </td>
        <td>
          Binary operator. Returns the integer remainder of dividing the two operands.
        </td>
        <td>12 % 5 returns 2.</td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Increment">Increment</a> (<code>++</code>)
        </td>
        <td>
          Unary operator. Adds one to its operand. If used as a prefix operator
          (<code>++x</code>), returns the value of its operand after adding one;
          if used as a postfix operator (<code>x++</code>), returns the value of
          its operand before adding one.
        </td>
        <td>
          If <code>x</code> is 3, then <code>++x</code> sets <code>x</code> to 4
          and returns 4, whereas <code>x++</code> returns 3 and, only then, sets <code>x</code> to 4.
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Decrement">Decrement</a> (<code>--</code>)
        </td>
        <td>
          Unary operator. Subtracts one from its operand.
          The return value is analogous to that for the increment operator.
        </td>
        <td>
          If <code>x</code> is 3, then <code>--x</code> sets <code>x</code> to 2
          and returns 2, whereas <code>x--</code> returns 3 and, only then, sets <code>x</code> to 2.
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unary negation</a> (<code>-</code>)
        </td>
        <td>Unary operator. Returns the negation of its operand.</td>
        <td>If <code>x</code> is 3, then <code>-x</code> returns -3.</td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unary plus</a> (<code>+</code>)
        </td>
        <td>
          Unary operator. Attempts to <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">convert the operand to a number</a>, if it is not already.
        </td>
        <td>
          <p><code>+"3"</code> returns <code>3</code>.</p>
          <p><code>+true</code> returns <code>1</code>.</p>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation operator</a> (<code>**</code>)
        </td>
        <td>
          Calculates the <code>base</code> to the <code>exponent</code> power,
          that is, <code>base^exponent</code>
        </td>
        <td>
          <code>2 ** 3</code> returns <code>8</code>.<br /><code>10 ** -1</code>
          returns <code>0.1</code>.
        </td>
      </tr>
    </tbody>
  </table>



<!-- ## Logical operators -->


**Logical operators**

  Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.
  However, the `&&`, `||`, and `??` operators actually return the value of one of the specified operands, so if these
  operators are used with non-Boolean values, they may return a non-Boolean value. As such, they are more adequately called "value selection operators".
  The logical operators are described in the following table.

  <table class="fullwidth-table">
    <caption>
      Logical operators
    </caption>
    <thead>
      <tr>
        <th scope="col">Operator</th>
        <th scope="col">Usage</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Logical AND</a> (<code>&#x26;&#x26;</code>)
        </td>
        <td><code>expr1 &#x26;&#x26; expr2</code></td>
        <td>
          Returns <code>expr1</code> if it can be converted to <code>false</code>;
          otherwise, returns <code>expr2</code>. Thus, when used with Boolean
          values, <code>&#x26;&#x26;</code> returns <code>true</code> if both
          operands are true; otherwise, returns <code>false</code>.
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logical OR</a> (<code>||</code>)
        </td>
        <td><code>expr1 || expr2</code></td>
        <td>
          Returns <code>expr1</code> if it can be converted to <code>true</code>;
          otherwise, returns <code>expr2</code>. Thus, when used with Boolean
          values, <code>||</code> returns <code>true</code> if either operand is
          true; if both are false, returns <code>false</code>.
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing">Nullish coalescing operator</a> (<code>??</code>)
        </td>
        <td><code>expr1 ?? expr2</code></td>
        <td>
          Returns <code>expr1</code> if it is neither <code>null</code> nor
          <code>undefined</code>; otherwise, returns <code>expr2</code>.
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logical NOT</a> (<code>!</code>)
        </td>
        <td><code>!expr</code></td>
        <td>
          Returns <code>false</code> if its single operand can be converted
          to <code>true</code>; otherwise, returns <code>true</code>.
        </td>
      </tr>
    </tbody>
  </table>



  Examples of expressions that can be converted to `false` are those that evaluate to `null`, `0`, `0n`, `NaN`, the empty string (`""`), or `undefined`.

  The following code shows examples of the `&&` (logical AND) operator.

  ```js
  const a1 = true && true; // t && t returns true
  const a2 = true && false; // t && f returns false
  const a3 = false && true; // f && t returns false
  const a4 = false && 3 === 4; // f && f returns false
  const a5 = "Cat" && "Dog"; // t && t returns Dog
  const a6 = false && "Cat"; // f && t returns false
  const a7 = "Cat" && false; // t && f returns false
  ```

  The following code shows examples of the `||` (logical OR) operator.

  ```js
  const o1 = true || true; // t || t returns true
  const o2 = false || true; // f || t returns true
  const o3 = true || false; // t || f returns true
  const o4 = false || 3 === 4; // f || f returns false
  const o5 = "Cat" || "Dog"; // t || t returns Cat
  const o6 = false || "Cat"; // f || t returns Cat
  const o7 = "Cat" || false; // t || f returns Cat
  ```

  The following code shows examples of the `??` (nullish coalescing) operator.

  ```js
  const n1 = null ?? 1; // 1
  const n2 = undefined ?? 2; // 2
  const n3 = false ?? 3; // false
  const n4 = 0 ?? 4; // 0
  ```

  Note how `??` works like `||`, but it only returns the second expression when the first one is "[nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish){:target="_blank"}", i.e., [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null){:target="_blank"} or [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined){:target="_blank"}. `??` is a better alternative than `||` for setting defaults for values that might be `null` or `undefined`, in particular when values like `''` or `0` are valid values and the default should not apply.

  The following code shows examples of the `!` (logical NOT) operator.

  ```js
  const n1 = !true; // !t returns false
  const n2 = !false; // !f returns true
  const n3 = !"Cat"; // !t returns false
  ```

<!-- ## String operators -->


**String operators**

  In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

  For example,

  ```js
  console.log("my " + "string"); // console logs the string "my string".
  ```

  The shorthand assignment operator `+=` can also be used to concatenate strings.

  For example,

  ```js
  let myString = "alpha";
  myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
  ```

<!-- ## Conditional (ternary) operator -->


**Conditional (ternary) operator**

  The [conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator){:target="_blank"}
  is the only JavaScript operator that takes three operands.
  The operator can have one of two values based on a condition.
  The syntax is:

  <!-- ```js-nolint -->


  ```js
  condition ? val1 : val2
  ```

  If `condition` is true, the operator has the value of `val1`.
  Otherwise it has the value of `val2`. You can use the conditional operator anywhere you would use a standard operator.

  For example,

  ```js
  const status = age >= 18 ? "adult" : "minor";
  ```

  This statement assigns the value "adult" to the variable `status` if
  `age` is eighteen or more. Otherwise, it assigns the value "minor" to
  `status`.

<!-- ## Unary operators -->


**Unary operators**

  A unary operation is an operation with only one operand.

<!-- ### delete -->


**delete**

  The [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete){:target="_blank"} operator deletes an object's property.
  The syntax is:

  ```js
  delete object.property;
  delete object[propertyKey];
  delete objectName[index];
  ```

  where `object` is the name of an object, `property` is an existing property, and `propertyKey` is a string or symbol referring to an existing property.

  If the `delete` operator succeeds, it removes the property from the object.
  Trying to access it afterwards will yield `undefined`.
  The `delete` operator returns `true` if the operation is possible; it returns `false` if the operation is not possible.

  ```js
  delete Math.PI; // returns false (cannot delete non-configurable properties)

  const myObj = { h: 4 };
  delete myObj.h; // returns true (can delete user-defined properties)
  ```

<!-- #### Deleting array elements -->


**Deleting array elements**

  Since arrays are just objects, it's technically possible to `delete` elements from them.
  This is, however, regarded as a bad practice — try to avoid it.
  When you delete an array property, the array length is not affected and other elements are not re-indexed.
  To achieve that behavior, it is much better to just overwrite the element with the value `undefined`.
  To actually manipulate the array, use the various array methods such as [`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice){:target="_blank"}.

<!-- ### typeof -->


**typeof**

  The [`typeof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof){:target="_blank"} returns a string indicating the type of the unevaluated operand.
  `operand` is the string, variable, keyword, or object for which the type is to be returned.
  The parentheses are optional.

  Suppose you define the following variables:

  ```js
  const myFun = () => 5 + 2;
  const shape = "round";
  const size = 1;
  const foo = ["Apple", "Mango", "Orange"];
  const today = new Date();
  ```

  The `typeof` operator returns the following results for these variables:

  ```js
  typeof myFun; // returns "function"
  typeof shape; // returns "string"
  typeof size; // returns "number"
  typeof foo; // returns "object"
  typeof today; // returns "object"
  typeof doesntExist; // returns "undefined"
  ```

  For the keywords `true` and `null`, the `typeof`
  operator returns the following results:

  ```js
  typeof true; // returns "boolean"
  typeof null; // returns "object"
  ```

  For a number or string, the `typeof` operator returns the following results:

  ```js
  typeof 62; // returns "number"
  typeof "Hello world"; // returns "string"
  ```

  For property values, the `typeof` operator returns the type of value the
  property contains:

  ```js
  typeof document.lastModified; // returns "string"
  typeof window.length; // returns "number"
  typeof Math.LN2; // returns "number"
  ```

  For methods and functions, the `typeof` operator returns results as follows:

  ```js
  typeof blur; // returns "function"
  typeof parseInt; // returns "function"
  typeof shape.split; // returns "function"
  ```

  For predefined objects, the `typeof` operator returns results as follows:

  ```js
  typeof Date; // returns "function"
  typeof Function; // returns "function"
  typeof Math; // returns "object"
  typeof Option; // returns "function"
  typeof String; // returns "function"
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

<!-- ### Exercises -->



<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
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