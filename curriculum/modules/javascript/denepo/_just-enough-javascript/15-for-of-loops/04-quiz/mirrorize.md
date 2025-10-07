# Quiz

> #todo

## Mirrorize

Which line can be placed in the blank to make a loop that mirrors the input?
There may be more than 1 correct answer!

> _hint_: use a trace table to study each program's behavior before making a
> guess.

```js
'use strict';

let text = 'abc';

let mirrored = '|';
for (let char of text) {
  __;
}

console.log(mirrored); // 'cba|abc'
```

---

<details>
<summary>A: <code>mirrored = char + mirrored;</code></summary>
<br>

✖ Nope.

Close! This is line contains one half of the correct solution.

This is how you _reverse_ a string. The characters from `"abc"` will be added in
order to the _front_ of the `mirrored` string. The final log will be:

- `"cba|"`

</details>

---

<details>
<summary>B: <code>mirrored = mirrored + char;</code></summary>
<br>

✖ Nope.

Close! This is line contains one half of the correct solution.

This line of code will just rebuild the original text one character at a time,
adding each one to the _end_ of the growing string. The final log will be:

- `"|abc"`

</details>

---

<details>
<summary>C: <code>mirrored = char + mirrored + char;</code></summary>
<br>

✔ Correct!

With each iteration, this line of code will add the same character to both end
of the `mirrored` string. The final result will be a string with the reversed
text on the left, and the original text on the right:

- `"cba|abc"`

</details>

---

<details>
<summary>D: <code>mirrored = mirrored + char + mirrored;</code></summary>
<br>

✖ Nope.

Much cooler, but not correct. Can you figure out why the final log looks like
this?

- `"|a|b|a|c|a|b|a|"`

</details>
