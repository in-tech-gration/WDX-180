---
title: JavaScript - Expressions & operators 1
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
Source: https://github.com/in-tech-gration/content/tree/main/files/en-us/web/javascript/guide/expressions_and_operators
---

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

<!-- SGEN:META:PROGRESS:task=Study the Expressions and Operators 1 module and practice -->
