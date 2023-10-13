---
title: "Test your skills: Overflow"
slug: Learn/CSS/Building_blocks/Overflow_Tasks
page-type: learn-module-assessment
---

# Test your skills: Overflow

_(Updated: 10/10/2023)_

The aim of this skill test is to assess whether you understand [overflow in CSS and how to manage it](../../resources/css_building_blocks/overflowing_content/index.md).

> **Note:** If you get stuck, then ask us for help!

## Task 1

In this task, the content is overflowing the box because it has a fixed height. Keep the height but cause the box to have scrollbars only if there is enough text to cause an overflow. Test by removing some of the text from the HTML, that if there is only a small amount of text that does not overflow, no scrollbar appears.

Copy and paste the code below in a file named `overflow-scroll.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Overflow Task 1: Making a scrollable box</title>
    <link rel="stylesheet" href="../styles.css" />
    <style>
      body {
        background-color: #fff;
        color: #333;
        font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 1em;
        margin: 0;
      }

      .box {
        border: 5px solid black;
        padding: 1em;
        height: 200px;
        width: 300px;
      }
    </style>
  </head>

  <body>
    <div class="box">
      <p>
        Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
        onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
      </p>

      <p>
        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
        courgette tatsoi pea sprouts fava bean collard greens dandelion okra
        wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
      </p>
    </div>
  </body>
</html>
```

Your final result should look like the image below:

![A small box with a border and a vertical scrollbar.](assets/mdn-overflow1.png)

When you're ready, move the files in the following path `user/week03/exercises/day05/overflow_tasks/task01/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day05/overflow_tasks/task01/`
- `git commit -m "overflow_tasks_task01"`
- `git push`

## Task 2

In this task, there is an image in the box that is bigger than the dimensions of the box so that it overflows visibly. Change it so that any image outside of the box is hidden.

Copy and paste the code below in a file named `overflow-hidden.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Overflow Task 2: Hiding overflow</title>
    <link rel="stylesheet" href="../styles.css"/>
    <style>
      body {
        background-color: #fff;
        color: #333;
        font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 1em;
        margin: 0;
      }

      .box {
        border: 5px solid black;
        height: 200px;
        width: 300px;
      }
    </style>
  </head>

  <body>

    <div class="box">
      <img src="flowers.jpg" alt="flowers">
    </div>

  </body>

</html>
```

Your final result should look like the image below:

![A box with an image which fills the box but does not spill out the edges.](assets/mdn-overflow2.png)

When you're ready, move the files in the following path `user/week03/exercises/day05/overflow_tasks/task02/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day05/overflow_tasks/task02/`
- `git commit -m "overflow_tasks_task02"`
- `git push`

### Sources and Attributions

**Content is based on the following sources:**

- **MDN**
  - [Test yours skills: Overflow](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflow_Tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/d45f6c3733728f0eefdb7fd4b9a84c4858b35fd1/files/en-us/learn/css/building_blocks/overflow_tasks/index.md){:target="_blank"}