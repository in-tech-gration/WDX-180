# Quiz

> #todo

## Error 1

```js
'use strict';

{
  let animal = 'dog'; // line 4
  console.log(animal); // line 5
}

console.log(animal); // line 8
```

---

<details>
<summary><strong>1. Which error will be thrown by this code?</strong></summary>
<br>

<details>
<summary><em>A. SyntaxError</em></summary>
<br>

✖ Nope.

There are not two variables declared with the same name, so there is no syntax
error.

</details>
<details>
<summary><em>B. ReferenceError</em></summary>
<br>

✔ Correct!

_ReferenceErrors_ happen when you try to use a variable that was never declared.

The `animal` variable was declared in this program, but it was declared _inside_
the block so it is not available outside the block. When you try to use it
_outside_ of the block on line 8, this will throw an error.

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

Nope, line 4 is ok. This is where the `animal` variable is declared _inside_ the
block.

</details>
<details>
<summary><em>B. line 5</em></summary>
<br>

Nope, line 5 is ok. The `animal` variable is read _inside_ the block where it
was declared. That is allowed!

</details>
<details>
<summary><em>C. line 8</em></summary>
<br>

✔ Correct!

The `animal` variable was declared in this program, but it was declared _inside_
the block so it is not available outside the block. When you try to use it
_outside_ of the block on line 8, this will throw an error.

</details>

</details>
