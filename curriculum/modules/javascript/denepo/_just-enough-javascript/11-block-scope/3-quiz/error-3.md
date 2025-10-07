# Quiz

> #todo

## Error 3

```js
'use strict';

let animal = 'cat'; // line 3

{
  let animal = 'dog'; // line 6
  console.log(animal); // line 7
}

console.log(animal); // line 10
```

---

<details>
<summary><strong>1. Which error will be thrown by this code?</strong></summary>
<br>

<details>
<summary><em>A. SyntaxError</em></summary>
<br>

✖ Nope.

There _are_ two variables declared with the same name, but they are declared in
_different_ scopes so there is no error.

</details>
<details>
<summary><em>B. ReferenceError</em></summary>
<br>

✖ Nope.

The `animal` variable declared in the _outer scope_ (line 3) is still available
_after_ the block scope has closed on line 10. So no error!

</details>
<details>
<summary><em>C. Trick question, there is no error!</em></summary>
<br>

✔ Correct!

There is no error in this program. The `animal` variable declared on line 3 is
still available on line 10 _after_ the block scope has closed.

It is allowed to declare variables with the same name in different scopes, this
is called _shadowing_. JavaScript won't throw an error but it does makes your
code harder to understand so try to avoid it.

</details>

</details>

---

<details>
<summary><strong>2. On which line will the error occur?</strong></summary>
<br>

<details>
<summary><em>A. line 3</em></summary>
<br>

✖ Nope.

The variable declaration on line 3 does have the same name as the variable
declared on line 6, but they are both declared in _different scopes_.

It is possible to declare variables with the same name in different scopes.

</details>
<details>
<summary><em>B. line 6</em></summary>
<br>

✖ Nope.

You may think this is an error because another variable named `animal` has been
declared, but it's not an error!

Because both variables are declared in _different scopes_ there is no error on
line 6.

</details>
<details>
<summary><em>C. line 10</em></summary>
<br>

✖ Nope.

Line 10 is ok because the variable declared in the _outer scope_ on line 3 is
still available _after_ the inner scope has closed.

So line 10 is logging the variable declared on line 3, not on line 6!

</details>

</details>

---

<details>
<summary><strong>3. What will be logged to the console?</strong></summary>
<br>

<details>
<summary><em>A. <code>"dog"</code> then <code>"dog"</code></em></summary>
<br>

✖ Nope.

The log on line 7 will print `"dog"`, but the log on line 10 will not.

By the time the program reaches line 10 the inner scope will be closed and the
variable storing `"dog"` no longer exists. Line 10 will log the value stored in
the _outer scope_ variable declared on line 3.

</details>
<details>
<summary><em>B.  <code>"cat"</code> then <code>"dog"</code></em></summary>
<br>

✖ Nope.

Neither of these logs are correct.

The first log on line 7 will not be `"cat"` because it is _inside_ the block
scope. It will log the value stored by the _inner_ `animal` variable.

The second log on line 10 will not be `"dog"` because it is _outside_ the block
scope. It will log the value stored by the _outer_ `animal` variable.

</details>
<details>
<summary><em>C.  <code>"dog"</code> then <code>"cat"</code></em></summary>
<br>

✔ Correct!

The first log on line 7 is _inside_ the block scope so it will log the _inner_
`animal` variable. Since line 6 initializes `animal` with the value `"dog"`, we
will see `"dog"` logged on line 7.

The second log on line 10 is _outside_ the block scope so it will log the
_outer_ `animal` variable. Since line 3 initializes `animal` with the value
`"cag"`, we will see `"cat"` logged on line 10.

</details>
<details>
<summary><em>D.  <code>"cat"</code> then <code>"cat"</code></em></summary>
<br>

✖ Nope.

The log on line 10 will print `"cat"`, but the log on line 7 will not.

Line 7 is _inside_ the block scope so it will read the variable declared on line
6, this _is not_ the same variable that was declared on line 3 in the _outer
scope_. Line 7 will log the value stored by the variable declared on line 6.

</details>

</details>
