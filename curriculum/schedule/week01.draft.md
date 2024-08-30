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

    {% if week_num <= 36 %}

      {% assign next_week_num = {{ SGEN:WEEK_NUM }} | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- BEFORE SECTION:START -->

![](./assets/colorful.02.png)

**Welcome to the first part of our curriculum, WDX 60°!** 

The goal of this first part, that will span 60 days, is to give you a basic understanding of how computers and the Internet work, how the World Wide Web _(or Web for short)_ which is built on top of them works and connects people and ideas together through the use of these **3 building blocks: HTML, CSS and JavaScript**. By the end of this part of the course, you'd be able to code in these 3 languages and deploy your websites and web applications on the Web.  

Before you dive in, **make sure that you have your notebook** and colored pens besides your computer, in order to pause and take those invaluable notes as you move along the curriculum.

![](./assets/notebook.png)

At this point, it's extremely important to let you know that **sharing solutions** on Slack is **not allowed** and will be removed upon first notice. 

We encourage you to **help and support each other** but in a constructive and helpful manner: guiding other participants towards the right direction by asking questions, providing hints, suggesting alternatives and generally cultivating a problem solving mindset instead of depriving others of the capacity to process a problem by handing them a ready-made solution. 

### Setting up

**Required extension:** Before you start your week, make sure to install the following Extension for VSCode: [VSCode WDX Extension Pack](https://marketplace.visualstudio.com/items?itemName=kostasx.vscode-wdx-extension-pack){:target="_blank"}. 

This is an `Extension Pack`, which automatically installs various extensions that are recommended for your first steps. Check the **Included Extensions** section to find out more about the extensions.

Please, don't forget to star our [GitHub repo](https://github.com/in-tech-gration/VSCode-WDX-Extension-Pack){:target="_blank"} and subscribe to our [YouTube Channel](https://www.youtube.com/@in-tech-gration){:target="_blank"}. 🙏

**Let's get started!**

<!-- BEFORE SECTION:END -->

{{ SGEN:WEEKLY_CONTENT }}

<hr class="mt-1">

{{ SGEN:INCLUDES:weekly_feedback_reminder }}

{{ SGEN:INCLUDES:weekly_suggestions }}

{{ SGEN:INCLUDES:comments_section }}