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

The point of a table is that it is rigid. Information is easily interpreted by making visual associations between row and column headers. Look at the table below for example and find a Jovian gas giant with 62 moons. You can find the answer by associating the relevant row and column headers.

Open the code in a live <a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKADgQwMYGs0HMYB0AVnAPYB2SoGFALjObVSACYwoNvkYTxUC-ggDQgI5NgA9iCZCBqMGTRHIplYBKKVwAKAIwAmAMwBKANwh-IsZIIALWgFsozefUZIQAHji0AnrAA-AB1GNAAjWAACYBDIyLDSACc2RIBaGigoNBQ4GERIjKycmFNY-KSU_P0UCUi1CBZ4rOxS8n4Q2lshDsaY8jj0FhYxXHyAVhrWuITkmET83Rq60igGpswsVvbyTwB6H38YYJ3acMCyzwxs2ggKY7i4gBE0U8jw0gBXWkjOmEiULLkGC0OCRUhgMEfRLLLLQuC-HwwByRbQABUBwLQiV8kTAmBBPzQWAYuMSpAcZTinjQkVsiRgYAAvEEQPZaDlELtduQ4HAWBgCLg4GABeQ0HA0ILSAA3XYAtBA07Y3Z4jAg2wwYG7FmUh4BABy4rQAHJQeiFZjsZEAGL4yIAZQ1wMiqUiAFlgYkIBg9mhdQFjAQLrsrigbncLr80Cx7g9PLRErGHpF440MnB0ORmSB9CyAntaDHdVTOnUaBxsxk84aHDAC7Yk3HS3ByzBKys827xaC9AAGbwfFABfQAFj2cEHASwuGM9cbJdsZdIFZZVZAAUeEDQtfo0O0WAcs92nXnKebrfbUDzjwYcAgfhR092DgHQ8M48nR5PxbPi5by7bVcO3XABxRI0Gle8cW0Bx9lfYcPyHL8Gx_eM_wvICr3XAAZBhcFLcFIhYNBoNsT5EjgZDTzQpcVxULCNwgHwFQwP4wDJZF7Q-fo-3ggA2RCp0POdUPPADL07GAFR-JEOHA2goT-bQAAaAGEqNE9DxMw6sPgcMI5jBCEHFIVQRP6ZNf1owD6OrUh6DgczkwLRNgyjIsLPjBIWF8Rt41ciznNLdNM2zXMQEiMkAHcMwVbMRxZazs2i3AyUHPMABU5npHwvTQKB_gxEEnMsmj_zo6LJMSDAoV8EqgpjXsCEMQx-2PDzLLPGMRyEAAOAB2ABOAsOtKwsAjGEd9H6kbqPGwwCBm9q5u6_Q1oIATltEmMxn6ghhq2wKmxjXQ-KW8btoCNqLqOksY1UzRch8H5SB-DUHW42bdRcvyEzmrSKtIKK8wANQYD5HOPFDbq6gIRwIAavph1MAgMIRdF7MdDs6lGxlHd9sbGmNev2pGcfG_Ret7fQCGu0aGtR3sSf0MmibhvisZu8nGtZhneZTY8AqCoWxoBmzKvXABRLFOnq46Jv2876fltH-rGTaubZsYxl0TnlbugJBoR_mDdHWmTdh3WjY1_XLbGC2Ud0B3xoAeShSIoqSKAWH5n7vr-zSkpZCWAi7Ci5YNpqOZZwmGb4oQhpjzWGcMQaWudmMFqVlbh3h7PLrWvaDuT-XUj4-3Y_lpPbZRjL3vpRp5UVX3Bd-kWgsXaLYqzFkEoi8rxaB1LPhQPMACkZS3fom-BSHv2R0su9CllwqDkAUrS0fQPFSJcCn4qof-teQ7Hwd7zmCPLd6wbeoz1GpqEG-9Zz3RDH0G2c6MAgncrg2jeLmu41-r9RJh_S6qRdAYzvmdO-dc_iwnwM9GetAW4ByOv5I-A9kpAzzPaF4UIdiH0uurW-v9Lb6F7EIMYhgwELxjHxRGZCUZGzpi_Jq-c6H3xagQCuJcDYQJHKwy6fFq451Qe3M8EiFyRSBt3MKiUsHByHpvPMABJViu995z2huTMW2DgbrgAKrgXIBDS-KNep8WNkw8aOt0a6FIXw8h_Uf5OIsYtO-ug9qiILgNGmvDAExggYNAJn8OHc3zJXP26C0G6OPjg9c-p2AKSBOY8aGMfGcJHINKhlNPF8UMI4wJqNdDmxsSdKxrjikjmyWMb-d9UgUKEZw3Wd9xFtyPiFOKK8FEYXXsoke14opYghMg7RmC-kh3RF8UgaTGq011rQiJ-ghCGH6s05ZvYQl33YZ46hzU75jEGr2Kxz9wFrVCcQu-P4ngwAwFkXkEBIAwEaDvGkyDIhiEiE0-O8QvhvSYjclMfoYbJjpAybMbIORciirCggEMXikGIr4AgNBYI-CSL4Y8dzbC7AobrXYGNdjUzlFAGZqRkGpDUFiKlCJ6CwVOrta-RztQgCBXEAI9IHBoDEKCVwZJpRzDvPlX0QKAhBmRlE1ublvK-RCAWM4RwLCCCAA&query=file=/index.html" target="_blank">Codesandbox</a> to see the actual result of the code.

