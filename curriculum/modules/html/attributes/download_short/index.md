---
title: A HTML Download attribute in all browsers!
---

# HTML Shorts

## Umar Hansa: A HTML Download attribute in all browsers!

- Watch the [**video**](https://www.youtube.com/shorts/nIcxzmiVFJg){:target="_blank"}

<iframe width="100%" height="480" src="https://www.youtube.com/embed/nIcxzmiVFJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border: 4px solid red;"></iframe>

- Check the [MDN page on `HTMLAnchorElement: download property`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/download){:target="_blank"}

- Experiment with the code below:
  - We **highly recommend** that you first check the code, then tweak it and play around with it and lastly clear the code and try to replicate the example from scratch.

```html
<style>
body, section { background: white; }
</style>
<section>
  <hr/>
  <a download="my-fancy-cat.jpg" href="cat.jpg">
    <img src="cat.jpg" width="50%"/>
  </a>
  <hr/>
  <a download="some/long/path/my-cat.jpg" href="cat.jpg">
    Download cat pics
  </a>
  <hr/>
  <a download href="config.json">
    Download your JSON config
  </a>
</section>
```

