---
title: Getting started with CSS
slug: Learn/CSS/First_steps/Getting_started
page-type: learn-module-chapter
---

Try this out in the interactive editor below (edit the code boxes) or in your local CSS document.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

# First Heading

## Changing the default behavior of elements

When we look at a well-marked up HTML document, even something as simple as our example, we can see how the browser is making the HTML readable by adding some default styling. Headings are large and bold and our list has bullets. This happens because browsers have internal stylesheets containing default styles, which they apply to all pages by default; without them all of the text would run together in a clump and we would have to style everything from scratch. All modern browsers display HTML content by default in pretty much the same way.

The live example below includes the two rules above. Try adding a rule to make a span red if it is inside a paragraph. You will know if you have it right because the span in the first paragraph will be red, but the one in the first list item will not change color.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> **Note:** As you can see, CSS gives us several ways to target elements, and we've only scratched the surface so far! We will be taking a proper look at all of these selectors and many more in our [Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) articles later on in the course.

In the live example below, you can play with different values for the various states of a link. We have added the rules above to it, and now realize that the pink color is quite light and hard to read — why not change that to a better color? Can you make the links bold?

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 1000)}}

We have removed the underline on our link on hover. You could remove the underline from all states of a link. It is worth remembering however that in a real site, you want to ensure that visitors know that a link is a link. Leaving the underline in place can be an important clue for people to realize that some text inside a paragraph can be clicked on — this is the behavior they are used to. As with everything in CSS, there is the potential to make the document less accessible with your changes — we will aim to highlight potential pitfalls in appropriate places.

Some list:

- One
  - Two
  - Three 
- Two
  - Four
  - Five