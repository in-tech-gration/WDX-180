---
title: "{{ WDX:WEEK }} | {{ WDX:TITLE }}"
---

<hr class="mb-0">

<h1 id="{{ {{ WDX:WEEK }}-{{ WDX:title }} | slugify }}">
  <span class="week-prefix">{{ WDX:WEEK }} |</span> {{ WDX:TITLE }}
</h1>

<div class="week-controls">

  <h2 class="week-controls__previous_week">
    <a href="/WDX-180/curriculum/week{{ {{ WDX:WEEK_NUM }} | to_integer | minus: 1 }} }}">Week {{ WDX:WEEK_NUM }} &#8678;</a>
  </h2>

  <span>Updated: {{ WDX:DATE_UPDATED }}</span>

  <h2 class="week-controls__next_week">
    <a href="/WDX-180/curriculum/week{{ {{ WDX:WEEK_NUM }} | to_integer | plus: 1 }} }}">&#8680; Week {{ WDX:WEEK_NUM }}</a>
  </h2>

</div>

---

{{ WDX:WEEKLY_CONTENT }}

<hr class="mt-1">

{{ WDX:INCLUDES:weekly_feedback_reminder }}

{{ WDX:INCLUDES:weekly_suggestions }}