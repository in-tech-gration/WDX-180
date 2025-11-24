---
title: JavaScript - Expressions & operators 3
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
Source: https://github.com/in-tech-gration/content/tree/main/files/en-us/web/javascript/guide/expressions_and_operators
---

### Study Plan

This chapter describes more of JavaScript's expressions and operators.

<!-- ### Evaluation and nesting -->
**Evaluation and nesting**

  In general, assignments are used within a variable declaration (i.e., with [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const){:target="_blank"}, [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let){:target="_blank"}, or [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var){:target="_blank"}) or as standalone statements.

  ```js
  // Declares a variable x and initializes it to the result of f().
  // The result of the x = f() assignment expression is discarded.
  let x = f();

  x = g(); // Reassigns the variable x to the result of g().
  ```

  However, like other expressions, assignment expressions like `x = f()` evaluate into a result value.
  Although this result value is usually not used, it can then be used by another expression.

  Chaining assignments or nesting assignments in other expressions can result in surprising behavior.
  For this reason, some JavaScript style guides [discourage chaining or nesting assignments](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment){:target="_blank"}.
  Nevertheless, assignment chaining and nesting may occur sometimes, so it is important to be able to understand how they work.

  By chaining or nesting an assignment expression, its result can itself be assigned to another variable.
  It can be logged, it can be put inside an array literal or function call, and so on.

  <!-- ```js-nolint -->
  ```js
  let x;
  const y = (x = f()); // Or equivalently: const y = x = f();
  console.log(y); // Logs the return value of the assignment x = f().

  console.log(x = f()); // Logs the return value directly.

  // An assignment expression can be nested in any place
  // where expressions are generally allowed,
  // such as array literals' elements or as function calls' arguments.
  console.log([0, x = f(), 0]);
  console.log(f(0, x = f(), 0));
  ```

  The evaluation result matches the expression to the right of the `=` sign in the
  "Meaning" column of the table above. That means that `x = f()` evaluates into
  whatever `f()`'s result is, `x += f()` evaluates into the resulting sum `x + f()`,
  `x **= f()` evaluates into the resulting power `x ** f()`, and so on.

  In the case of logical assignments, `x &&= f()`,
  `x ||= f()`, and `x ??= f()`, the return value is that of the
  logical operation without the assignment, so `x && f()`,
  `x || f()`, and `x ?? f()`, respectively.

  When chaining these expressions without parentheses or other grouping operators
  like array literals, the assignment expressions are **grouped right to left**
  (they are [right-associative](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity){:target="_blank"}), but they are **evaluated left to right**.

  Note that, for all assignment operators other than `=` itself,
  the resulting values are always based on the operands' values _before_
  the operation.

  For example, assume that the following functions `f` and `g`
  and the variables `x` and `y` have been declared:

  ```js
  function f() {
    console.log("F!");
    return 2;
  }
  function g() {
    console.log("G!");
    return 3;
  }
  let x, y;
  ```

  Consider these three examples:

  <!-- ```js-nolint -->
  ```js
  y = x = f();
  y = [f(), x = g()];
  x[f()] = g();
  ```

<!-- #### Evaluation example 1 -->
**Evaluation example 1**

  `y = x = f()` is equivalent to `y = (x = f())`,
  because the assignment operator `=` is [right-associative](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity){:target="_blank"}.
  However, it evaluates from left to right:

  1. The assignment expression `y = x = f()` starts to evaluate.
    1. The `y` on this assignment's left-hand side evaluates
        into a reference to the variable named `y`.
    2. The assignment expression `x = f()` starts to evaluate.
        1. The `x` on this assignment's left-hand side evaluates
          into a reference to the variable named `x`.
        2. The function call `f()` prints "F!" to the console and
          then evaluates to the number `2`.
        3. That `2` result from `f()` is assigned to `x`.
    3. The assignment expression `x = f()` has now finished evaluating;
        its result is the new value of `x`, which is `2`.
    4. That `2` result in turn is also assigned to `y`.
  2. The assignment expression `y = x = f()` has now finished evaluating;
    its result is the new value of `y` – which happens to be `2`.
    `x` and `y` are assigned to `2`,
    and the console has printed "F!".

