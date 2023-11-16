# Quiz

> #todo

## Error 2

```js
'use strict';

{
  let animal = 'dog'; // line 4
  console.log(animal); // line 5
}

animal = 'cat'; // line 8
console.log(animal); // line 9
```

---

<details>
<summary><strong>1. Which error will be thrown by this code?</strong></summary>
<br>

<details>
<summary><em>A. SyntaxError</em></summary>
<br>

✖ Nope.

There is only one variable declared in this program, so no risk of declaring the
same one twice.

</details>
<details>
<summary><em>B. ReferenceError</em></summary>
<br>

✔ Correct!

The `animal` variable is declared in the _inner scope_ (line 4), it is not
available _outside_ of this scope.

Trying to assign the variable on line 8 will cause a `ReferenceError` because
the variable was only declared _inside_ the scope.

</details>
<details>
<summary><em>C. Trick question, there is no error!</em></summary>
<br>

Not so easy ;) There is an error in this program.

</details>

</details>

---

<details>
<summary><strong>2. On which line will the error occur?</strong></summary>
<br>

<details>
<summary><em>A. line 4</em></summary>
<br>

✖ Nope.

There is nothing wrong with this line, it's ok to declare a new variable inside
a block scope.

</details>
<details>
<summary><em>B. line 5</em></summary>
<br>

✖ Nope.

There is nothing wrong here, it's ok to read a variable that was declared in the
same scope.

</details>
<details>
<summary><em>C. line 8</em></summary>
<br>

✔ Correct!

8 will throw a `ReferenceError` when it tries to assign a new value to `animal`
because the variable has never been declared in the _outer scope_.

`animal` is available in the _inner scope_ because that is where it was
declared, but variables declared in an inner scope are not available in an
_outer scope_.

</details>
<details>
<summary><em>D. line 9</em></summary>
<br>

✖ Nope.

This line will never be executed! The error occurred on line 8 so the program
stops on line 8.

</details>

</details>

---

<details>
<summary><strong>3. What will be logged to the console?</strong></summary>
<br>

<details>
<summary><em>A. <code>"dog"</code> then <code>ReferenceError</code></em></summary>
<br>

✔ Correct!

On line 5 `"dog"` will be logged to the console, and on line 8 there will be a
`ReferenceError`.

The second log (line 9) will never be executed because the error happens earlier
in the program.

</details>
<details>
<summary><em>B. <code>"cat"</code> then <code>ReferenceError</code></em></summary>
<br>

✖ Nope.

This program will never log `"cat"`. The variable `animal` was initialized to
`"dog"` and it's block scope is closed without assigning a different value.

</details>
<details>
<summary><em>C.  <code>"dog"</code> then <code>SyntaxError</code></em></summary>
<br>

✖ Nope.

This program will log `"dog"`, but the error is not the correct.

</details>

</details>
