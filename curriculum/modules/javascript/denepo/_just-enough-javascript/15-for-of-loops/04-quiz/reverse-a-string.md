# Quiz

> #todo

## Reverse a String

Which of the following programs will reverse the text and log `"ydwoh"`? There
may be more than one correct answer!

> _hint_: use a trace table to study each program's behavior before making a
> guess.

---

### Program 1

```js
'use strict';

let text = 'howdy';

let reversed = '';
for (let char of text) {
  reversed = reversed + char;
}

console.log(reversed);
```

<details>
<summary><strong>check it</strong></summary>
<br>

✖ Nope.

With each iteration of the loop the program will add the next letter from
`"howdy"` to the end of `reversed`. Because `reversed` starts out as an empty,
by the end of the program it will just be `"howdy"`.

The final log will be:

- `"howdy"`

</details>

---

### Program 2

```js
'use strict';

let text = 'howdy';

for (let char of text) {
  text = text + char;
}

console.log(text);
```

<details>
<summary><strong>check it</strong></summary>
<br>

✖ Nope.

With each iteration of the loop the program will add the next letter from
`"howdy"` to the end of `text`. Because `text` starts out as `"howdy"`, by the
end of the program it will be `"howdyhowdy"`.

The final log will be:

- `"howdyhowdy"`

</details>

---

### Program 3

```js
'use strict';

let text = 'howdy';

let reversed = '';
for (let char of text) {
  reversed = char + reversed;
}

console.log(reversed);
```

<details>
<summary><strong>check it</strong></summary>
<br>

✔ Correct!

With each iteration of the loop the program will add the next letter from
`"howdy"` to the _beginning_ of `reversed`. Because `reversed` starts out as an
empty string, by the end of the program it will be `"ydwoh"`.

The final log will be:

- `"ydwoh"`

</details>

---

### Program 4

```js
'use strict';

let text = 'howdy';

for (let char of text) {
  text = char + text;
}

console.log(text);
```

<details>
<summary><strong>check it</strong></summary>
<br>

✖ Nope.

With each iteration of the loop the program will add the next letter from
`"howdy"` to the _beginning_ of `text`. Because `text` starts out as `"howdy"`,
by the end of the program it will be `"ydwohhowdy"`.

The final log will be:

- `"ydwohhowdy"`

</details>