```html
<table>
  <caption>
    Data about the planets of our solar system (Planetary facts taken from
    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Nasa's Planetary Fact Sheet - Metric</a
    >).
  </caption>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">Name</th>
      <th scope="col">Mass (10<sup>24</sup>kg)</th>
      <th scope="col">Diameter (km)</th>
      <th scope="col">Density (kg/m<sup>3</sup>)</th>
      <th scope="col">Gravity (m/s<sup>2</sup>)</th>
      <th scope="col">Length of day (hours)</th>
      <th scope="col">Distance from Sun (10<sup>6</sup>km)</th>
      <th scope="col">Mean temperature (°C)</th>
      <th scope="col">Number of moons</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2" rowspan="4" scope="rowgroup">Terrestrial planets</th>
      <th scope="row">Mercury</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>Closest to the Sun</td>
    </tr>
    <tr>
      <th scope="row">Venus</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Earth</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>Our world</td>
    </tr>
    <tr>
      <th scope="row">Mars</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>The red planet</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">Jovian planets</th>
      <th rowspan="2" scope="rowgroup">Gas giants</th>
      <th scope="row">Jupiter</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>The largest planet</td>
    </tr>
    <tr>
      <th scope="row">Saturn</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Ice giants</th>
      <th scope="row">Uranus</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Neptune</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">Dwarf planets</th>
      <th scope="row">Pluto</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        Declassified as a planet in 2006, but this
        <a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >remains controversial</a
        >.
      </td>
    </tr>
  </tbody>
</table>
```

