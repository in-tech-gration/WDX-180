# Quiz

> #todo

## Prompt

```js
'use strict';

let userInput = prompt("enter something, or don't");

console.log(typeof userInput); // log 1
console.log(userInput); // log 2
```

---

<details>
<summary><strong>1. What is logged if the user cancels?</strong></summary>
<br>

<details>
<summary><em>A. <code>"string"</code>, <code>"cancel"</code></em></summary>
<br>

✖ Nope.

A string is only returned by `prompt` when the user clicks "ok".

"cancel" may be written on the button, but that is now what the user is
inputting.

</details>

<details>
<summary><em>B. <code>"string"</code>, <code>""</code></em></summary>
<br>

✖ Nope.

A string is only returned by `prompt` when the user clicks "ok".

Even if the text field is empty, canceling does not submit a string. To submit
an empty string the user must click "ok" with an empty input field.

</details>
<details>
<summary><em>C. <code>"undefined"</code>, <code>undefined</code></em></summary>
<br>

✖ Nope.

`prompt` will never return `undefined`, only a string or `null`.

`alert` does return `undefined`.

</details>
<details>
<summary><em>D. <code>"object"</code>, <code>null</code></em></summary>
<br>

✔ Correct!

Canceling a `prompt` returns `null`, and the type of is `"object"`.

</details>
<details>
<summary><em>E. <code>"null"</code>, <code>null</code></em></summary>
<br>

✖ Nope.

but close! Canceling a `prompt` _does_ return `null`, but the type of `null` _is
not_ `"null"`. It is `"object"`.

</details>

</details>

---

<details>
<summary><strong>2. What is logged if the user types <code>"hello"</code> and clicks "ok"?</strong></summary>
<br>

<details>
<summary><em>A. <code>"string"</code>, <code>"ok"</code></em></summary>
<br>

✖ Nope.

The type will be `"string"`, but the value will be `"hello"`

"ok" is the name of the button, but `prompt` returns the value typed in the
input field.

</details>
<details>
<summary><em>B. <code>"string"</code>, <code>"hello"</code></em></summary>
<br>

✔ Correct!

The return type for `prompt` is always `"string"` when the user clicks "ok".

Because they had typed `"hello"` in the field, that will be the return value.

</details>
<details>
<summary><em>C. <code>"undefined"</code>, <code>undefined</code></em></summary>
<br>

✖ Nope.

`prompt` will never return `undefined`, only a string or `null`.

`alert` does return `undefined`.

</details>
<details>
<summary><em>D. <code>"object"</code>, <code>null</code></em></summary>
<br>

✖ Nope.

Canceling a `prompt` returns `null`, and the type of is `"object"`.

But the user clicked "ok" so this is not the right answer.

</details>
<details>
<summary><em>E. <code>"null"</code>, <code>null</code></em></summary>
<br>

✖ Nope.

The user clicked "ok" not "cancel". So the return value will be a string.

And even if the user did cancel, this would be wrong. Canceling a `prompt`
_does_ return `null`, but the type of `null` _is not_ `"null"`. It is
`"object"`.

</details>

</details>

---

<details>
<summary><strong>3. What must a user do to log <code>"string"</code>, <code>""</code>?</strong></summary>
<br>

<details>
<summary><em>A. type <code>"string"</code> and click "cancel"</em></summary>
<br>

✖ Nope.

Canceling will always return `null`, no matter what text the user typed in the
input.

</details>
<details>
<summary><em>B. type nothing and click "cancel"</em></summary>
<br>

✖ Nope.

Canceling will always log `null`, no matter what text the user typed in the
input.

</details>
<details>
<summary><em>C. type nothing and click "ok"</em></summary>
<br>

✔ Correct!

Typing nothing and clicking "ok" will return an _empty string_, a value with the
type `"string"` but no characters inside of it.

</details>
<details>
<summary><em>D. type <code>"string"</code> and click "ok"</em></summary>
<br>

✖ Nope.

Typing `"string"` and clicking ok will log `"string"` twice! Once because the
input has the type "string", and a second type because the input _is_
`"string"`!

This may seem strange at first, but with practice it will make sense.

</details>

</details>
