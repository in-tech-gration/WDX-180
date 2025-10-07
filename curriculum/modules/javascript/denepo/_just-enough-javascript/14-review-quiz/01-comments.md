# Comments

Which of these are correct ways to write a comment?

---

<details>
<summary><strong>A: </strong> <code>/* ...</code></summary>
<br>

✖ Nope.

This is how you _open_ a block comment, but you also need to close a block
comment with `\*/

`. If you do not close the comment the program with throw an error:

```js
'use strict';

/*
```

</details>

---

<details>
<summary><strong>B: </strong> <code>// ...</code></summary>
<br>

✔ Correct!

This is how you can write an **inline comment**:

```js
'use strict';

// beautiful button goes here
```

</details>

---

<details>

<summary><strong>C: </strong> <code>/*...*/

</code></summary> <br>

✔ Correct!

This is how you can write a **block comment**:

```js
'use strict';

/*
  one fish
  two fish
  red fish
  blue ...
*/

console.log('fish');
```

</details>

---

<details>

<summary><strong>D: </strong> <code>/ ... /</code></summary>
<br>

✖ Nope.

Writing something between two slashes `/` in JavaScript creates a _regular
expression_. You don't need to know this yet.

</details>

---