<!-- #### Evaluation example 2 -->
**Evaluation example 2**

  `y = [ f(), x = g() ]` also evaluates from left to right:

  1. The assignment expression `y = [ f(), x = g() ]` starts to evaluate.
    1. The `y` on this assignment's left-hand evaluates
        into a reference to the variable named `y`.
    2. The inner array literal `[ f(), x = g() ]` starts to evaluate.
        1. The function call `f()` prints "F!" to the console and
          then evaluates to the number `2`.
        2. The assignment expression `x = g()` starts to evaluate.
          1. The `x` on this assignment's left-hand side evaluates
              into a reference to the variable named `x`.
          2. The function call `g()` prints "G!" to the console and
              then evaluates to the number `3`.
          3. That `3` result from `g()` is assigned to `x`.
        3. The assignment expression `x = g()` has now finished evaluating;
          its result is the new value of `x`, which is `3`.
          That `3` result becomes the next element
          in the inner array literal (after the `2` from the `f()`).
    3. The inner array literal `[ f(), x = g() ]`
        has now finished evaluating;
        its result is an array with two values: `[ 2, 3 ]`.
    4. That `[ 2, 3 ]` array is now assigned to `y`.
  2. The assignment expression `y = [ f(), x = g() ]` has
    now finished evaluating;
    its result is the new value of `y` – which happens to be `[ 2, 3 ]`.
    `x` is now assigned to `3`,
    `y` is now assigned to `[ 2, 3 ]`,
    and the console has printed "F!" then "G!".

<!-- #### Evaluation example 3 -->
**Evaluation example 3**

  `x[f()] = g()` also evaluates from left to right.
  (This example assumes that `x` is already assigned to some object.
  For more information about objects, read [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects){:target="_blank"}.)

  1. The assignment expression `x[f()] = g()` starts to evaluate.
    1. The `x[f()]` property access on this assignment's left-hand
        starts to evaluate.
        1. The `x` in this property access evaluates
          into a reference to the variable named `x`.
        2. Then the function call `f()` prints "F!" to the console and
          then evaluates to the number `2`.
    2. The `x[f()]` property access on this assignment
        has now finished evaluating;
        its result is a variable property reference: `x[2]`.
    3. Then the function call `g()` prints "G!" to the console and
        then evaluates to the number `3`.
    4. That `3` is now assigned to `x[2]`.
        (This step will succeed only if `x` is assigned to an [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects){:target="_blank"}.){:target="_blank"}
  2. The assignment expression `x[f()] = g()` has now finished evaluating;
    its result is the new value of `x[2]` – which happens to be `3`.
    `x[2]` is now assigned to `3`,
    and the console has printed "F!" then "G!".

