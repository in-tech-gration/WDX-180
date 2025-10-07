# Quiz

> #todo

## Impossible Output

Which value is it impossible for this program to alert? There may be more than 1
correct answer!

```js
'use strict';

let input = null; // line 3

while (input === null || input === '') {
  input = confirm('enter some text'); // line 6
}

alert(input); // line 9
```

---

<details>
<summary><strong>A: <code>null</code></strong></summary>
<br>

✖ Nope.

Look carefully at the interaction on line 6, what values can it return?

</details>

---

<details>
<summary><strong>B: <code>""</code> (empty string)</strong></summary>
<br>

✖ Nope.

Look carefully at the interaction on line 6, what values can it return?

</details>

---

<details>
<summary><strong>C: any non-empty string</strong></summary>
<br>

✖ Nope.

Look carefully at the interaction on line 6, what values can it return?

</details>

---

<details>
<summary><strong>D: trick question, they're all IMpossible</strong></summary>
<br>

✔ Correct!

Look carefully at the interaction on line 6, what values can it return?

Line 6 uses `confirm` which can only return `true` or `false`. Usually programs
you've seen with this pattern will use `prompt`, so it's easy to overlook this
detail. But programming is all about details!

</details>

---

<details>
<summary><strong>D: trick question, they're all possible</strong></summary>
<br>

✖ Nope.

Look carefully at the interaction on line 6, what values can it return?

</details>
