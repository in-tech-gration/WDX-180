# Quiz

> #todo

## Flags

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

let b = true;
while (b) {
  let c = prompt('');
  if (c !== null) {
    if (c.length % 2 === 0) {
      a = c.toUpperCase();
    } else {
      a = c.toLowerCase();
    }
    b = false;
  }
}

alert(a);
```

</td>
<td>

```js
'use strict';

let a = null;

let b = false;
while (!b) {
  let c = prompt('');
  if (c !== null) {
    if (c.length % 2 === 0) {
      a = c.toLowerCase();
    } else {
      a = c.toUpperCase();
    }
    b = true;
  }
}

alert(a);
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
