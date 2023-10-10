---
title: HTML table basics
slug: Learn/HTML/Tables/Basics
page-type: learn-module-chapter
---

# HTML Table Basics

This article gets you started with HTML tables, covering the very basics such as rows, cells, headings, making cells span multiple columns and rows, and how to group together all the cells in a column for styling purposes.

**Prerequisites:**

- The basics of HTML

**Objective:**

- To gain basic familiarity with HTML tables

## What is a table?

A table is a structured set of data made up of rows and columns (**tabular data**). A table allows you to quickly and easily look up values that indicate some kind of connection between different types of data, for example a person and their age, or a day of the week, or the timetable for a local swimming pool.

![A sample table showing names and ages of some people - Chris 38, Dennis 45, Sarah 29, Karen 47.](assets/numbers-table.png)

![A swimming timetable showing a sample data table](assets/swimming-timetable.png)

Tables are very commonly used in human society, and have been for a long time, as evidenced by this US Census document from 1800:

![A very old parchment document; the data is not easily readable, but it clearly shows a data table being used.](assets/1800-census.jpg)

It is therefore no wonder that the creators of HTML provided a means by which to structure and present tabular data on the web.

### How does a table work?

The point of a table is that it is rigid. Information is easily interpreted by making visual associations between row and column headers. <a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKADgQwMYGs0HMYB0AVnAPYB2SoGFALjObVSACYwoNvkYTxUC-ggDQgI5NgA9iCZCBqMGTRHIplYBKKVwAKAIwAmAMwBKANwh-IsZIIALWgFsozefUZIQAHji0AnrAA-AB1GNAAjWAACYBDIyLDSACc2RIBaGigoNBQ4GERIjKycmFNY-KSU_P0UCUi1CBZ4rOxS8n4Q2lshDsaY8jj0FhYxXHyAVhrWuITkmET83Rq60igGpswsVvbyTwB6H38YYJ3acMCyzwxs2ggKY7i4gBE0U8jw0gBXWkjOmEiULLkGC0OCRUhgMEfRLLLLQuC-HwwByRbQABUBwLQiV8kTAmBBPzQWAYuMSpAcZTinjQkVsiRgYAAvEEQPZaDlELtduQ4HAWBgCLg4GABeQ0HA0ILSAA3XYAtBA07Y3Z4jAg2wwYG7FmUh4BABy4rQAHJQeiFZjsZEAGL4yIAZQ1wMiqUiAFlgYkIBg9mhdQFjAQLrsrigbncLr80Cx7g9PLRErGHpF440MnB0ORmSB9CyAntaDHdVTOnUaBxsxk84aHDAC7Yk3HS3ByzBKys827xaC9AAGbwfFABfQAFj2cEHASwuGM9cbJdsZdIFZZVZAAUeEDQtfo0O0WAcs92nXnKebrfbUDzjwYcAgfhR092DgHQ8M48nR5PxbPi5by7bVcO3XABxRI0Gle8cW0Bx9lfYcPyHL8Gx_eM_wvICr3XAAZBhcFLcFIhYNBoNsT5EjgZDTzQpcVxULCNwgHwFQwP4wDJZF7Q-fo-3ggA2RCp0POdUPPADL07GAFR-JEOHA2goT-bQAAaAGEqNE9DxMw6sPgcMI5jBCEHFIVQRP6ZNf1owD6OrUh6DgczkwLRNgyjIsLPjBIWF8Rt41ciznNLdNM2zXMQEiMkAHcMwVbMRxZazs2i3AyUHPMABU5npHwvTQKB_gxEEnMsmj_zo6LJMSDAoV8EqgpjXsCEMQx-2PDzLLPGMRyEAAOAB2ABOAsOtKwsAjGEd9H6kbqPGwwCBm9q5u6_Q1oIATltEmMxn6ghhq2wKmxjXQ-KW8btoCNqLqOksY1UzRch8H5SB-DUHW42bdRcvyEzmrSKtIKK8wANQYD5HOPFDbq6gIRwIAavph1MAgMIRdF7MdDs6lGxlHd9sbGmNev2pGcfG_Ret7fQCGu0aGtR3sSf0MmibhvisZu8nGtZhneZTY8AqCoWxoBmzKvXABRLFOnq46Jv2876fltH-rGTaubZsYxl0TnlbugJBoR_mDdHWmTdh3WjY1_XLbGC2Ud0B3xoAeShSIoqSKAWH5n7vr-zSkpZCWAi7Ci5YNpqOZZwmGb4oQhpjzWGcMQaWudmMFqVlbh3h7PLrWvaDuT-XUj4-3Y_lpPbZRjL3vpRp5UVX3Bd-kWgsXaLYqzFkEoi8rxaB1LPhQPMACkZS3fom-BSHv2R0su9CllwqDkAUrS0fQPFSJcCn4qof-teQ7Hwd7zmCPLd6wbeoz1GpqEG-9Zz3RDH0G2c6MAgncrg2jeLmu41-r9RJh_S6qRdAYzvmdO-dc_iwnwM9GetAW4ByOv5I-A9kpAzzPaF4UIdiH0uurW-v9Lb6F7EIMYhgwELxjHxRGZCUZGzpi_Jq-c6H3xagQCuJcDYQJHKwy6fFq451Qe3M8EiFyRSBt3MKiUsHByHpvPMABJViu995z2huTMW2DgbrgAKrgXIBDS-KNep8WNkw8aOt0a6FIXw8h_Uf5OIsYtO-ug9qiILgNGmvDAExggYNAJn8OHc3zJXP26C0G6OPjg9c-p2AKSBOY8aGMfGcJHINKhlNPF8UMI4wJqNdDmxsSdKxrjikjmyWMb-d9UgUKEZw3Wd9xFtyPiFOKK8FEYXXsoke14opYghMg7RmC-kh3RF8UgaTGq011rQiJ-ghCGH6s05ZvYQl33YZ46hzU75jEGr2Kxz9wFrVCcQu-P4ngwAwFkXkEBIAwEaDvGkyDIhiEiE0-O8QvhvSYjclMfoYbJjpAybMbIORciirCggEMXikGIr4AgNBYI-CSL4Y8dzbC7AobrXYGNdjUzlFAGZqRkGpDUFiKlCJ6CwVOrta-RztQgCBXEAI9IHBoDEKCVwZJpRzDvPlX0QKAhBmRlE1ublvK-RCAWM4RwLCCCAA&query=file=/index.html" target="_blank">Look at this table</a> for example and find a Jovian gas giant with 62 moons. You can find the answer by associating the relevant row and column headers.

