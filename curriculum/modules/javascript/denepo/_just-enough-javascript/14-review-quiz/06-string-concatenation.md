# String Concatenation

How can you make the string `'abc'`?

---

<details>
<summary><strong>A: </strong> <code>'a + b + c'</code></summary>
<br>

✖ Nope.

This is one long string: `'a + b + c'`. The `+`s are inside the quotation marks
so they're interpreted as the _character_ `+` not the concatenation operator.

</details>

---

<details>

<summary><strong>B: </strong> <code>a '+' b '+' c</code></summary>
<br>

✖ Nope.

Because the quotation marks are around the `+` signs and not the letters, this
line of code is actually 3 variables (`a`, `b`, `c`) and two strings (`'+'`,
`'+'`).

This doesn't mean anything in JavaScript, it will throw an error.

</details>

---

<details>

<summary><strong>C: </strong> <code>'a' + 'b' + 'c'</code></summary>
<br>

✔ Correct!

</details>

---

<details>
<summary><strong>D: </strong> <code>a + b + c</code></summary>
<br>

✖ Nope (probably).

Because there are no quotation marks around the letters, they are variables not
strings.

It's possible that this line of code would produce `'abc'`, but it's impossible
to say without knowing what values are stored in the 3 variables.

</details>

---
