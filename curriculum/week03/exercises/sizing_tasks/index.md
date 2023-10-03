---
title: "Test your skills: Sizing"
slug: Learn/CSS/Building_blocks/Sizing_tasks
page-type: learn-module-assessment
---

# Test your skills: Sizing

_(Updated: 13/09/2023)_

The aim of this skill test is to assess whether you understand the different ways of [sizing items in CSS](../../resources/css_building_blocks/sizing_items_in_css/index.md).

> **Note:**If you get stuck, then ask us for help!

## Task 1

In this task, you have two boxes. The first should be sized so that the height will be at least 100 pixels tall, even if there is less content that would cause it to grow to that height. However, the content should not overflow if there is more content than fits in 100 pixels. Test this box by removing the content from the HTML to make sure you still get a 100 pixel tall box even with no content.

The second box should be fixed at 100 pixels tall, so that content will overflow if there is too much.

[Download the starting point for this task](assets/height-min-height-download.html) to work in your own editor or in an online editor.

![Two boxes one with overflowing content](assets/mdn-sizing-height-min-height.png)

## Task 2

In this task, you have a box, which contains another box. Your task is to make the inner box 60% of the width of the outer box. The value of the [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) property is set to `border-box`, which means that the total width includes any padding and border. You should also give the inner box padding of 10% using the width (or inline size) as the size from which that percentage is calculated.

[Download the starting point for this task](assets/percentages-download.html) to work in your own editor or in an online editor.

Your final result should look like the image below:

![A box with another box nested inside](assets/mdn-sizing-percentages.png)

## Task 3

In this task, you have two images in boxes. One image is smaller than the box, the other is larger and breaking out of the box. If you imagine that the box is responsive and therefore could grow and shrink, which property would you apply to the image so that the large image shrinks down into the box but the small image does not stretch.

[Download the starting point for this task](assets/max-width-download.html) to work in your own editor or in an online editor.

Your final result should look like the images below:

![Two boxes with images in](assets/mdn-sizing-max-width.png)

### Sources and Attributions

**Content is based on the following sources:**

- **MDN:**
  - [Test your skills: Sizing](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/de7d710496266ccf4fce5ade75a67e6605f60ce5/files/en-us/learn/css/building_blocks/sizing_tasks/index.md){:target="_blank"}
