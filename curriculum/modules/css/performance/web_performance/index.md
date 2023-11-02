---
title: Web Performance & CSS Pre-processors
---

### Schedule

  - [Study](#study-plan-4)

### Study Plan

  <!-- WDX:META:PROGRESS:task=Read 'The why of web performance' -->
  - [Read: **The "why" of web performance**](https://developer.mozilla.org/en-US/docs/Learn/Performance/why_web_performance){:target="_blank"}
    - Level: Beginner

  <!-- WDX:META:PROGRESS:task=Read 'What is web performance?' -->
  - [Read: **What is web performance?**](https://developer.mozilla.org/en-US/docs/Learn/Performance/What_is_web_performance){:target="_blank"}
    - Level: Beginner

  ![](./assets/panda-waving-2x.png)

  - **TIP:** let's bookmark and use a really useful tool that will our compress images, cutting down their size oftentimes to more than 50% thus improving the loading times of our web pages. Find an old (group?) project, drag and drop all the images into the [**TinyPNG**](https://tinypng.com/){:target="_blank"} page, then download the compressed version and compare the difference in size and loading times. Keep in mind, that **TinyPNG** can compress all sorts of images types, not just `.png`.

  <!-- WDX:META:PROGRESS:task=Read 'Perceived performance' -->
  - [Read: **Perceived performance**](https://developer.mozilla.org/en-US/docs/Learn/Performance/Perceived_performance){:target="_blank"}
    - Level: Beginner

  <!-- WDX:META:PROGRESS:task=Watch 'CSS Preprocessors' -->
  - [Watch: **CSS Preprocessors**](https://www.youtube.com/watch?v=PJkWbezpHpE){:target="_blank"} to learn about an important Frontend family of tools called **CSS Preprocessors** such as LESS, SASS, Stylus, etc.
    - **Description:** In this video we look at the wonderful world of CSS Preprocessors and a few of the awesome things that you can do with CSS Preprocessors, and look at a few of the more popular ones; LESS, Sass (SCSS), and Stylus.
    - **Duration:** 12min
    - **Notes:** if you are wondering about the vendor prefixes mentioned in the video _(-webkit, -moz, etc.)_, make sure to check out the [related MDN article](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix). 

  <!-- WDX:META:PROGRESS:task=Install the 'Live Sass Compiler' VSCode extension -->
  - Let's add a powerful tool to our Web Dev toolset before moving on: install the [**Live Sass Compiler VSCode Extension**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass){:target="_blank"}

  <!-- WDX:META:PROGRESS:task=Watch the 'Learn Sass In 20 Minutes' video and code along -->
  - Now watch the [**Learn Sass In 20 Minutes**](https://www.youtube.com/watch?v=Zz6eOVaaelI){:target="_blank"} video and code along in SASS!
    - **Duration:** 20min

### Summary

### Exercises

  <!-- WDX:META:PROGRESS:task=Complete the exercise with Google Lighthouse -->
  There a lot of tools that can help a web developer check how good the performance of a website is. One of the best out there, and open source, is **Google Lighthouse**. Check the video below that covers the absolute basics of this simple but helpful tool

  [Watch: **What Is Google Lighthouse and How to Use It?**](https://www.youtube.com/watch?v=VyaHwvPWuZU){:target="_blank"}

  After watching the video, it's time to give it a go by following these steps:

  <!-- TODO: Replace week01 + exercises-3 with dynamic links. There should be no references to particular Weeks or Days inside the Modules content -->
  - Head over to your GitHub Page where your solution from [the **Styling the world’s first website** exercise](/WDX-180/curriculum/week01/index.html#exercises-3){:target="_blank"} is published.
    - If you have not completed this exercise, now it's time to do so!
    <!-- TODO: Same as above. Replace references to weeks and days. -->
    - If you followed correctly the instructions provided you can find your solution following this link `https://<GITHUB_USERNAME>.github.io/WDX-180/user/week01/exercises/day04/cern/index.html` by replacing `<GITHUB_USERNAME>` with your username.
  - While on this page, open Lighthouse, in any way you prefer (we're suggesting using the Chrome Dev Tools), and initiate a report for `Desktop` device by checking the following categories: `Performance`, `Accessibility`, `Best Practices`, `SEO`.
  - After the report is finished, check thoroughly what changes can be made to increase the score in any of the 4 categories, and try to improve your site's performance as much as possible!

  The goal is to have a score on all categories over 90. **Let's start analyzing this webpage**!

### Extra Resources

### Sources and Attributions