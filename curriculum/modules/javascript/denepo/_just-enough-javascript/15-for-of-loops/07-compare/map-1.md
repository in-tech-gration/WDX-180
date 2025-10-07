# Quiz

> #todo

## Map 1

Do these programs have the same behavior? (_data in, data out_)

<table>
<tr>
<td>

### Program 1

</td>
<td>

### Program 2

</td>
</tr>
<tr>
<td>

```js
'use strict';

let a = null;
while (a === null) {
  a = prompt('');
}

let b = '';
for (let c of a) {
  if (c.toUpperCase() === c) {
    b = b + c.toLowerCase();
  } else {
    b = b + c.toUpperCase();
  }
}

alert(b);
```

</td>
<td>

```js
'use strict';

let a = null;
while (a === null) {
  a = prompt('');
}

let b = '';
for (let c of a) {
  let d = c !== c.toLowerCase();
  if (d) {
    b = b + c.toUpperCase();
  } else {
    b = b + c.toLowerCase();
  }
}

alert(b);
```

</td>
</tr>
</table>

---

---

<details>
<summary><strong>check it</strong></summary>
<br>

✖ Nope.

</details>