When implemented correctly, HTML tables are handled well by accessibility tools such as screen readers, so a successful HTML table should enhance the experience of sighted and visually impaired users alike.

### Table styling

You can also have a [look at the live example](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html){:target="_blank"} on GitHub! One thing you'll notice is that the table does look a bit more readable there — this is because the table you see above on this page has minimal styling, whereas the GitHub version has more significant CSS applied.

Be under no illusion; for tables to be effective on the web, you need to provide some styling information with [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS){:target="_blank"}, as well as good solid structure with HTML. In this module we are focusing on the HTML part; there's another module for styling tables using CSS.

We won't focus on CSS in this module, but we have provided a minimal CSS stylesheet for you to use that will make your tables more readable than the default you get without any styling. You can find the [stylesheet here](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css){:target="_blank"}, and you can also find an [HTML template](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html){:target="_blank"} that applies the stylesheet — these together will give you a good starting point for experimenting with HTML tables.

### When should you NOT use HTML tables?

HTML tables should be used for tabular data — this is what they are designed for. Unfortunately, a lot of people used to use HTML tables to lay out web pages, e.g. one row to contain the header, one row to contain the content columns, one row to contain the footer, etc. This was commonly used because CSS support across browsers used to be terrible; table layouts are much less common nowadays, but you might still see them in some corners of the web.

In short, **using tables for layout** rather than [CSS layout techniques](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout){:target="_blank"} **is a bad idea**. The main reasons are as follows:

1. **Layout tables reduce accessibility for visually impaired users**: [screen readers](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers){:target="_blank"}, used by blind people, interpret the tags that exist in an HTML page and read out the contents to the user. Because tables are not the right tool for layout, and the markup is more complex than with CSS layout techniques, the screen readers' output will be confusing to their users.

