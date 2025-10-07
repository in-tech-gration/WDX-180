# Quiz

> #todo

## Program 2

```js
'use strict';

let userInput = prompt('Enter something 5 characters long.');

let message;
if (userInput === null) {
  // path 1
  message = 'Good bye.';
} else if (userInput.length === 5) {
  // path 2
  message = 'Perfect!'.
} else if (userInput.length >= 5) {
  // path 3
  message = 'Too long.';
} else {
  // path 4
  message = 'Too short.';
}

alert(message);
```

---

<details>
<summary><strong>1. Which path is executed if the user enters <code>"toast"</code>?</strong></summary>
<br>

<details>
<summary><em>A. Path 2</em></summary>
<br>

✔ Correct!

The first conditional check that will evaluate to `true` is the second one:
`if (userInput.length === 5)`.

Conditional statements execute the first path with a truthy condition so the
program will enter directly into the second path _without_ evaluating any more
checks.

</details>
<details>
<summary><em>B. Path 3</em></summary>
<br>

✖ Nope.

This is a tricky one. The condition for path 3 _would_ evaluate to `true` when
the input is 5 characters long, but the comparison will actually _never happen_!

A conditional statement _will not_ check any more conditions after _any one of
them_ evaluates to true. The first path will be executed and the rest of the
conditional is skipped entirely.

</details>
<details>
<summary><em>C. Path 2 and Path 3</em></summary>
<br>

✖ Nope.

Only one path can ever be executed in a conditional statement. After the second
condition passes, the second path will be executed and everything else will be
skipped.

</details>
<details>
<summary><em>D. Path 4</em></summary>
<br>

✖ Nope.

`else` blocks are only evaluated if _every_ conditional check is falsy. Because
the second check was truthy, the conditional statement will never make it to
path 4.

</details>

</details>

---

<details>
<summary><strong>3. What is alerted to the user if they enter "qwerty"?</strong></summary>
<br>

<details>
<summary><em>A. "Perfect!"</em></summary>
<br>

✖ Nope.

The input is longer than 5 characters, so the 3rd path will be executed. Because
`"Perfect!"` is only assigned to `message` in the 2nd path, this value will not
be alerted.

</details>
<details>
<summary><em>B. "Too long."</em></summary>
<br>

✔ Correct!

The input is longer than 5 characters so it will pass the 3rd conditional check,
executing the 3rd path.

In the third path `"Too long."` is assigned to `message`, so "Too long." will be
alerted to the user.

</details>
<details>
<summary><em>C. "Too short."</em></summary>
<br>

✖ Nope.

The `else` block (path 4) will never be executed if the user inputs "qwerty"
because the 3rd check will be truthy, and the 3rd path will be executed.

`else` blocks are only executed if _no other checks_ are truthy.

</details>

</details>
