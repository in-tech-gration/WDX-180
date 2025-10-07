---
title: "Tricks for targeting elements with CSS Attribute Selectors"
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
tags: css, css selectors, attribute selector
---

# CSS Attribute Selectors

## Umar Hansa: Tricks for targeting elements with CSS Attribute Selectors

- Watch the [**video**](https://www.youtube.com/shorts/_018ufHLBII){:target="_blank"}

<iframe width="100%" height="480" src="https://www.youtube.com/embed/_018ufHLBII?si=dos8CMtCZioA97iI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border: 4px solid red;"></iframe>

- Check the [MDN page on `Attribute Selectors`](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors){:target="_blank"}

- Experiment with the code below:
  - We **highly recommend** that you first check the code, then tweak it and play around with it and lastly clear the code and try to replicate the example from scratch.

```html
<style>
body, section { background: white; }
a { display: block; }
[title="home" i] { border: 3px solid green; }
[href^="http:"]{ outline: 3px solid red; }
[href$="/"]{ outline: 3px solid pink; }
[href*=".io"]{ border: 3px solid orange; }
</style>
<section>
  <a href="https://umaar.com" title="home">Green Link</a>
  <a href="https://umaar.com">No Styling</a>
  <a href="https://umaar.com" title="HOME">Green Link</a>
  <a href="http://umaar.com">Red Link</a>
  <a href="https://umaar.com/dev-tips">No Styling</a>
  <a href="https://umaar.com/dev-tips/">Pink Link</a>
  <a href="http://umaar.com">Red Link</a>
  <a href="https://umaar.io/dev-tips/">Pink & Orange Link</a>
</section>
```

[&#9658; Live coding](#flems-enable)

