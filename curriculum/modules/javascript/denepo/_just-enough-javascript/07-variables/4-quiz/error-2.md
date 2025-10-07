# Quiz

> #todo

## Error 2

```js
'use strict';

animal = 'dog'; // line 3

console.log(animal); // line 5

let animal = 'cat'; // line 7
```

---

<details>
<summary><strong>1. Which error will be thrown by this code?</strong></summary>
<br>

<details>
<summary><em>A. SyntaxError</em></summary>
<br>

✖ Nope.

A _SyntaxError_ occurs with `let` when you try to declare the same variable more
than once.

In this snippet `animal` is only declared once, so that's not the problem.

</details>
<details>
<summary><em>B. ReferenceError</em></summary>
<br>

Yup! This is a _ReferenceError_ because you are trying to use the variable
`animal` _before_ it was declared.

It is _declared_ on line 7, but it is first _read_ on line 3.

</details>

</details>

---

<details>
<summary><strong>2. On which line will the error occur?</strong></summary>
<br>

<details>
<summary><em>A. line 1</em></summary>
<br>

✖ Nope.

Line 1 is the `"use strict";` directive, it changes the way JS interprets your
code but it's not a _step_ in your program.

Errors will never occur on the `"use strict";` line.

</details>
<details>
<summary><em>B. line 3</em></summary>
<br>

✔ Correct!

On line 3 the `animal` is _read_, but `animal` is _declared_ on line 7. Reading
a variable before it is declared will cause a _ReferenceError_.

</details>
<details>
<summary><em>C. line 5</em></summary>
<br>

✖ Nope.

The error occurs earlier in the program so the program will never reach line 5.

</details>
<details>
<summary><em>D. line 7</em></summary>
<br>

✖ Nope.

The error occurs earlier in the program so the program will never reach line 7.

Yes, this line does declare the variable `animal`. But that doesn't matter
because `animal` is _read_ on line 3 before it is _declared_ on line 7.

</details>

</details>