```css
table {
  border-collapse: collapse;
  border: 2px solid black;
}

th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

When implemented correctly, HTML tables are handled well by accessibility tools such as screen readers, so a successful HTML table should enhance the experience of sighted and visually impaired users alike.

### Table styling

You can also have a [look at the live example](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html){:target="_blank"} on GitHub! One thing you'll notice is that the table does look a bit more readable there — this is because the table you see above on this page has minimal styling, whereas the GitHub version has more significant CSS applied.

Be under no illusion; for tables to be effective on the web, you need to provide some styling information with [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS){:target="_blank"}, as well as good solid structure with HTML. In this module we are focusing on the HTML part; to find out about the CSS part you should visit our [Styling tables](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables){:target="_blank"} article after you've finished here.

We won't focus on CSS in this module, but we have provided a minimal CSS stylesheet for you to use that will make your tables more readable than the default you get without any styling. You can find the [stylesheet here](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css){:target="_blank"}, and you can also find an [HTML template](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html){:target="_blank"} that applies the stylesheet — these together will give you a good starting point for experimenting with HTML tables.

### When should you NOT use HTML tables?

HTML tables should be used for tabular data — this is what they are designed for. Unfortunately, a lot of people used to use HTML tables to lay out web pages, e.g. one row to contain the header, one row to contain the content columns, one row to contain the footer, etc. You can find more details and an example at [Page Layouts](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#page_layouts){:target="_blank"} in our [Accessibility Learning Module](https://developer.mozilla.org/en-US/docs/Learn/Accessibility){:target="_blank"}. This was commonly used because CSS support across browsers used to be terrible; table layouts are much less common nowadays, but you might still see them in some corners of the web.

In short, using tables for layout rather than [CSS layout techniques](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout){:target="_blank"} is a bad idea. The main reasons are as follows:

1. **Layout tables reduce accessibility for visually impaired users**: [screen readers](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers){:target="_blank"}, used by blind people, interpret the tags that exist in an HTML page and read out the contents to the user. Because tables are not the right tool for layout, and the markup is more complex than with CSS layout techniques, the screen readers' output will be confusing to their users.
2. **Tables produce tag soup**: As mentioned above, table layouts generally involve more complex markup structures than proper layout techniques. This can result in the code being harder to write, maintain, and debug.
3. **Tables are not automatically responsive**: When you use proper layout containers (such as [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header){:target="_blank"}, [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section){:target="_blank"}, [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article){:target="_blank"}, or [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div){:target="_blank"}){:target="_blank"}, their width defaults to 100% of their parent element. Tables on the other hand are sized according to their content by default, so extra measures are needed to get table layout styling to effectively work across a variety of devices.

## Active learning: Creating your first table

We've talked table theory enough, so, let's dive into a practical example and build up a simple table.

1. First of all, make a local copy of [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html){:target="_blank"} and [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css){:target="_blank"} in a new directory on your local machine.
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

This should result in a table that looks something like the following:

```html
<table>
  <tr>
    <td>Hi, I'm your first cell.</td>
    <td>I'm your second cell.</td>
    <td>I'm your third cell.</td>
    <td>I'm your fourth cell.</td>
  </tr>

  <tr>
    <td>Second row, first cell.</td>
    <td>Cell 2.</td>
    <td>Cell 3.</td>
    <td>Cell 4.</td>
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
Open the code in a live <a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKADgQwMYGs0HMYB0AVnAPYB2SoGFALjObVSACYwoNvkYTxUC-ggDQgI5NgA8CAC1oBbKMxqMGTRCAA8cWgE9YAPgA6jNACNYAAmDGLF06QBObBwFoaUKGhRwYiC-89vGABuY35jWhYhCOkrGztHZz8ARhQJCzIoCBY7T2xQ8lt0FhYxXBSABjSLACYqiQLw8g0Aem09GCNm2jMDeI1aBy7bWwGWfQAJCCELAEkAcjkLHVIAVwcLSAdtfxgPAlbI4ZGx_QWllfWMmGUcjD2oA5aj-NGj8-W1jdppCCdd_aHcavCynD6XDZgL4_AGPIHHQ5DfqDY5vcYAZRuFByDlIAHcZlsdvdAc9gYUTkcAMIPWpPF4UtH6GkeCwAZnp5JGoOptIALJyEc8kc1nr1OiBBPwgA&query=file=/index.html" target="_blank">Codesandbox</a> to see the actual result of the code.

> **Note:** You can also find this on GitHub as [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html){:target="_blank"} ([see it live also](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)){:target="_blank"}.

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

Now the actual rendered table:

