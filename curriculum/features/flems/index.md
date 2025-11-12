---
title: Experiments
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

# Let's test some interactive code playground!

3 simple steps to enable a `Flems` live code playground after each code block:

1) Define a coding area using a fenced code block

2) Add a button, directly below the fenced code block using an `#flems-enable` HREF as shown in the example below:

~~~
```js
const a = 42;
const b = 2;
console.log( a * b );
```

[&#9658; Live coding](#flems-enable)
~~~

3) Include the following content in the Markdown Frontmatter:

```
---
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---
```

You are good to go!

Supported languages (at this point): `js` and `html`.

---

**Live Example:**

```js
const a = 42;
const b = 2;
console.log( a * b );
```

[&#9658; Live coding](#flems-enable)

**Live Example #2:**

```js
console.log(Math.random());
```

[&#9658; Live coding #2](#flems-enable)