---
title: Week 08 | JavaScript Core 2
---

<hr class="mb-0">

<h1 id="{{ Week 08-JavaScript Core 2 | slugify }}">
  <span class="week-prefix">Week 08 |</span> JavaScript Core 2
</h1>

<div class="week-controls">

  {% assign week_num = 08 | to_integer %}

  <h2 class="week-controls__previous_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if false and week_num > 0 %}

      {% assign previous_week_num = 08 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="/WDX-180/curriculum/week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 10/11/2023</span>

  <h2 class="week-controls__next_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if false and week_num <= 36 %}

      {% assign next_week_num = 08 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="/WDX-180/curriculum/week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---



<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

## Week 08 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).