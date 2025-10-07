---
title: Week 12 | Practice Week
---

<hr class="mb-0">

<h1 id="{{ Week 12-Practice Week | slugify }}">
  <span class="week-prefix">Week 12 |</span> Practice Week
</h1>

<div class="week-controls">

  {% assign week_num = 12 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 12 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 08/11/2024</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 12 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<h2>Week 12 Content</h2>

Greetings fellow future web developers! 

If you've reached this point, it means that you have successfully completed all the previous content of our curriculum. That's not an easy feat. **Congratulations!**

Since the beginning of our journey we retook **Week 01**, due to its heavy loaded content, so this content (week 12) can be safely skipped.

We kindly request that you to move to **Week 13 - Intermediate JavaScript: Promises & Scope (var, let, const)** by clicking on the next week arrow on the top of the page!

<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

---

<!-- COMMENTS: -->
<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>