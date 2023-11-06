---
title: "{{ WDX:WEEK }} | {{ WDX:TITLE }}"
---

<h1 id="{{ {{ WDX:WEEK }}-{{ WDX:title }} | slugify }}">
  <span class="week-prefix">{{ WDX:WEEK }} |</span> {{ WDX:TITLE }}
</h1>

_(Updated: {{ WDX:DATE_UPDATED }})_

---

{{ WDX:WEEKLY_CONTENT }}

<hr class="mt-1">

{{ WDX:INCLUDES:weekly_feedback_reminder }}

{{ WDX:INCLUDES:weekly_suggestions }}