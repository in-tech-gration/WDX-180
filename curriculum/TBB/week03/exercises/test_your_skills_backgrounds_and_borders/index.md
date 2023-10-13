---
title: "Test your skills: Backgrounds and borders"
slug: Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders
page-type: learn-module-assessment
---

# Test your skills: Backgrounds and borders

_(Updated: 10/10/2023)_

The aim of this skill test is to assess whether you understand [backgrounds and borders of boxes in CSS](../../resources/css_building_blocks/backgrounds_and_borders/index.md).

> **Note:** If you get stuck, then ask us for help!

## Task 1

In this task, we want you to add a background, border, and some simple styling to a page header:

1. Give the box a 5px black solid border, with rounded corners of 10px.
2. Add a background image (use the URL `balloons.jpg`) and size it so that it covers the box.
3. Give the `<h2>` a semi-transparent black background color, and make the text white.

Copy and paste the code below in a file named `backgrounds1.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Backgrounds and Borders: Task 1</title>
    <style>
      body {
        background-color: #fff;
        color: #333;
        font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 1em;
        margin: 0;
      }

      * {
        box-sizing: border-box;
      }
      .box {
        width: 500px;
        padding: 0.5em;
      }
    </style>
  </head>

  <body>

    <div class="box">
      <h2>Backgrounds &amp; Borders</h2>
    </div>

  </body>

</html
```

Your final result should look like the image below:

![Images shows a box with a photograph background, rounded border and white text on a semi-transparent black background.](assets/backgrounds-task1.png)

When you're ready, move the files in the following path `user/week03/exercises/day05/test_your_skills_backgrounds_and_borders/task01/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day05/test_your_skills_backgrounds_and_borders/task01/`
- `git commit -m "test_your_skills_backgrounds_and_borders_task01"`
- `git push`

## Task 2

In this task, we want you to add background images, a border, and some other styling to a decorative box:

- Give the box a 5px lightblue border and round the top left corner 20px and the bottom right corner 40px.
- The heading uses the `star.png` image as a background image, with a single centered star on the left and a repeating pattern of stars on the right.
- Make sure that the heading text does not overlay the image, and that it is centered — you will need to use techniques learned in previous lessons to achieve this.

Copy and paste the code below in a file named `backgrounds2.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Backgrounds and Borders: Task 2</title>
    <style>
      body {
        background-color: #fff;
        color: #333;
        font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 1em;
        margin: 0;
      }

      * {
        box-sizing: border-box;
      }
      .box {
        width: 300px;
        padding: 0.5em;
      }
    </style>
  </head>

  <body>

    <div class="box">
      <h2>Backgrounds &amp; Borders</h2>
    </div>

  </body>

</html>
```

Your final result should look like the image below:

![Images shows a box with a blue border rounded at the top left and bottom right corners. On the left of the text is a single star, on the right 3 stars.](assets/backgrounds-task2.png)

When you're ready, move the files in the following path `user/week03/exercises/day05/test_your_skills_backgrounds_and_borders/task02/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day05/test_your_skills_backgrounds_and_borders/task02/`
- `git commit -m "test_your_skills_backgrounds_and_borders_task02"`
- `git push`

### Sources and Attributions

**Content is based on the following sources:**

- **MDN**
  - [Test your skills: Backgrounds and borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/529a4466f00f0f29e11716313a3ceb1f9ce5ce76/files/en-us/learn/css/building_blocks/test_your_skills_backgrounds_and_borders/index.md){:target="_blank"}