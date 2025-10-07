# Quiz

> #todo

## Filter 2

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

let b = '0123456789';

let c = '';
for (let d of a) {
  if (b.includes(d)) {
    c = c + d;
  }
}

alert(c);
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
  if (
    c === '0' ||
    c === '1' ||
    c === '2' ||
    c === '3' ||
    c === '4' ||
    c === '5' ||
    c === '6' ||
    c === '7' ||
    c === '8' ||
    c === '9'
  ) {
    b = b + c;
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

✔ Yup!

</details>
