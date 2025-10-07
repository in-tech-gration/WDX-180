---
title: A quick & fun CSS animation effect 
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

# CSS Shorts

## Kevin Powell: A quick & fun CSS animation effect

- Watch the [**video**](https://www.youtube.com/shorts/TgOWjuOweHQ){:target="_blank"}

<iframe width="100%" height="480" src="https://www.youtube.com/embed/TgOWjuOweHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border: 4px solid red;"></iframe>

- Check the [MDN page on `scale`](https://developer.mozilla.org/en-US/docs/Web/CSS/scale){:target="_blank"}

- Check the [MDN page on `transform-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin){:target="_blank"}

- Experiment with the code below:
  - We **highly recommend** that you first check the code, then tweak it and play around with it and lastly clear the code and try to replicate the example from scratch.

```html
<style>
body, section { background: white; }
.button {
  --color: hsl(208, 72%, 39%);
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  border: 3px solid var(--color);
  color: black;
  padding: .5em 1em;
  border-radius: .25em;

  position: relative;
  isolation: isolate;
}

.button::after {
  content: '';
  position: absolute; 
  z-index: -1;
  background: var(--color);
  inset: 0;

  scale: 0 1;
  transform-origin: right;
  transition: scale 450ms;
}

.button:hover::after, .button:focus-visible::after {
  transform-origin: left;
  scale: 1 1;
}
</style>
<section>
  <button class="button">Simple Animation</button>
</section>
```

[&#9658; Live coding](#flems-enable)

