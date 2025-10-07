# Quiz

> #todo

## Enter Something 2

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

let a = prompt('');

let b = 'thank you!';
if (a === '') {
  b = 'nothing?!';
} else if (typeof a !== 'string') {
  b = 'good bye';
}

alert(b);
```

</td>
<td>

```js
'use strict';

let a = prompt('');

let b = 'good bye';
if (typeof a === 'string' && a !== '') {
  b = 'thank you!';
} else if (a !== null) {
  b = 'nothing?!';
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
