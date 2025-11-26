---
title: JavaScript - Numbers & Strings
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
source: https://github.com/in-tech-gration/content/blob/main/files/en-us/web/javascript/guide/numbers_and_strings/index.md
---

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

<!-- SGEN:META:PROGRESS:task=Study the Numbers and Strings module and practice -->