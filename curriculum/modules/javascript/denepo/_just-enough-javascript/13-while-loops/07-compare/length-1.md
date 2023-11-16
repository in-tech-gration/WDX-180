# Quiz

> #todo

## Length 1

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
while (a === null || a.length <= 5) {
  a = prompt('');
}

alert(a);
```

</td>
<td>

```js
'use strict';

let a = null;
while (a === null || a.length < 4) {
  a = prompt('');
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
