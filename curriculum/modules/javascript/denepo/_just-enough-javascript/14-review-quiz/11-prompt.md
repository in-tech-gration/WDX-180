# Prompt

What is returned when the user types nothing and clicks "ok" in a prompt?

---

<details>
<summary><strong>A: </strong> <code>null</code></summary>
<br>

✖ Nope.

`prompt` will only return `null` when the user clicks "cancel".

When the user clicks "ok" whatever is written in the text box will be returned
as a string. If the text box is empty, then a string is still returned but it is
an empty string.

- "ok" -> string
- "cancel" -> `null`

</details>

---

<details>

<summary><strong>B: </strong><code>undefined</code></summary>
<br>

✖ Nope.

`alert` returns `undefined`, but `prompt` can never return `undefined`.

`prompt` can only return `null` or a string:

- "ok" -> string
- "cancel" -> `null`

</details>

---

<details>

<summary><strong>C: </strong>an empty string</summary>
<br>

✔ Correct!

When the user clicks "ok" a string will be returned no matter what they typed,
even if they didn't type anything!

`null` is only returned when the user cancels, no matter what they typed:

- "ok" -> string
- "cancel" -> `null`

Always.

</details>

---

<details>
<summary><strong>D: </strong>trick question! the prompt keeps popping up until the user types something</summary>
<br>

✖ Nope.

A prompt will go away after the user clicks "ok" or "cancel", no matter what the
user typed in the text box:

```js
'use strict';

let input = prompt('do whatever you want');

console.log(input);
```

The prompt in the Cat Detector keeps popping up because it is in a while loop,
not because it's a prompt. The while loop repeats it's body until the input is
not `null`. Because the `prompt` is in the loop body it pops up over and over
again until the user clicks "ok" and the input is a string.

`prompt` is being called once for every time you see a pop-up box (try using the
_trace_ button to see this in the console):

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('click "ok"');
}

console.log(input);
```

</details>
