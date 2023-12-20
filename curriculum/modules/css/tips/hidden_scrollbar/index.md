---
title: The scroll bar you didn't know you needed! 
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

# CSS Shorts

## Author: Kevin Powell: The scroll bar you didn't know you needed!

- Watch the [**video**](https://www.youtube.com/shorts/ZFhPGfLfSa8){:target="_blank"}

<iframe width="100%" height="480" src="https://www.youtube.com/embed/ZFhPGfLfSa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border: 4px solid red;"></iframe>

- Check the [MDN page on `scrollbar-gutter`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter){:target="_blank"}

- Experiment with the code below:
  - We **highly recommend** that you first check the code, then tweak it and play around with it and lastly clear the code and try to replicate the example from scratch.

```html
<style>
body, section { background: white; }
section .floating-scrollbar {
  max-height: 50vh;
  padding: 1rem;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(210,93,174,1) 36%, rgba(197,100,179,1) 39%, rgba(0,212,255,1) 100%);
  overflow-y: auto;
}
</style>
<section>
  <div class="floating-scrollbar">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</section>
```

[&#9658; Live coding](#flems-enable)

 