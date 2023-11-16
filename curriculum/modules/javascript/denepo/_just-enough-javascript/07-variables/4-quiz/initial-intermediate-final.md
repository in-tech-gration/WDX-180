# Quiz

> #todo

## Initial, Intermediate and Final Value

```js
'use strict';

let animal = 'dog'; // line 3

console.log(animal); // line 5

animal = 'cat'; // line 7
```

---

<details>
<summary><strong>1. What is the initial value of the variable?</strong></summary>
<br>

<details>
<summary><em>A. "animal"</em></summary>
<br>

✖ Nope.

`"animal"` is the _name_ of the variable, not the value stored inside it.

The only way to have `"animal"` initialized in our variable would be like this:

```js
let animal = 'animal';
```

</details>
<details>
<summary><em>B. "dog"</em></summary>
<br>

Yup! `"dog"` is the _initial value_ of our variable.

It will later be assigned a different value, but it is initialized with `"dog"`

</details>
<details>
<summary><em>C. "cat"</em></summary>
<br>

✖ Nope.

"cat" _is_ assigned to our variable, but _after_ the variable has been declared
and initialized.

</details>

</details>

---

<details>
<summary><strong>2. What will be logged to the console?</strong></summary>
<br>

<details>
<summary><em>A. "animal"</em></summary>
<br>

✖ Nope.

`"animal"` is the _name_ of the variable, not the value stored inside it.

When you log a variable to the console the _value_ will be displayed.

</details>
<details>
<summary><em>B. "dog"</em></summary>
<br>

✔ Correct!

The log statement is _before_ the reassignment, so it will log the first value
stored in `animal`.

</details>
<details>
<summary><em>C. "cat"</em></summary>
<br>

✖ Nope.

"cat" is assigned to `animal` _after_ the log statement.

</details>

</details>

---

<details>
<summary><strong>3. What is the final value of the variable?</strong></summary>
<br>

<details>
<summary><em>A. "animal"</em></summary>
<br>

✖ Nope.

`"animal"` is the _name_ of the variable, not the value stored inside it.

the only way to have `"animal"` stored in our variable would be to _assign_ that
string value:

```js
let animal = 'dog';

animal = 'animal';
```

</details>
<details>
<summary><em>B. "dog"</em></summary>
<br>

✖ Nope.

`"dog"` is the _initial value_ of our variable, but the variable is reassigned
on the last line.

</details>
<details>
<summary><em>C. "cat"</em></summary>
<br>

✔ Correct!

"cat" is the last value assigned to the variable in this program, so it's final
value will be "cat".

</details>

</details>
