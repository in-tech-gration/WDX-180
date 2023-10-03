---
title: Images, media, and form elements
slug: Learn/CSS/Building_blocks/Images_media_form_elements
page-type: learn-module-chapter
---

# Images, media, and form elements

_(Updated: 13/09/2023)_

In this lesson we will take a look at how certain special elements are treated in CSS. Images, other media, and form elements behave a little differently from regular boxes in terms of your ability to style them with CSS. Understanding what is and isn't possible can save some frustration, and this lesson will highlight some of the main things that you need to know.

**Prerequisites:**

- Basic computer literacy
- Basic software installed
- Basic knowledge of working with files
- HTML basics
- How CSS works

**Objective:**

- To understand the way that some elements behave unusually when styled with CSS.

## Replaced elements

Images and video are described as **[replaced elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)**. This means that CSS cannot affect the internal layout of these elements — only their position on the page amongst other elements. As we will see however, there are various things that CSS can do with an image.

Certain replaced elements, such as images and video, are also described as having an **aspect ratio**. This means that it has a size in both the horizontal (x) and vertical (y) dimensions, and will be displayed using the intrinsic dimensions of the file by default.

## Sizing images

As you already know from following these lessons, everything in CSS generates a box. If you place an image inside a box that is smaller or larger than the intrinsic dimensions of the image file in either direction, it will either appear smaller than the box, or overflow the box. You need to make a decision about what happens with the overflow.

In the example below we have two boxes, both 200 pixels in size:

- One contains an image which is smaller than 200 pixels — it is smaller than the box and doesn't stretch to fill it.
- The other is larger than 200 pixels and overflows the box.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/images/size.html" 
            width="100%" 
            height="1000"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/images/size.html" target="_blank">
[ External link ]
</a>
</p>

So what can we do about the overflowing issue?

As we learned in [our previous lesson](../sizing_items_in_css/index.md), a common technique is to make the [`max-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width) of an image 100%. This will enable the image to become smaller in size than the box but not larger. This technique will also work with other replaced elements such as [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)s, or [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)s.

**Try adding `max-width: 100%` to the `<img>` element in the example above. You will see that the smaller image remains unchanged, but the larger one becomes smaller to fit into the box.**

You can make other choices about images inside containers. For example, you may want to size an image so it completely covers a box.

The [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) property can help you here. When using `object-fit` the replaced element can be sized to fit a box in a variety of ways.

Below we have used the value `cover`, which sizes the image down, maintaining the aspect ratio so that it neatly fills the box. As the aspect ratio is maintained, some parts of the image will be cropped by the box.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/images/object-fit.html" 
            width="100%" 
            height="1000"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/images/object-fit.html" target="_blank">
[ External link ]
</a>
</p>

If we use `contain` as a value, the image will be scaled down until it is small enough to fit inside the box. This will result in "letterboxing" if it is not the same aspect ratio as the box.

You could also try the value of `fill`, which will fill the box but not maintain the aspect ratio.

## Replaced elements in layout

When using various CSS layout techniques on replaced elements, you may well find that they behave slightly differently from other elements. For example, in a flex or grid layout elements are stretched by default to fill the entire area. Images will not stretch, and instead will be aligned to the start of the grid area or flex container.

You can see this happening in the example below where we have a two column, two row grid container, which has four items in it. All of the `<div>` elements have a background color and stretch to fill the row and column. The image, however, does not stretch.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/images/layout.html" 
            width="100%" 
            height="1000"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/images/layout.html" target="_blank">
[ External link ]
</a>
</p>

If you are following these lessons in order then you may not have looked at layout yet. Just keep in mind that replaced elements, when they become part of a grid or flex layout, have different default behaviors, essentially to avoid them being stretched strangely by the layout.

To force the image to stretch to fill the grid cell it is in, you'd have to do something like the following:

```css
img {
  width: 100%;
  height: 100%;
}
```

This would, however, stretch the image, so it's probably not what you'd want to do.

## Form elements

Many form controls are added to your page by way of the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element — this defines simple form fields such as text inputs, through to more complex fields such as color and date pickers. There are some additional elements, such as [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) for multiline text input, and also elements used to contain and label parts of forms such as [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) and [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend).

HTML also contains attributes that enable web developers to indicate which fields are required, and even the type of content that needs to be entered. If the user enters something unexpected, or leaves a required field blank, the browser can show an error message. Different browsers vary with one another in how much styling and customization they allow for such items.

### Styling text input elements

Elements that allow for text input, such as `<input type="text">`, and the more specific `<input type="email">`, and the `<textarea>` element are quite easy to style and tend to behave just like other boxes on your page. The default styling of these elements will differ, however, based on the operating system and browser that your user visits the site with.

In the example below we have styled some text inputs using CSS — you can see that things such as borders, margins and padding all apply as you would expect. We are using attribute selectors to target the different input types. Try changing how this form looks by adjusting the borders, adding background colors to the fields, and changing fonts and padding.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/images/form.html" 
            width="100%" 
            height="1000"></iframe>

<p><a href="https://in-tech-gration.github.io/css-examples/learn/images/form.html" target="_blank">
[ External link ]
</a>
</p>

> **Warning:** You should take care when changing the styling of form elements to make sure it is still obvious to the user they are form elements. You could create a form input with no borders and background that is almost indistinguishable from the content around it, but this would make it very hard to recognize and fill in.

Many of the more complex input types are rendered by the operating system and are inaccessible to styling. You should, therefore, always assume that forms are going to look quite different for different visitors and test complex forms in a number of browsers.

### Inheritance and form elements

In some browsers, form elements do not inherit font styling by default. Therefore, if you want to be sure that your form fields use the font defined on the body, or on a parent element, you should add this rule to your CSS.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Form elements and box-sizing

Across browsers, form elements use different box sizing rules for different widgets. You learned about the `box-sizing` property in [our box model lesson](../the_box_model/index.md) and you can use this knowledge when styling forms to ensure a consistent experience when setting widths and heights on form elements.

For consistency, it is a good idea to set margins and padding to `0` on all elements, then add these back in when styling particular controls:

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### Other useful settings

In addition to the rules mentioned above, you should also set `overflow: auto` on `<textarea>`s to stop IE showing a scrollbar when there is no need for one:

```css
textarea {
  overflow: auto;
}
```

### Putting it all together into a "reset"

As a final step, we can wrap up the various properties discussed above into the following "form reset" to provide a consistent base to work from. This includes all the items mentioned in the last three sections:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
```

> **Note:** Normalizing stylesheets are used by many developers to create a set of baseline styles to use on all projects. Typically these do similar things to those described above, making sure that anything different across browsers is set to a consistent default before you do your own work on the CSS. They are not as important as they once were, as browsers are typically more consistent than in the past. However if you want to take a look at one example, check out [Normalize.css](https://necolas.github.io/normalize.css/), which is a very popular stylesheet used as a base by many projects.

## Summary

This lesson has highlighted some of the differences you will encounter when working with images, media, and other unusual elements in CSS.

### Sources and Attributions

**Content is based on the following sources:**

- **MDN:**
  - [Images, media, and form elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements) [(Permalink)](https://github.com/mdn/content/blob/bffe6c3486fa8cbaa2291a5e1cd67f704cf483bf/files/en-us/learn/css/building_blocks/images_media_form_elements/index.md)