2. **Tables produce tag soup**: As mentioned above, table layouts generally involve more complex markup structures than proper layout techniques. This can result in the code being harder to write, maintain, and debug.

3. **Tables are not automatically responsive**: When you use proper layout containers (such as [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header){:target="_blank"}, [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section){:target="_blank"}, [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article){:target="_blank"}, or [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div){:target="_blank"}), their width defaults to 100% of their parent element. Tables on the other hand are sized according to their content by default, so extra measures are needed to get table layout styling to effectively work across a variety of devices.

## Active learning: Creating your first table

We've talked table theory enough, so, let's dive into a practical example and build up a simple table.

1. First of all, make a local copy of [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html){:target="_blank"} and [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css){:target="_blank"}. To submit this exercise, the files should be placed in the `user/week02/exercises/day03/html_table_basics/` folder.

2. The content of every table is enclosed by these two tags: **[`<table></table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table){:target="_blank"}**. Add these inside the body of your HTML.

3. The smallest container inside a table is a table cell, which is created by a **[`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td){:target="_blank"}** element ('td' stands for 'table data'). Add the following inside your table tags:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. If we want a row of four cells, we need to copy these tags three times. Update the contents of your table to look like so:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

As you will see, the cells are not placed underneath each other, rather they are automatically aligned with each other on the same row. Each `<td>` element creates a single cell and together they make up the first row. Every cell we add makes the row grow longer.

