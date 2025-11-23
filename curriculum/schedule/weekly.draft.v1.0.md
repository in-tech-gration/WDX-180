---
title: "{{ SGEN:WEEK }} | {{ SGEN:TITLE }}"
---

<hr class="mb-0">

<h1 id="{{ {{ SGEN:WEEK }}-{{ SGEN:title }} | slugify }}">
  <span class="week-prefix">{{ SGEN:WEEK }} |</span> {{ SGEN:TITLE }}
</h1>

{{ SGEN:HEADER_IMAGE }}

<div class="week-controls">

  {% assign week_num = {{ SGEN:WEEK_NUM }} | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = {{ SGEN:WEEK_NUM }} | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: {{ SGEN:DATE_UPDATED }}</span>

  <h2 class="week-controls__next_week">

    {% if week_num < 36 %}

      {% assign next_week_num = {{ SGEN:WEEK_NUM }} | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

<!-- VERSION -->
<hr style="margin-bottom:0" />
<div class="center opacity-50 opacity-100:hover">
  You are viewing v1.0 of this content. To see v2.0 click <a href="index.html">this link</a>.
</div>
<!-- VERSION -->

---

{{ SGEN:WEEKLY_CONTENT }}

<hr class="mt-1">

{{ SGEN:INCLUDES:weekly_feedback_reminder }}

{{ SGEN:INCLUDES:weekly_suggestions }}

{{ SGEN:INCLUDES:comments_section }}