<!-- ### Avoid assignment chains -->
**Avoid assignment chains**

  Chaining assignments or nesting assignments in other expressions can
  result in surprising behavior. For this reason,
  [chaining assignments in the same statement is discouraged](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment){:target="_blank"}.

  In particular, putting a variable chain in a [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const){:target="_blank"}, [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let){:target="_blank"}, or [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var){:target="_blank"} statement often does _not_ work. Only the outermost/leftmost variable would get declared; other variables within the assignment chain are _not_ declared by the `const`/`let`/`var` statement.
  For example:

  <!-- ```js-nolint -->
  ```js
  const z = y = x = f();
  ```

  This statement seemingly declares the variables `x`, `y`, and `z`.
  However, it only actually declares the variable `z`.
  `y` and `x` are either invalid references to nonexistent variables (in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode){:target="_blank"}) or, worse, would implicitly create [global variables](https://developer.mozilla.org/en-US/docs/Glossary/Global_variable){:target="_blank"} for `x` and `y` in [sloppy mode](https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode){:target="_blank"}.

<!-- ## Bitwise operators -->
**Bitwise operators**

  A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather
  than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has
  a binary representation of 1001. Bitwise operators perform their operations on such
  binary representations, but they return standard JavaScript numerical values.

  The following table summarizes JavaScript's bitwise operators.

  | Operator                                                                                     | Usage     | Description                                                                                                                                                             |
  | -------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | [Bitwise AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND){:target="_blank"}                    | `a & b`   | Returns a one in each bit position for which the corresponding bits of both operands are ones.                                                                          |
  | [Bitwise OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR){:target="_blank"}                      | `a \| b`  | Returns a zero in each bit position for which the corresponding bits of both operands are zeros.                                                                        |
  | [Bitwise XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR){:target="_blank"}                    | `a ^ b`   | Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.] |
  | [Bitwise NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT){:target="_blank"}                    | `~ a`     | Inverts the bits of its operand.                                                                                                                                        |
  | [Left shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift){:target="_blank"}                      | `a << b`  | Shifts `a` in binary representation `b` bits to the left, shifting in zeros from the right.                                                                             |
  | [Sign-propagating right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift){:target="_blank"}   | `a >> b`  | Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off.                                                                                 |
  | [Zero-fill right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift){:target="_blank"} | `a >>> b` | Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off, and shifting in zeros from the left.                                            |

<!-- ### Bitwise logical operators -->
**Bitwise logical operators**

  Conceptually, the bitwise logical operators work as follows:

  - The operands are converted to thirty-two-bit integers and expressed by a series of bits (zeros and ones).
    Numbers with more than 32 bits get their most significant bits discarded.
    For example, the following integer with more than 32 bits will be converted to a 32-bit integer:

    ```plain
    Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
    After:                 1010 0000 0000 0000 0110 0000 0000 0001
    ```

  - Each bit in the first operand is paired with the corresponding bit in the second operand: first bit to first bit, second bit to second bit, and so on.
  - The operator is applied to each pair of bits, and the result is constructed bitwise.

  For example, the binary representation of nine is 1001, and the binary representation of fifteen is 1111.
  So, when the bitwise operators are applied to these values, the results are as follows:

  | Expression | Result | Binary Description                                |
  | ---------- | ------ | ------------------------------------------------- |
  | `15 & 9`   | `9`    | `1111 & 1001 = 1001`                              |
  | `15 \| 9`  | `15`   | `1111 \| 1001 = 1111`                             |
  | `15 ^ 9`   | `6`    | `1111 ^ 1001 = 0110`                              |
  | `~15`      | `-16`  | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
  | `~9`       | `-10`  | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

  Note that all 32 bits are inverted using the Bitwise NOT operator, and that values with
  the most significant (left-most) bit set to 1 represent negative numbers
  (two's-complement representation). `~x` evaluates to the same value that
  `-x - 1` evaluates to.

<!-- ### Bitwise shift operators -->
**Bitwise shift operators**

  The bitwise shift operators take two operands: the first is a quantity to be shifted, and the second specifies the number of bit positions by which the first operand is to be
  shifted.
  The direction of the shift operation is controlled by the operator used.

  Shift operators convert their operands to thirty-two-bit integers and return a result of either type [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number){:target="_blank"} or [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt){:target="_blank"}: specifically, if the type
  of the left operand is [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt){:target="_blank"}, they return [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt){:target="_blank"};
  otherwise, they return [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number){:target="_blank"}.

  The shift operators are listed in the following table.

  <table class="fullwidth-table">
    <caption>
      Bitwise shift operators
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
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift">Left shift</a><br />(<code>&#x3C;&#x3C;</code>)
        </td>
        <td>
          This operator shifts the first operand the specified number of bits to
          the left. Excess bits shifted off to the left are discarded. Zero bits
          are shifted in from the right.
        </td>
        <td>
          <code>9&#x3C;&#x3C;2</code> yields 36, because 1001 shifted 2 bits to
          the left becomes 100100, which is 36.
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift">Sign-propagating right shift</a> (<code>>></code>)
        </td>
        <td>
          This operator shifts the first operand the specified number of bits to
          the right. Excess bits shifted off to the right are discarded. Copies of
          the leftmost bit are shifted in from the left.
        </td>
        <td>
          <code>9>>2</code> yields 2, because 1001 shifted 2 bits to the right
          becomes 10, which is 2. Likewise, <code>-9>>2</code> yields -3, because the sign is preserved.
        </td>
      </tr>
      <tr>
        <td>
          <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Zero-fill right shift</a> (<code>>>></code>)
        </td>
        <td>
          This operator shifts the first operand the specified number of bits to
          the right. Excess bits shifted off to the right are discarded. Zero bits
          are shifted in from the left.
        </td>
        <td>
          <code>19>>>2</code> yields 4, because 10011 shifted 2 bits to the right
          becomes 100, which is 4. For non-negative numbers, zero-fill right shift
          and sign-propagating right shift yield the same result.
        </td>
      </tr>
    </tbody>
  </table>

<!-- ### Short-circuit evaluation -->
**Short-circuit evaluation**

  As logical expressions are evaluated left to right, they are tested for possible
  "short-circuit" evaluation using the following rules:

  - `falsy && anything` is short-circuit evaluated to the falsy value.
  - `truthy || anything` is short-circuit evaluated to the truthy value.
  - `nonNullish ?? anything` is short-circuit evaluated to the non-nullish value.

  The rules of logic guarantee that these evaluations are always correct. Note that the
  _anything_ part of the above expressions is not evaluated, so any side effects of
  doing so do not take effect.

<!-- ## BigInt operators -->
**BigInt operators**

  Most operators that can be used between numbers can be used between [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt){:target="_blank"} values as well.

  ```js
  // BigInt addition
  const a = 1n + 2n; // 3n
  // Division with BigInts round towards zero
  const b = 1n / 2n; // 0n
  // Bitwise operations with BigInts do not truncate either side
  const c = 40000000000000000n >> 2n; // 10000000000000000n
  ```

  One exception is [unsigned right shift (`>>>`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift){:target="_blank"}, which is not defined for BigInt values. This is because a BigInt does not have a fixed width, so technically it does not have a "highest bit".

  ```js
  const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
  ```

  BigInts and numbers are not mutually replaceable — you cannot mix them in calculations.

  <!-- ```js example-bad -->
  ```js
  const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
  ```

  This is because BigInt is neither a subset nor a superset of numbers. BigInts have higher precision than numbers when representing large integers, but cannot represent decimals, so implicit conversion on either side might lose precision. Use explicit conversion to signal whether you wish the operation to be a number operation or a BigInt one.

  ```js example-good
  const a = Number(1n) + 2; // 3
  const b = 1n + BigInt(2); // 3n
  ```

  You can compare BigInts with numbers.

  ```js
  const a = 1n > 2; // false
  const b = 3 > 2n; // true
  ```