To stop this row from growing and start placing subsequent cells on a second row, we need to use the **[`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr){:target="_blank"}** element ('tr' stands for 'table row'). Let's investigate this now.

1. Place the four cells you've already created inside `<tr>` tags, like so:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Now you've made one row, have a go at making one or two more — each row needs to be wrapped in an additional `<tr>` element, with each cell contained in a `<td>`.

### Result

This should result in a table that looks something [like this](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html){:target="_blank"}.

## Adding headers with \<th> elements

Now let's turn our attention to table headers — special cells that go at the start of a row or column and define the type of data that row or column contains (as an example, see the "Person" and "Age" cells in the first example shown in this article). To illustrate why they are useful, have a look at the following table example. First the source code:

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

```css
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Open the code in a live <a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKADgQwMYGs0HMYB0AVnAPYB2SoGFALjObVSACYwoNvkYTxUC-ggDQgI5NgA8CAC1oBbKMxqMGTRCAA8cWgE9YAPgA6jNACNYAAmDGLF06QBObBwFoaUKGhRwYiC-89vGABuY35jWhYhCOkrGztHZz8ARhQJCzIoCBY7T2xQ8lt0FhYxXBSABjSLACYqiQLw8g0Aem09GCNm2jMDeI1aBy7bWwGWfQAyclM4FGDWyOGRsf0AaXJSbB0F8fjRxYAxKEcdpf3xgFEPNFO9ixWAKQBXNGaWxf73of7Bs_vFgBCDhgMBYt0Ky0WD0wWAsACUnnAfB5wSN_uMAAqkUgsWCoyHjADKgxBkVIuHx530AGFNlgYA4LIT0OReFB8QtvhCBly0SsAIL4Sno_TJABswpWAE5JYtkhVZeMAKwcr5LHl_FYAeQA7uQGYr9ABZUi0aQMlxiFyeHWGo0wO0O967CFUwkQbQWq021W_H68gn6C5oWhlCwACTMEFocENwZjFhgADcGToKDAAORwCywMC0Ugphyx52axYAOQgpnM8AsIYsYGxYJLdxW4ZgaAcukTIYNzddIoA6tAoN3aBZQx4LObExIUMc2MWPty1cYFr1OiBBPwgA&query=file=/index.html" target="_blank">Codesandbox</a> to see the actual result of the code.

The problem here is that, while you can kind of make out what's going on, it is not as easy to cross reference data as it could be. If the column and row headings stood out in some way, it would be much better.

### Active learning: table headers

Let's have a go at improving this table.

1. First, make a local copy of our [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html){:target="_blank"} and [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css){:target="_blank"} files in a new directory on your local machine. The HTML contains the same Dogs example as you saw above.

To submit this exercise, the files should be placed in the `user/week02/exercises/day03/html_table_basics/` folder.

2. To recognize the table headers as headers, both visually and semantically, you can use the **[`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th){:target="_blank"}** element ('th' stands for 'table header'). This works in exactly the same way as a `<td>`, except that it denotes a header, not a normal cell. Go into your HTML, and change all the `<td>` elements surrounding the table headers into `<th>` elements.

3. Save your HTML and load it in a browser, and you should see that the headers now look like headers. See it [live here](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html){:target="_blank"}

### Why are headers useful?

We have already partially answered this question — it is easier to find the data you are looking for when the headers clearly stand out, and the design just generally looks better.

> **Note:** Table headings come with some default styling — they are bold and centered even if you don't add your own styling to the table, to help them stand out.

Tables headers also have an added benefit — along with the `scope` attribute (more on this later), they allow you to **make tables more accessible** by associating each header with all the data in the same row or column. Screen readers are then able to read out a whole row or column of data at once, which is pretty useful.

## Allowing cells to span multiple rows and columns

Sometimes we want cells to span multiple rows or columns. Take the following simple example, which shows the names of common animals. In some cases, we want to show the names of the males and females next to the animal name. Sometimes we don't, and in such cases we just want the animal name to span the whole table.

The initial markup looks like this:

```html
<table>
  <tr>
    <th>Animals</th>
  </tr>
  <tr>
    <th>Hippopotamus</th>
  </tr>
  <tr>
    <th>Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

```css
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

But the output doesn't give us quite what we want:

Open the code in a live <a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKADgQwMYGs0HMYB0AVnAPYB2SoGFALjObVSACYwoNvkYTxUC-ggDQgI5NgA8CAC1oBbKMxqMGTRCAA8cWgE9YAPgA6jNACNYAAmDGLF06QBObBwFoaUKGhRwYiC-89vGABuY35jWhYhCOkrGztHZz8ARhQJCzIoCBY7T2xQ8lt0FhYxXBSABjSLACYqiQLw8g0Aem09GCNm2jMDeI1aBy7bWwHpfQBBcgg5NCg4Vtpx_pbB4YsBofjRpf0ACQgUFFJjnrkAVwXV5cKN1a3bzfWd8b3HH0WbkY3I_QBZNAOGCLFjrRYPHYQkYDUEAZR6HggFBBYPuYLW2x-4wAwg5SDRSrBPqiMY9Sd8xvpsdIINgGMTMTD9vTVqCVuSflCdqCAEqkUjaGAOFHsh6LXqdECCfhAA&query=file=/index.html" target="_blank">Codesandbox</a> to see the actual result of the code.

We need a way to get "Animals", "Hippopotamus", and "Crocodile" to span across two columns, and "Horse" and "Chicken" to span downwards over two rows. Fortunately, table headers and cells have the `colspan` and `rowspan` attributes, which allow us to do just those things. Both accept a unitless number value, which equals the number of rows or columns you want spanned. For example, `colspan="2"` makes a cell span two columns.

Let's use `colspan` and `rowspan` to improve this table.

1. First, make a local copy of our [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html){:target="_blank"} and [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css){:target="_blank"} files in a new directory on your local machine. The HTML contains the same animals example as you saw above.

To submit this exercise, the files should be placed in the `user/week02/exercises/day03/html_table_basics/` folder.

2. Next, use `colspan` to make "Animals", "Hippopotamus", and "Crocodile" span across two columns.

3. Finally, use `rowspan` to make "Horse" and "Chicken" span across two rows.

4. Save and open your code in a browser to see the improvement. It should look [like this.](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html){:target="_blank"}

## Providing common styling to columns

### Styling without \<col>

There is one last feature we'll tell you about in this article before we move on. HTML has a method of defining styling information for an entire column of data all in one place — the **[`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col){:target="_blank"}** and **[`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup){:target="_blank"}** elements. These exist because it can be a bit annoying and inefficient having to specify styling on columns — you generally have to specify your styling information on _every_ `<td>` or `<th>` in the column, or use a complex selector such as [`:nth-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child){:target="_blank"}.

> **Note:** Styling columns like this is [limited to a few properties](https://www.w3.org/TR/CSS22/tables.html#columns): [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border){:target="_blank"}, [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background){:target="_blank"}, [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width){:target="_blank"}, and [`visibility`](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility){:target="_blank"}. To set other properties you'll have to either style every `<td>` or `<th>` in the column, or use a complex selector such as [`:nth-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child){:target="_blank"}.

Take the following simple example:

```html
<table>
  <tr>
    <th>Data 1</th>
    <th style="background-color: yellow">Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td style="background-color: yellow">Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>
```

```css
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Which gives us the <a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKADgQwMYGs0HMYB0AVnAPYB2SoGFALjObVSACYwoNvkYTxUC-ggDQgI5NgA8CAC1oBbKMxqMGTRCAA8cWgE9YAPgA6jNACNYAAmDGLF06QBObBwFoaUKGhRwYiC-89vGABuY35jWhYhCOkrGztHZz8ARhQJCzIoCBY7T2xQ8lt0FhYxXBSABjSLACYqiQLw8g0Aem09GCNm2jMDeI1aBy7bWwHpfQARNB6LZNbacfjRhYzdWABeQxBTTCxcB1IAV3E3UihHPx0YD1IAdy3J6bRa-cXCi3mh_sHhkYGWfQAYTQUAwh1oPXmAKWH0iqw6m22u32RxO7guFiuN3uIH0AHkHGhyPgob9PmSfjD_voAEqkey0OCkqlw9obLY7bAo44sU7nByXa7nHH6ABSaAAXhLme9ycZ5r1OiBBPwgA&query=file=/index.html" target="_blank">following result</a>.

This isn't ideal, as we have to repeat the styling information across all three cells in the column (we'd probably have a `class` set on all three in a real project and specify the styling in a separate stylesheet).

### Styling with \<col>

Instead of doing this, we can specify the information once, on a `<col>` element. `<col>` elements are specified inside a `<colgroup>` container just below the opening `<table>` tag. We could create the same effect as we see above by specifying our table as follows:

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```

Effectively we are defining two "style columns", one specifying styling information for each column. We are not styling the first column, but we still have to include a blank `<col>` element — if we didn't, the styling would just be applied to the first column.

If we wanted to apply the styling information to both columns, we could just include one `<col>` element with a span attribute on it, like this:

```html
<colgroup>
  <col style="background-color: yellow" span="2" />
</colgroup>
```

Just like `colspan` and `rowspan`, `span` takes a unitless number value that specifies the number of columns you want the styling to apply to.

### Active learning: colgroup and col

Now it's time to have a go yourself.

1. First, make a local copy of our [timetable.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable.html){:target="_blank"} file in a new directory on your local machine. The HTML contains the timetable of a languages teacher.

On Friday she has a new class teaching Dutch all day, but she also teaches German for a few periods on Tuesday and Thursdays. She wants to highlight the columns containing the days she is teaching.

To submit this exercise, the files should be placed in the `user/week02/exercises/day03/html_table_basics/` folder.

2. Add a `<colgroup>` element at the top of the table, just underneath the `<table>` tag, in which you can add your `<col>` elements (see the remaining steps below).

3. The first two columns need to be left unstyled.

4. Add a background color to the third column. The value for your `style` attribute is `background-color:#97DB9A;`

5. Set a separate width on the fourth column. The value for your `style` attribute is `width: 42px;`

6. Add a background color to the fifth column. The value for your `style` attribute is `background-color: #97DB9A;`

7. Add a different background color plus a border to the sixth column, to signify that this is a special day and she's teaching a new class. The values for your `style` attribute are `background-color:#DCC48E; border:4px solid #C1437A;`

8. The last two days are free days, so just set them to no background color but a set width; the value for the `style` attribute is `width: 42px;`

See how you get on with the example. You can check out the [live demo also](https://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html){:target="_blank"}.

## Summary

That just about wraps up the basics of HTML tables. 

### Sources and Attributions

  **Content is based on the following sources:**

  - **MDN**:
    - [HTML table basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics){:target="_blank"} / [(Permalink)](https://github.com/mdn/content/blob/7073233dfed28e7c2fb325d2bb378075763d81b9/files/en-us/learn/html/tables/basics/index.md){:target="_blank"}
