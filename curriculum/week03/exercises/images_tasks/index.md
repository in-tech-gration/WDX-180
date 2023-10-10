---
title: "Test your skills: Images and form elements"
slug: Learn/CSS/Building_blocks/Images_tasks
page-type: learn-module-assessment
---

# Test your skills: Images and form elements

_(Updated: 10/10/2023)_

The aim of this skill test is to assess whether you understand how special elements like [images, media and form elements are treated in CSS](../../resources/css_building_blocks/images_media_form_elements/index.md).

> **Note:** If you get stuck, then ask us for help!

## Task 1

In this task, you have an image that is overflowing the box. We want the image to scale down to fit inside the box without any extra white space, but we do not mind if some part of the image is cropped.

Copy and paste the code below in a file named `object-fit.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Images and forms 1: covering the box with an image</title>
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

      img {
        }
    </style>

  </head>

  <body>
    <div class="box">
      <img src="balloons.jpg" alt="balloons">
    </div>

  </body>

</html>
```

Your final result should look like the image below:

![An image in a box](assets/mdn-images-object-fit.png)

When you're ready, move the files in the following path `user/week03/exercises/day05/images_tasks/task01/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day05/images_tasks/task01/`
- `git commit -m "images_tasks_task01"`
- `git push`

## Task 2

In this task, you have a simple form. Your task is to make the following changes:

- Use attribute selectors to target the search field and button inside `.myform`.
- Make the form field and button use the same text size as the rest of the form.
- Give the form field and button 10 px of padding.
- Give the button a background of `rebeccapurple`, white foreground, no border and rounded corners of 5px.

Copy and paste the code below in a file named `form.html`.

```html
!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Images and forms 2: styling form fields</title>
    <link rel="stylesheet" href="../styles.css"/>
    <style>

      body {
        background-color: #fff;
        color: #333;
        font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 1em;
        margin: 0;
      }

      .preview .myform input {
        display: inline;
        margin: 0;
      }

      .myform {
        border: 2px solid #000;
        padding: 5px;
      }
    </style>
  </head>

  <body>

    <form method="post" action="" class="myform">
      <div>
        <label for="fldSearch">Keywords</label>
        <input type="search" id="fldSearch" name="keywords">
        <input type="submit" name="btnSubmit" value="Search"></div>
    </form>

  </body>

</html>
```

Your final result should look like the image below:

![A single line form](assets/mdn-images-form.png)

When you're ready, move the files in the following path `user/week03/exercises/day05/images_tasks/task02/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day05/images_tasks/task02/`
- `git commit -m "images_tasks_task02"`
- `git push`

### Sources and Attributions

**Content is based on the following sources:**

- **MDN:**
  - [Test your skills: Images and form elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Images_tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/bffe6c3486fa8cbaa2291a5e1cd67f704cf483bf/files/en-us/learn/css/building_blocks/images_tasks/index.md){:target="_blank"}