Open the code in a live <a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKADgQwMYGs0HMYB0AVnAPYB2SoGFALjObVSACYwoNvkYTxUC-ggDQgI5NgA8CAC1oBbKMxqMGTRCAA8cWgE9YAPgA6jNACNYAAmDGLF06QBObBwFoaUKGhRwYiC-89vGABuY35jWhYhCOkrGztHZz8ARhQJCzIoCBY7T2xQ8lt0FhYxXBSABjSLACYqiQLw8g0Aem09GCNm2jMDeI1aBy7bWwGWfQAyclM4FGDWyOGRsf0AaXJSbB0F8fjRxYAxKEcdpf3xgFEPNFO9ixWAKQBXNGaWxf73of7Bs_vFgBCDhgMBYt0Ky0WD0wWAsACUnnAfB5wSN_uMAAqkUgsWCoyHjADKgxBkVIuHx530AGFNlgYA4LIT0OReFB8QtvhCBly0SsAIL4Sno_TJABswpWAE5JYtkhVZeMAKwcr5LHl_FYAeQA7uQGYr9ABZUi0aQMlxiFyeHWGo0wO0O967CFUwkQbQWq021W_H68gn6C5oWhlCwACTMEFocENwZjFhgADcGToKDAAORwCywMC0Ugphyx52axYAOQgpnM8AsIYsYGxYJLdxW4ZgaAcukTIYNzddIoA6tAoN3aBZQx4LObExIUMc2MWPty1cYFr1OiBBPwgA&query=file=/index.html" target="_blank">Codesandbox</a> to see the actual result of the code.

The problem here is that, while you can kind of make out what's going on, it is not as easy to cross reference data as it could be. If the column and row headings stood out in some way, it would be much better.

### Active learning: table headers

Let's have a go at improving this table.

1. First, make a local copy of our [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html){:target="_blank"} and [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css){:target="_blank"} files in a new directory on your local machine. The HTML contains the same Dogs example as you saw above.
2. To recognize the table headers as headers, both visually and semantically, you can use the **[`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th){:target="_blank"}** element ('th' stands for 'table header'). This works in exactly the same way as a `<td>`, except that it denotes a header, not a normal cell. Go into your HTML, and change all the `<td>` elements surrounding the table headers into `<th>` elements.
3. Save your HTML and load it in a browser, and you should see that the headers now look like headers.

> **Note:** You can find our finished example at [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html){:target="_blank"} on GitHub ([see it live also](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)){:target="_blank"}.

### Why are headers useful?

We have already partially answered this question — it is easier to find the data you are looking for when the headers clearly stand out, and the design just generally looks better.

> **Note:** Table headings come with some default styling — they are bold and centered even if you don't add your own styling to the table, to help them stand out.

Tables headers also have an added benefit — along with the `scope` attribute (which we'll learn about in the next article), they allow you to make tables more accessible by associating each header with all the data in the same row or column. Screen readers are then able to read out a whole row or column of data at once, which is pretty useful.

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
2. Next, use `colspan` to make "Animals", "Hippopotamus", and "Crocodile" span across two columns.
3. Finally, use `rowspan` to make "Horse" and "Chicken" span across two rows.
4. Save and open your code in a browser to see the improvement.

> **Note:** You can find our finished example at [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html){:target="_blank"} on GitHub ([see it live also](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)){:target="_blank"}.

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

Which gives us the following result:

Open the code in a live <a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKADgQwMYGs0HMYB0AVnAPYB2SoGFALjObVSACYwoNvkYTxUC-ggDQgI5NgA8CAC1oBbKMxqMGTRCAA8cWgE9YAPgA6jNACNYAAmDGLF06QBObBwFoaUKGhRwYiC-89vGABuY35jWhYhCOkrGztHZz8ARhQJCzIoCBY7T2xQ8lt0FhYxXBSABjSLACYqiQLw8g0Aem09GCNm2jMDeI1aBy7bWwHpfQARNB6LZNbacfjRhYzdWABeQxBTTCxcB1IAV3E3UihHPx0YD1IAdy3J6bRa-cXCi3mh_sHhkYGWfQAYTQUAwh1oPXmAKWH0iqw6m22u32RxO7guFiuN3uIH0AHkHGhyPgob9PmSfjD_voAEqkey0OCkqlw9obLY7bAo44sU7nByXa7nHH6ABSaAAXhLme9ycZ5r1OiBBPwgA&query=file=/index.html" target="_blank">Codesandbox</a> to see the actual result of the code.

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

Below you can see the timetable of a languages teacher. On Friday she has a new class teaching Dutch all day, but she also teaches German for a few periods on Tuesday and Thursdays. She wants to highlight the columns containing the days she is teaching.

```html
<h1>School timetable</h1>
<table>
  <colgroup>
    <col span="2">
    <col style="background-color:#97DB9A;">
    <col style="width:42px;">
    <col style="background-color:#97DB9A;">
    <col style="background-color:#DCC48E; border:4px solid #C1437A;">
    <col span="2" style="width:42px;">
  </colgroup>
  <tr>
    <td>&nbsp;</td>
    <th>Mon</th>
    <th>Tues</th>
    <th>Wed</th>
    <th>Thurs</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <th>1st period</th>
    <td>English</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>2nd period</th>
    <td>English</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>3rd period</th>
    <td>&nbsp;</td>
    <td>German</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>4th period</th>
    <td>&nbsp;</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>English</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
```

```css
html {
  font-family: sans-serif;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200,200,200);
  letter-spacing: 1px;
  font-size: 0.8rem;
}

