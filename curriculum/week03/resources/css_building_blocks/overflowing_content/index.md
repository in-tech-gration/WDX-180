---
title: Overflowing content
slug: Learn/CSS/Building_blocks/Overflowing_content
page-type: learn-module-chapter
---

# Overflowing content

_(Updated: 12/09/2023)_

Overflow is what happens when there is too much content to fit in an element box. In this guide, you will learn what overflow is and how to manage it.

**Prerequisites:**

- Basic computer literacy
- Basic software installed
- Basic knowledge of working with files
- HTML basics
- How CSS works

**Objective:**

- To understand overflow and how to manage it.

## What is overflow?

Everything in CSS is a box. You can constrain the size of these boxes by assigning values of [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width){:target="_blank"} and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height){:target="_blank"} (or [`inline-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size){:target="_blank"} and [`block-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size)){:target="_blank"}. **Overflow happens when there is too much content to fit in a box.** CSS provides various tools to manage overflow. As you go further with CSS layout and writing CSS, you will encounter more overflow situations.

## CSS tries to avoid "data loss"

Let's consider two examples that demonstrate the default behavior of CSS when there is overflow.

The first example is a box that has been restricted by setting a `height`. Then we add content that exceeds the allocated space. The content overflows the box and falls into the paragraph below.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/overflow/block-overflow.html" 
            width="100%" 
            height="700"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/overflow/block-overflow.html" target="_blank">
[ External link ]
</a>
</p>

The second example is a word in a box. The box has been made too small for the word and so it breaks out of the box.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/overflow/inline-overflow.html" 
            width="100%" 
            height="600"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/overflow/inline-overflow.html" target="_blank">
[ External link ]
</a>
</p>

You might wonder why CSS works in such a messy way, displaying content outside of its intended container. Why not hide overflowing content? Why not scale the size of the container to fit all the content?

Wherever possible, CSS does not hide content. This would cause data loss. The problem with data loss is that you might not notice. Website visitors may not notice. If the submit button on a form disappears and no one can complete the form, this could be a big problem! Instead, CSS overflows in visible ways. You are more likely to see there is a problem. At worst, a site visitor will let you know that content is overlapping.

If you restrict a box with a `width` or a `height`, CSS trusts you to know what you are doing. CSS assumes that you are managing the potential for overflow. In general, restricting the block dimension is problematic when the box contains text. There may be more text than you expected when designing the site, or the text may be larger (for example, if the user has increased their font size).

The next two lessons explain different approaches to control sizing in ways that are less prone to overflow. However, if you need a fixed size, you can also control how the overflow behaves. Let's read on!

## The overflow property

The [`overflow`](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow){:target="_blank"} property helps you manage an element's content overflow. Using this property, you can convey to a browser how it should handle overflow content. The default value of the [`<overflow>`](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow_value){:target="_blank"} value type is `visible`. With this default setting, one can see content when it overflows.

To crop content when it overflows, you can set `overflow: hidden`. This does exactly what it says: it hides overflow. Beware that this can make some content invisible. You should only do this if hiding content won't cause problems.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/overflow/hidden.html" 
            width="100%" 
            height="700"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/overflow/hidden.html" target="_blank">
[ External link ]
</a>
</p>

Instead, perhaps you would like to add scrollbars when content overflows? Using `overflow: scroll`, browsers with visible scrollbars will always display them—even if there is not enough content to overflow. This offers the advantage of keeping the layout consistent, instead of scrollbars appearing or disappearing, depending upon the amount of content in the container.

**Remove some content from the box below. Notice how the scrollbars remain, even if there is no need for scrolling.**

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/overflow/scroll.html" 
            width="100%" 
            height="700"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/overflow/scroll.html" target="_blank">
[ External link ]
</a>
</p>

In the example above, we only need to scroll on the `y` axis, however we get scrollbars in both axes. To just scroll on the `y` axis, you could use the [`overflow-y`](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y){:target="_blank"} property, setting `overflow-y: scroll`.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/overflow/scroll-y.html" 
            width="100%" 
            height="700"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/overflow/scroll-y.html" target="_blank">
[ External link ]
</a>
</p>

You can also enable scrolling along the x-axis by using [`overflow-x`](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x){:target="_blank"}, although this is not a recommended way to accommodate long words! If you have a long word in a small box, consider using the [`word-break`](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break){:target="_blank"} or [`overflow-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap){:target="_blank"} property.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/overflow/scroll-x.html" 
            width="100%" 
            height="600"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/overflow/scroll-x.html" target="_blank">
[ External link ]
</a>
</p>

As with `scroll`, you get a scrollbar in the scrolling dimension whether or not there is enough content to cause a scrollbar.

> **Note:** You can specify x- and y-axis scrolling using the `overflow` property, passing two values. If two keywords are specified, the first applies to `overflow-x` and the second applies to `overflow-y`. Otherwise, both `overflow-x` and `overflow-y` are set to the same value. For example, `overflow: scroll hidden` would set `overflow-x` to `scroll` and `overflow-y` to `hidden`.

If you only want scrollbars to appear when there is more content than can fit in the box, use `overflow: auto`. This allows the browser to determine if it should display scrollbars.

**In the example below, remove content until it fits into the box. You should see the scrollbars disappear.**

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/overflow/auto.html" 
            width="100%" 
            height="700"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/overflow/auto.html" target="_blank">
[ External link ]
</a>
</p>

## Overflow establishes a Block Formatting Context

When you use the `<overflow>` values `scroll` and `auto`, you create a [**Block Formatting Context** (BFC)](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context){:target="_blank"}. This means that the content of an element box with these `overflow` values acquires a self-contained layout. Content outside such an element box cannot poke into the element box, and nothing from the element box can poke into the surrounding layout. This enables scrolling behavior, as all box content needs to be contained and not overlap to create a consistent scrolling experience.

## Unwanted overflow in web design

Modern layout methods manage overflow. They largely work without assumptions or dependencies for how much content there will be on a web page.

This was not always the norm. In the past, some sites were built with fixed-height containers to align box bottoms. These boxes may otherwise have had no relationship to each other. This was fragile. If you encounter a box where content is overlaying other content on the page in legacy applications, you will now recognize that this happens with overflow. Ideally, you will refactor the layout to not rely on fixed-height containers.

When developing a site, always keep overflow in mind. Test designs with large and small amounts of content. Increase and decrease font sizes by at least two increments. Ensure your CSS is robust. Changing overflow values to hide content or to add scrollbars is reserved for a few select use cases (for example, where you intend to have a scrolling box).

## Summary

This lesson introduced the concept of overflow. You should understand that default CSS avoids making overflowing content invisible. You have discovered that you can manage potential overflow, and also, that you should test work to make sure it does not accidentally cause problematic overflow.

### Sources and Attributions

**Content is based on the following sources:**

- **MDN**
  - [Overflowing Content](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/b2a5f62d66b4e3d71704017d0fab7ad710e68057/files/en-us/learn/css/building_blocks/overflowing_content/index.md){:target="_blank"}