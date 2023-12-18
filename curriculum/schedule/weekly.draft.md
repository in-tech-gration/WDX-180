---
title: "{{ SGEN:WEEK }} | {{ SGEN:TITLE }}"
---

<hr class="mb-0">

<h1 id="{{ {{ SGEN:WEEK }}-{{ SGEN:title }} | slugify }}">
  <span class="week-prefix">{{ SGEN:WEEK }} |</span> {{ SGEN:TITLE }}
</h1>

<div class="week-controls">

  {% assign week_num = {{ SGEN:WEEK_NUM }} | to_integer %}

  <h2 class="week-controls__previous_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if week_num > 0 %}

      {% assign previous_week_num = {{ SGEN:WEEK_NUM }} | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: {{ SGEN:DATE_UPDATED }}</span>

  <h2 class="week-controls__next_week">

    <!-- ADD CHECK FOR WEEK open:true (remove if false) -->
    {% if false and week_num <= 36 %}

      {% assign next_week_num = {{ SGEN:WEEK_NUM }} | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

{{ SGEN:WEEKLY_CONTENT }}

<hr class="mt-1">

{{ SGEN:INCLUDES:weekly_feedback_reminder }}

{{ SGEN:INCLUDES:weekly_suggestions }}