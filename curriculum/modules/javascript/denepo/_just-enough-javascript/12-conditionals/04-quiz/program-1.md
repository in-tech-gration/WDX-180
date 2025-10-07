# Quiz

> #todo

## Program 1

```js
'use strict';

let userInput = prompt('Enter something longer than 4 characters.');

let message;
if (userInput === null) {
  // path 1
  message = 'Good bye.';
} else if (userInput.length >= 5) {
  // path 2
  message = 'Long enough!';
} else {
  // path 3
  message = 'Too short.';
}

alert(message);
```

---

<details>
<summary><strong>1. Which path is executed if the user enters <code>"toast"</code>?</strong></summary>
<br>

<details>
<summary><em>A. Path 1</em></summary>
<br>

✖ Nope.

Path 1 is only executed if the user cancels, which will assign `null` to
`userInput` and pass the first check.

</details>
<details>
<summary><em>B. Path 2</em></summary>
<br>

✔ Correct!

The check for path 2 does compare the input's length to 5, but it is checking
for greater than _or_ equal to 5. Which means that an input with length 3 will
evaluate to `true` and the second path will be executed.

</details>
<details>
<summary><em>C. Path 3</em></summary>
<br>

✖ Nope.

The third path is only executed if _neither_ of the conditional checks evaluate
to `true`. Because the second path was executed the `else` path will be skipped.

</details>

</details>

---

<details>
<summary><strong>2. Which path is executed if the user types <code>"computer"</code> and then clicks "cancel"?</strong></summary>
<br>

<details>
<summary><em>A. Path 1</em></summary>
<br>

✔ Correct!

It doesn't matter what is in the text field, if you click "cancel" it will
return `null`.

Because `null` will be assigned to the input variable, the first conditional
check will pass.

</details>
<details>
<summary><em>B. Path 2</em></summary>
<br>

✖ Nope.

Trick question! Even if there is text in the input field, the prompt will return
`null` if you click "cancel".

</details>
<details>
<summary><em>C. Path 3</em></summary>
<br>

✖ Nope.

Trick question! Even if there is text in the input field, the prompt will return
`null` if you click "cancel".

</details>

</details>

---

<details>
<summary><strong>3. What is alerted to the user if they enter "cow"?</strong></summary>
<br>

<details>
<summary><em>A. "false"</em></summary>
<br>

✖ Nope.

The second conditional check _will_ evaluate to `false`, but that is not the
value assigned to `message`. Failing the second check just means that the
program will skip the second path.

</details>
<details>
<summary><em>B. "Long enough!"</em></summary>
<br>

✖ Nope.

The second conditional check is `false`, which means that the program will skip
ahead to the next path. Since path 2 is never executed `"Long enough!"` will not
be assigned to `message`.

</details>
<details>
<summary><em>C. "Too short."</em></summary>
<br>

✔ Correct!

Because both conditional checks evaluate to `false`, the `else` block will be
executed.

In the third path `"Too short."` is assigned to `message`, so "Too short." will
be alerted at the end of the program.

</details>
<details>
<summary><em>D. "path 3"</em></summary>
<br>

✖ Nope.

It _is_ true that path 3 is executed, but `// path 3` is a comment to help
developers know which block they're looking at. The value assigned to `message`
in the third path is the string `"Too short."`.

</details>
<details>
<summary><em>D. "undefined"</em></summary>
<br>

✖ Nope.

Conditional blocks with an `else` will _always_ execute one block, if none of
the checks are truthy the `else` block is executed by default.

Because each path assigns a value to `message`, it's not possible for `message`
to still be undefined when the program reaches the alert.

</details>

</details>
