---
title: "Test your skills: Writing modes and logical properties"
slug: Learn/CSS/Building_blocks/Writing_Modes_Tasks
page-type: learn-module-assessment
---

# Test your skills: Writing modes and logical properties

_(Updated: 10/10/2023)_

The aim of this skill test is to assess whether you understand how to [handle different text directions using writing modes and logical properties in CSS](../../resources/css_building_blocks/handling_different_text_directions/index.md).

> **Note:** If you get stuck, then ask us for help!

## Task 1

In this task, the box is displayed with a horizontal writing mode. Can you add a line of CSS to change it so it uses a vertical writing mode with right to left text?

Copy and paste the code below in a file named `writing-mode.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Writing Modes Task 1: The writing-mode property</title>
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
        border: 5px solid rebeccapurple;
        background-color: lightgray;
        padding: 40px;
        margin: 40px;
      }
    </style>
  </head>

  <body>
    <div class="box">Turn me on my side.</div>
  </body>

</html>
```

Your final result should look like the image below:

![A box with a vertical writing mode](assets/mdn-writing-modes1.png)

When you're ready, move the files in the following path `user/week03/exercises/weekend/writing_modes_tasks/task01/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/weekend/writing_modes_tasks/task01/`
- `git commit -m "writing_modes_tasks_task01"`
- `git push`

## Task 2

In this task, we want you to use logical properties to replace `width` and `height` in order to maintain the aspect ratio of the box as it is turned vertically.

Copy and paste the code below in a file named `logical-width-height.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Writing Modes Task 2: Logical width and height</title>
    <link rel="stylesheet" href="../styles.css"/>
    <style>
      body {
        background-color: #fff;
        color: #333;
        font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 1em;
        margin: 0;
      }
      .vertical {
        writing-mode: vertical-rl;
      }

      .box {
        border: 5px solid rebeccapurple;
        background-color: lightgray;
        padding: 40px;
        margin: 40px;
        width: 200px;
        height: 100px;
      }
    </style>
  </head>

  <body>

    <div class="box">Horizontal.</div>
    <div class="box vertical">Vertical.</div>

  </body>

</html>
```

Your final result should look like the image below:

![Two boxes one horizontal the other vertical](assets/mdn-writing-modes2.png)

When you're ready, move the files in the following path `user/week03/exercises/weekend/writing_modes_tasks/task02/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/weekend/writing_modes_tasks/task02/`
- `git commit -m "writing_modes_tasks_task02"`
- `git push`

## Task 3

In this task, we want you to use logical versions of the margin, border, and padding properties so that the edges of the box relate to the text rather than following top, left, bottom and right.

Copy and paste the code below in a file named `logical-mbp.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Writing Modes Task 3: Logical Margin, Border, Padding</title>
    <link rel="stylesheet" href="../styles.css"/>
    <style>
      body {
        background-color: #fff;
        color: #333;
        font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 1em;
        margin: 0;
      }

      .vertical {
        writing-mode: vertical-rl;
      }
      .box {
        width: 150px;
        height: 150px;
        border-top: 5px solid rebeccapurple;
        border-right: 5px solid grey;
        border-bottom: 5px dotted red;
        border-left: 5px dotted blue;
        padding-top: 40px;
        margin-bottom: 30px;
      }
    </style>
  </head>

  <body>

    <div class="box">Horizontal.</div>
    <div class="box vertical">Vertical.</div>

  </body>

</html>
```

Your final result should look like the image below:

![Two boxes one horizontal one vertical with different margin, border and padding](assets/mdn-writing-modes3.png)

When you're ready, move the files in the following path `user/week03/exercises/weekend/writing_modes_tasks/task03/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/weekend/writing_modes_tasks/task03/`
- `git commit -m "writing_modes_tasks_task03"`
- `git push`

### Sources and Attributions

**Content is based on the following sources:**

- **MDN**
  - [Test your skills: Writing modes and logical properties](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Writing_Modes_Tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/f22e72998f4e8f48b18ef358521bfc9ad1ae9446/files/en-us/learn/css/building_blocks/writing_modes_tasks/index.md){:target="_blank"}