<!-- ### this -->
**this**

  The [`this` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this){:target="_blank"} is usually used within a function. In general, when the function is attached to an object as a method, `this` refers to the object that the method is called on. It functions like a hidden parameter that is passed to the function. `this` is an expression that evaluates to the object, so you can use all the object operations we introduced.

  ```js
  this["propertyName"];
  this.propertyName;
  doSomething(this);
  ```

  For example, suppose a function is defined as follows:

  ```js
  function getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  ```

  We can now attach this function to an object, and it will use the properties of that object when called:

  ```js
  const person1 = {
    firstName: "Chris",
    lastName: "Martin",
  };

  const person2 = {
    firstName: "Chester",
    lastName: "Bennington",
  };

  // Attach the same function
  person1.getFullName = getFullName;
  person2.getFullName = getFullName;

  console.log(person1.getFullName()); // "Chris Martin"
  console.log(person2.getFullName()); // "Chester Bennington"
  ```

<!-- ### Optional chaining -->
**Optional chaining**

  The [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining){:target="_blank"} syntax (`?.`) performs the chained operation on an object if it is defined and non-`null`, and otherwise short-circuits the operation and returns `undefined`.
  This allows you to operate on a value that may be `null` or `undefined` without causing a `TypeError`.

  ```js
  maybeObject?.property;
  maybeObject?.[property];
  maybeFunction?.();
  ```

<!-- ### new -->
**new**

  You can use the [`new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new){:target="_blank"} to create an instance of a user-defined object type or of one of the built-in object types. Use `new` as follows:

  ```js
  const objectName = new ObjectType(param1, param2, /* …, */ paramN);
  ```

<!-- ### super -->
**super**

  The [`super` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super){:target="_blank"} is used to call functions on an object's parent.
  It is useful with [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes){:target="_blank"} to call the parent constructor, for example.

  <!-- ```js-nolint -->
  ```js
  super(args); // calls the parent constructor.
  super.functionOnParent(args);
  ```

<!-- ### Exercises -->

<!-- SGEN:META:PROGRESS:task=Study the Expressions and Operators 3 module and practice -->
