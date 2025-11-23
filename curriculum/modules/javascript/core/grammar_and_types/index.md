---
title: JavaScript - Grammar and types
based-on: /curriculum/modules/mdn/web/javascript/guide/grammar_and_types/index.md
---

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

A JavaScript identifier usually starts with a letter, underscore (`_`), or dollar sign (`$`). Subsequent characters can also be digits (`0` – `9`). Because JavaScript is case sensitive, letters include the characters `A` through `Z` (uppercase) as well as `a` through `z` (lowercase).

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

You can create a read-only, named constant with the [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const){:target="_blank"} keyword. The syntax of a constant identifier is the same as any variable identifier: it must start with a letter, underscore, or dollar sign (`$`), and can contain alphabetic, numeric, or underscore characters.

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

  <!-- SGEN:META:PROGRESS:task=Study the Grammar and Types -->
