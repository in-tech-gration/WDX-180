---
title: "Select all siblings of an element using :has()" 
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

# CSS Shorts

## Kevin Powell: Select all siblings of an element using :has()

- Watch the [**video**](https://www.youtube.com/shorts/Ue3VUsZwAJ0){:target="_blank"}

- Check the [MDN page on `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has){:target="_blank"}

- Experiment with the code below:

```html
<style>
body, section { background: white; }
section img {
  transition: all 200ms ease;
  cursor: pointer;
}
section img:hover {
  outline: 4px solid indigo;
}
section:has(img:hover) > :not(:hover) {
  opacity: 0.25;
}
</style>
<section>
  <!-- API for Placeholder images: https://placehold.co/ -->
  <img src="https://placehold.co/300x200?text=Slide1" alt="">
  <img src="https://placehold.co/300x200?text=Slide2" alt="">
  <img src="https://placehold.co/300x200?text=Slide3" alt="">
</section>
```

[&#9658; Live coding](#flems-enable)

When an element is hovered, all other siblings change their opacity using one line of CSS!
