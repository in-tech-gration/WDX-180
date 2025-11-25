---
title: JavaScript - Expressions & operators 2
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
Source: https://github.com/in-tech-gration/content/tree/main/files/en-us/web/javascript/guide/expressions_and_operators
---

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

<!-- SGEN:META:PROGRESS:task=Study the Expressions and Operators 2 module and practice -->