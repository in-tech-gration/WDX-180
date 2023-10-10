---
title: "Test your skills: Selectors"
slug: Learn/CSS/Building_blocks/Selectors/Selectors_Tasks
page-type: learn-module-assessment
---

# CSS selectors

_(Updated: 10/10/2023)_

The aim of this skill test is to assess whether you understand [CSS selectors](../../resources/css_building_blocks/css_selectors/index.md).

> **Note:** If you get stuck, then ask us for help!

## Task 1

In this task, use CSS to do the following things, without changing the HTML:

- Make `<h1>` headings blue.
- Give `<h2>` headings a blue background and white text.
- Cause text wrapped in a `<span>` to have a font-size of 200%.

Copy and paste the code below in a file named `type.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Selectors: Type Selectors</title>
    <link rel="stylesheet" href="../styles.css"/>
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
    </style>

  </head>

  <body>

    <div class="container">
      <h1>This is a heading</h1>
      <p>Veggies es
        <span>bonus vobis</span>, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
      <h2>A level 2 heading</h2>
      <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>

    </div>

  </body>

</html>
```

Your final result should look like the image below:

![Text with the CSS applied for the solution to task 1.](assets/selectors1.jpg)

When you're ready, move the files in the following path `user/week03/exercises/day03/selectors_tasks/task01/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day03/selectors_tasks/task01/`
- `git commit -m "selector_tasks_task01"`
- `git push`

## Task 2

In this task, we want you to make the following changes to the look of the content in this example, without changing the HTML:

- Give the element with an id of `special` a yellow background.
- Give the element with a class of `alert` a 1px grey border.
- If the element with a class of `alert` also has a class of `stop`, make the background red.
- If the element with a class of `alert` also has a class of `go`, make the background green.

Copy and paste the code below in a file named `class-id.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Selectors: Class and ID Selectors</title>
    <link rel="stylesheet" href="../styles.css"/>
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
    </style>

  </head>

  <body>

    <div class="container">
      <h1>This is a heading</h1>
      <p>Veggies es
        <span class="alert">bonus vobis</span>, proinde vos postulo
        <span class="alert stop">essum magis</span>
        kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
      <h2 id="special">A level 2 heading</h2>
      <p>Gumbo beet greens corn soko endive gumbo gourd.</p>
      <h2>Another level 2 heading</h2>
      <p>
        <span class="alert go">Parsley shallot</span>
        courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
    </div>
    </body>
  </html>
```

Your final result should look like the image below:

![Text with the CSS applied for the solution to task 2.](assets/selectors2.jpg)

When you're ready, move the files in the following path `user/week03/exercises/day03/selectors_tasks/task02/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day03/selectors_tasks/task02/`
- `git commit -m "selector_tasks_task02"`
- `git push`

## Task 3

In this task, we want you to make the following changes without adding to the HTML:

- Style links, making the link-state orange, visited links green, and remove the underline on hover.
- Make the first element inside the container font-size: 150% and the first line of that element red.
- Stripe every other row in the table by selecting these rows and giving them a background color of #333 and foreground of white.

Copy and paste the code below in a file named `pseudo.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Selectors: Pseudo-class and Pseudo-element Selectors</title>
    <link rel="stylesheet" href="../styles.css"/>
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

      table {
        border-collapse: collapse;
        width: 300px;
      }

      td,
      th {
        padding: 0.2em;
        text-align: left;
      }
    </style>

  </head>

  <body>

    <div class="container">
      <p>Veggies es
        <a href="https://example.com">bonus vobis</a>, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
      <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
      <table>
        <tr>
          <th>Fruits</th>
          <th>Vegetables</th>
        </tr>
        <tr>
          <td>Apple</td>
          <td>Potato</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>Carrot</td>
        </tr>
        <tr>
          <td>Tomato</td>
          <td>Parsnip</td>
        </tr>
        <tr>
          <td>Kiwi</td>
          <td>Onion</td>
        </tr>
        <tr>
          <td>Banana</td>
          <td>Beet</td>
        </tr>
      </table>
    </div>

  </body>

</html>
```

Your final result should look like the image below:

![Text with the CSS applied for the solution to task 3.](assets/selectors3.jpg)

When you're ready, move the files in the following path `user/week03/exercises/day03/selectors_tasks/task03/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day03/selectors_tasks/task03/`
- `git commit -m "selector_tasks_task03"`
- `git push`

## Task 4

In this task, we want you to do the following:

- Make any paragraph that directly follows an `<h2>` element red.
- Remove the bullets and add a 1px grey bottom border only to list items that are a direct child of the ul with a class of `list`.

Your final result should look like the image below:

Copy and paste the code below in a file named `combinators.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Selectors: Combinators</title>
    <link rel="stylesheet" href="../styles.css"/>
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
      h2 {
        margin: 0;
      }
    </style>

    <style class="editable"></style>
  </head>

  <body>

    <div class="container">
      <h2>This is a heading</h2>
      <p>This paragraph comes after the heading.</p>
      <p>This is the second paragraph.</p>

      <h2>Another heading</h2>
      <p>This paragraph comes after the heading.</p>

      <ul class="list">
        <li>One</li>
        <li>Two
          <ul>
            <li>2.1</li>
            <li>2.2</li>
          </ul>
        </li>
        <li>Three</li>
      </ul>

    </div>

  </body>

</html>
```

![Text with the CSS applied for the solution to task 4.](assets/selectors4.jpg)

When you're ready, move the files in the following path `user/week03/exercises/day03/selectors_tasks/task04/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day03/selectors_tasks/task04/`
- `git commit -m "selector_tasks_task04"`
- `git push`

## Task 5

In this task, add CSS using attribute selectors to do the following:

- Target the `<a>` element with a `title` attribute and make the border pink (`border-color: pink`).
- Target the `<a>` element with an `href` attribute that contains the word `contact` somewhere in its value and make the border orange (`border-color: orange`).
- Target the `<a>` element with an `href` value starting with `https` and give it a green border (`border-color: green`).

Your final result should look like the image below:

Copy and paste the code below in a file named `attribute-links.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Selectors: attribute selectors</title>

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
        margin: 0 0 0.5em;
      }

      a {
        display: block;
        padding: 0.5em;
      }

      a {
        border: 5px solid grey;
      }
    </style>
  </head>

  <body>
    <ul>
      <li>
        <a href="https://example.com">Link 1</a>
      </li>
      <li>
        <a href="http://example.com" title="Visit example.com">Link 2</a>
      </li>
      <li>
        <a href="/contact">Link 3</a>
      </li>
      <li>
        <a href="../contact/index.html">Link 4</a>
      </li>
    </ul>
  </body>
</html>

```

![Four links with different color borders.](assets/selectors-attribute.png)

When you're ready, move the files in the following path `user/week03/exercises/day03/selectors_tasks/task05/` and run the git commands below to submit your exercise:

- `git add user/week03/exercises/day03/selectors_tasks/task05/`
- `git commit -m "selector_tasks_task05"`
- `git push`

### Sources and Attributions

**Content is based on the following sources:**

- **MDN:**
  - [Test your skills: Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/a77137e6239ef445ac67b2ffb7067d6332907910/files/en-us/learn/css/building_blocks/selectors/selectors_tasks/index.md){:target="_blank"}