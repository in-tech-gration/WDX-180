---
title: Use JavaScript's new array.at() 
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

# JS Shorts

## Wes Bos: Use JavaScript's new array.at()

- Watch the [**video**](https://www.youtube.com/shorts/ibvMv49qAlI){:target="_blank"}

<iframe width="100%" height="480" src="https://www.youtube.com/embed/ibvMv49qAlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border: 4px solid red;"></iframe>

- Check the [MDN page on `Array.prototype.at()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at){:target="_blank"}

- Experiment with the code below:
  - We **highly recommend** that you first check the code, then tweak it and play around with it and lastly clear the code and try to replicate the example from scratch.

```js
const tops = ['sauce',
'cheese', 'pepperoni',
'sausage', 'peppers',
'onions', 'mushrooms',
'olives'];

console.log("With .at(0): ", tops.at(0)); // sauce
console.log("With .at(1): ", tops.at(1)); // cheese

console.log("With tops[tops.length -1]: ", tops[tops.length -1]);
console.log("With .at(-1): ", tops.at(-1)); // olives
console.log("With .at(-2): ", tops.at(-2)); // mushrooms

console.log("With tops[Math.floor(Math.random() * tops.length)]: ", tops[Math.floor(Math.random() * tops.length)]);

console.log("With .at(Math.random() * tops.length): ", tops.at(Math.random() * tops.length));
```

[&#9658; Live coding](#flems-enable)

