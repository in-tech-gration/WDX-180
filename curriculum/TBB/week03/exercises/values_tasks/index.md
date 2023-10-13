---
title: "Test your skills: Values and units"
slug: Learn/CSS/Building_blocks/Values_tasks
page-type: learn-module-assessment
---

# Test your skills: Values and units

_(Updated: 10/10/2023)_

The aim of this skill test is to assess whether you understand different types of [values and units used in CSS properties](../../resources/css_building_blocks/values_and_units/index.md).

> **Note:** If you get stuck, then ask us for help!

## Task 1

In this task, the first list item has been given a background color using a hex color code. Your task is to complete the CSS using the same color in different formats, plus a final list item where you should make the background semi-opaque.

- The second list item should use RGB color.
- The third should use HSL color.
- The fourth should use RGB color but with the alpha channel set to `0.6`.

You can find conversions for the hex color at [this link](https://convertingcolors.com/hex-color-86DEFA.html){:target="_blank"}. You need to figure out how to use the values in CSS.

Copy and paste the code below in a file named `color.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Values and Units Task 1: color values</title>

    <style>
    body {
        background-color: #fff;
        color: #333;
        font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 1em;
        margin: 0;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        margin: 1em;
        padding: 0.5em;
      }
      .hex {
        background-color: #86DEFA;
      }

      .rgb {
        }

      .hsl {
        }

      .transparency {
        }
    </style>
  </head>

  <body>

    <ul>
      <li class="hex">hex color</li>
      <li class="rgb">RGB color</li>
      <li class="hsl">HSL color</li>
      <li class="transparency">Alpha value 0.6</li>
    </ul>

  </body>

</html>
```

Your final result should look like the image below:

![Four list items. The first three with the same background color and the last with a lighter background.](assets/mdn-value-color.png)

When you're ready, move the files in the following path `user/week03/exercises/day05/values_tasks/task01/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day05/values_tasks/task01/`
- `git commit -m "values_tasks_task01"`
- `git push`

## Task 2

In this task, we want you to set the size of various items of text, as described below:

- The `<h1>` element should be 50 pixels.
- The `<h2>` element should be 2em.
- All `<p>` elements should be 16 pixels.
- A `<p>` element that is directly after an `<h1>` should be 120%.

Copy and paste the code below in a file named `length.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Values and Units Task 2: length values</title>

    <style>

      body {
        background-color: #fff;
        color: #333;
        font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 1em;
        margin: 0;
      }
      h1 {
        }

      h2 {
        }

      p {
        }

      h1+p {
        }
    </style>
  </head>

  <body>

    <h1>Level 1 heading</h1>
    <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
    <h2>Level 2 heading</h2>
    <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>

  </body>

</html>
```

Your final result should look like the image below:

![Some text at varying sizes.](assets/mdn-value-length.png)

When you're ready, move the files in the following path `user/week03/exercises/day05/values_tasks/task02/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day05/values_tasks/task02/`
- `git commit -m "values_tasks_task02"`
- `git push`

## Task 3

In this task, we want you to move the background image so that it is centered horizontally and is 20% from the top of the box.

Copy and paste the code below in a file named `position.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Values and Units Task 3: position values</title>

    <style>
      body {
        background-color: #fff;
        color: #333;
        font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 1em;
        margin: 0;
      }
      .box {
        border: 5px solid #000;
        width: 400px;
        height: 200px;
      }

      .box {
        background-image: url("star.png");
        background-repeat: no-repeat;
      }
    </style>

  </head>

  <body>

    <div class="box"></div>

  </body>

</html>
```

Your final result should look like the image below:

![A stat centered horizontally in a box and a short distance from the top of the box.](assets/mdn-value-position.png)

When you're ready, move the files in the following path `user/week03/exercises/day05/values_tasks/task03/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day05/values_tasks/task03/`
- `git commit -m "values_tasks_task03"`
- `git push`

### Sources and Attributions

  **Content is based on the following sources:**

  - **MDN**
    - [Test your skills: Values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/6dc60c265c35440871208490fa8924e4696f5610/files/en-us/learn/css/building_blocks/values_tasks/index.md){:target="_blank"}