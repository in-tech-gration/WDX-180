---
title: Type, class, and ID selectors
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
page-type: learn-module-chapter
---

# Type, class, and ID selectors

_(Updated: 07/09/2023)_

In this lesson, we examine some of the simplest selectors, which you will probably use most frequently in your work.

**Prerequisites:**

  - Basic computer literacy
  - Basic software installed
  - Basic knowledge of working with files
  - HTML Basics
  - How CSS works

**Objective:**

  - To learn about the different CSS selectors we can use to apply CSS to a document.

## Type selectors

A **type selector** is sometimes referred to as a _tag name selector_ or _element selector_ because it selects an HTML tag/element in your document. In the example below, we have used the `span`, `em` and `strong` selectors.

**Try adding a CSS rule to select the `<h1>` element and change its color to blue.**

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/selectors/type.html" 
            width="100%" 
            height="1100"></iframe>
<p>
  <a href="https://in-tech-gration.github.io/css-examples/learn/selectors/type.html" target="_blank">
    [ External link ]
  </a>
</p>

## The universal selector

The universal selector is indicated by an asterisk (`*`). It selects everything in the document (or inside the parent element if it is being chained together with another element and a descendant combinator). In the following example, we use the universal selector to remove the margins on all elements. Instead of the default styling added by the browser — which spaces out headings and paragraphs with margins — everything is close together.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/selectors/universal.html" 
            width="100%" 
            height="750"></iframe>
<p>
  <a href="https://in-tech-gration.github.io/css-examples/learn/selectors/universal.html" target="_blank">
    [ External link ]
  </a>
</p>

This kind of behavior can sometimes be seen in "reset stylesheets", which strip out all of the browser styling. Since the universal selector makes global changes, we use it for very specific situations, such as the one described below.

### Using the universal selector to make your selectors easier to read

One use of the universal selector is to make selectors easier to read and more obvious in terms of what they are doing. For example, if we wanted to select any descendant elements of an `<article>` element that are the first child of their parent, including direct children, and make them bold, we could use the [`:first-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child){:target="_blank"} pseudo-class. We will learn more about this in the lesson on **pseudo-classes and pseudo-elements**, as a descendant selector along with the `<article>` element selector:

```css
article :first-child {
  font-weight: bold;
}
```

However, this selector could be confused with `article:first-child`, which will select any `<article>` element that is the first child of another element.

To avoid this confusion, we can add the universal selector to the `:first-child` pseudo-class, so it is more obvious what the selector is doing. It is selecting _any_ element which is the first-child of an `<article>` element, or the first-child of any descendant element of `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Although both do the same thing, the readability is significantly improved.

## Class selectors

The class selector starts with a dot (`.`) character. It will select everything in the document with that class applied to it. In the live example below we have created a class called `highlight`, and have applied it to several places in my document. All of the elements that have the class applied are highlighted.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/selectors/class.html" 
            width="100%" 
            height="750"></iframe>
<p>
  <a href="https://in-tech-gration.github.io/css-examples/learn/selectors/class.html" target="_blank">
    [ External link ]
  </a>
</p>

### Targeting classes on particular elements

You can create a selector that will target specific elements with the class applied. In this next example, we will highlight a `<span>` with a class of `highlight` differently to an `<h1>` heading with a class of `highlight`. We do this by using the type selector for the element we want to target, with the class appended using a dot, with no white space in between.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/selectors/class-type.html" 
            width="100%" 
            height="750"></iframe>
<p>
  <a href="https://in-tech-gration.github.io/css-examples/learn/selectors/class-type.html" target="_blank">
    [ External link ]
  </a>
</p>

This approach reduces the scope of a rule. The rule will only apply to that particular element and class combination. You would need to add another selector if you decided the rule should apply to other elements too.

### Target an element if it has more than one class applied

You can apply multiple classes to an element and target them individually, or only select the element when all of the classes in the selector are present. This can be helpful when building up components that can be combined in different ways on your site.

In the example below, we have a `<div>` that contains a note. The grey border is applied when the box has a class of `notebox`. If it also has a class of `warning` or `danger`, we change the [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color){:target="_blank"}.

We can tell the browser that we only want to match the element if it has two classes applied by chaining them together with no white space between them. You'll see that the last `<div>` doesn't get any styling applied, as it only has the `danger` class; it needs `notebox` as well to get anything applied.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/selectors/class-many.html" 
            width="100%" 
            height="900"></iframe>
<p>
  <a href="https://in-tech-gration.github.io/css-examples/learn/selectors/class-many.html" target="_blank">
    [ External link ]
  </a>
</p>

## ID selectors

An ID selector begins with a `#` rather than a dot character, but is used in the same way as a class selector. However, an ID can be used only once per page, and elements can only have a single `id` value applied to them. It can select an element that has the `id` set on it, and you can precede the ID with a type selector to only target the element if both the element and ID match. You can see both of these uses in the following example:

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/selectors/id.html" 
            width="100%" 
            height="750"></iframe>
<p>
  <a href="https://in-tech-gration.github.io/css-examples/learn/selectors/id.html" target="_blank">
    [ External link ]
  </a>
</p>

> **Warning:** Using the same ID multiple times in a document may appear to work for styling purposes, but don't do this. It results in invalid code, and will cause strange behavior in many places.

> **Note:** As we learned in the lesson on specificity, an ID has high specificity. It will overrule most other selectors. In most cases, it is preferable to add a class to an element instead of an ID. However, if using the ID is the only way to target the element — perhaps because you do not have access to the markup and cannot edit it — this will work.

## Summary

That wraps up Type, class, and ID selectors. We'll continue exploring selectors by looking at [attribute selectors](../attribute_selectors/index.md).

### Sources and Attributions

**Content is based on the following sources:**

- **MDN:**
  - [Type, class, and ID selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/da6e9eb84d4020540ab07b43b2be295c73173ffd/files/en-us/learn/css/building_blocks/selectors/type_class_and_id_selectors/index.md){:target="_blank"}