td, th {
  border: 1px solid rgb(190,190,190);
  padding: 10px 20px;
}

td {
  text-align: center;
}

caption {
  padding: 10px;
}
```

Open the code in a live <a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKADgQwMYGs0HMYB0AVnAPYB2SoGFALjObVSACYwoNvkYTxUC-ggDQgI5NgA8CAC1oBbKMxqMGTRCAA8cWgE9YAPgA65WQoAEwY2bNg6AWjBo50HYjNw05OHbgwAThBgANzG_Ma0aABGsBZWZpGkfmx-djRQUGgovm5pGVkwIeTWCUn-bgBMKBLupFAQLGZ-uJEAFOUADO1CHV09AJSF1rC09Clw6DzkuG4AjFWDNvZwEABeMG7tBAAcfjByhWGMLEJmtNKxRfGJybNVNXUNTa0zAJxdr-9vA3HoLCxi0zMM3adw681C4Qalku9AktDsaDquHIOVU_gOxgwmVoEAoF2sv3-U1mIIkGPIGgA9No9DAjBTpDN9ABlDDSUi1U4QOQwCLRGBUxn0jR8gxxDRpXB-UgAVxQ9Os1glnPGngAvIYQOVNQrFcqoO5dLANSBIpgsFLZeJUrVEogAMQvADsABEAEIvACCIRAuqVaUNtJNAHd6mdEAAWSpknVxf0qo0wE1m7CWmXWtJ2x2uj3e2OXeMGmnGzUpi3S9MsG1QLMugDCdYjWwAokErqU_JG7mQHmZ7XWZhGAMxOvO-uNmfXudDkE3akCBksgUMscNR8Hjy5UyUV-Xi2h-P2T2gsfQAMnIkXGQSpJ6PIuk-gAshRb4-Jw_9AAVGXwN_3s59AAdRgFh_w_QCv2kGU_DgcCC2PR8ADEAngxVEJZNBaDQvVAOZdMcNvQ992IhDPxmbQzA4AJSDAylAIg09mymOo4GkW9T0Y89L2vDiANPC8rxQG96M4si7wAcX8ORPD4riXRlWg2Tk8SBJ44SVPQkU1KEkS73FejSKVA8AMfcpxCo_xcTohjVP0ZjcFY9jRP4-yWIgNjNNwnTeJcripL8GSKT8uyFKU5z9LswTfMirS72ijSQqVQzdRFIzcMfIckksmibPfKL1L0sS4tPAKgq84yfMS2LvP0MrZKS2qwuUxrKu43SKuPKqitSlKSNM_QIzOHLrJwtqEp6riHKczrtPamLitq6aPIixa2ua1bXIm2b4sKryiOFeiogMEBBH4IA&query=file=/index.html" target="_blank">Codesandbox</a> to see the actual result of the code.

Recreate the table by following the steps below.

1. First, make a local copy of our [timetable.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable.html){:target="_blank"} file in a new directory on your local machine. The HTML contains the same table you saw above, minus the column styling information.
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
