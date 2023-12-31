---
title: Attribute selectors
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
page-type: learn-module-chapter
---

# Attribute Selectors

_(Updated: 07/09/2023)_

As you know from your study of HTML, elements can have attributes that give further detail about the element being marked up. In CSS you can use attribute selectors to target elements with certain attributes. This lesson will show you how to use these very useful selectors.

**Prerequisites:**

  - Basic computer literacy
  - Basic software installed
  - Basic knowledge of working with files
  - HTML Basics
  - How CSS works

**Objective:**

  - To learn what attribute selectors are and how to use them.

## Presence and value selectors

These selectors enable the selection of an element based on the presence of an attribute alone (for example `href`), or on various different matches against the value of the attribute.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Selector</th>
      <th scope="col">Example</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[<em>attr</em>]</code></td>
      <td><code>a[title]</code></td>
      <td>
        Matches elements with an <em>attr</em> attribute (whose name is the
        value in square brackets).
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>=<em>value</em>]</code></td>
      <td><code>a[href="https://example.com"]</code></td>
      <td>
        Matches elements with an <em>attr</em> attribute whose value is exactly
        <em>value</em> — the string inside the quotes.
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>~=<em>value</em>]</code></td>
      <td><code>p[class~="special"]</code></td>
      <td>
        <p>
          <br />Matches elements with an <em>attr</em> attribute whose value is
          exactly <em>value</em>, or contains <em>value</em> in its (space
          separated) list of values.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>|=<em>value</em>]</code></td>
      <td><code>div[lang|="zh"]</code></td>
      <td>
        Matches elements with an <em>attr</em> attribute whose value is exactly
        <em>value</em> or begins with <em>value</em> immediately followed by a
        hyphen.
      </td>
    </tr>
  </tbody>
</table>

In the example below you can see these selectors being used.

- By using `li[class]` we can match any list item with a class attribute. This matches all of the list items except the first one.
- `li[class="a"]` matches a selector with a class of `a`, but not a selector with a class of `a` with another space-separated class as part of the value. It selects the second list item.
- `li[class~="a"]` will match a class of `a` but also a value that contains the class of `a` as part of a whitespace-separated list. It selects the second and third list items.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/selectors/attribute.html" 
            width="100%" 
            height="800"></iframe>
<p>
  <a href="https://in-tech-gration.github.io/css-examples/learn/selectors/attribute.html" target="_blank">
    [ External link ]
  </a>
</p>

## Substring matching selectors

These selectors allow for more advanced matching of substrings inside the value of your attribute. For example, if you had classes of `box-warning` and `box-error` and wanted to match everything that started with the string "box-", you could use `[class^="box-"]` to select them both (or `[class|="box"]` as described in section above).

| Selector        | Example             | Description                                                                                        |
| --------------- | ------------------- | -------------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | Matches elements with an _attr_ attribute, whose value begins with _value_.                        |
| `[attr$=value]` | `li[class$="-box"]` | Matches elements with an _attr_ attribute whose value ends with _value_.                           |
| `[attr*=value]` | `li[class*="box"]`  | Matches elements with an _attr_ attribute whose value contains _value_ anywhere within the string. |

(Aside: It may help to note that `^` and `$` have long been used as _anchors_ in so-called _regular expressions_ to mean _begins with_ and _ends with_ respectively.)

The next example shows usage of these selectors:

- `li[class^="a"]` matches any attribute value which starts with `a`, so matches the first two list items.
- `li[class$="a"]` matches any attribute value that ends with `a`, so matches the first and third list item.
- `li[class*="a"]` matches any attribute value where `a` appears anywhere in the string, so it matches all of our list items.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/selectors/attribute-substring.html" 
            width="100%" 
            height="800"></iframe>
<p>
  <a href="https://in-tech-gration.github.io/css-examples/learn/selectors/attribute-substring.html" target="_blank">
    [ External link ]
  </a>
</p>

## Case-sensitivity

If you want to match attribute values case-insensitively you can use the value `i` before the closing bracket. This flag tells the browser to match [ASCII](https://developer.mozilla.org/en-US/docs/Glossary/ASCII){:target="_blank"} characters case-insensitively. Without the flag the values will be matched according to the case-sensitivity of the document language — in HTML's case it will be case sensitive.

In the example below, the first selector will match a value that begins with `a` — it only matches the first list item because the other two list items start with an uppercase A. The second selector uses the case-insensitive flag and so matches all of the list items.

<iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="https://in-tech-gration.github.io/css-examples/learn/selectors/attribute-case.html" 
            width="100%" 
            height="800"></iframe>
<p>
  <a href="https://in-tech-gration.github.io/css-examples/learn/selectors/attribute-case.html" target="_blank">
    [ External link ]
  </a>
</p>

> **Note:** There is also a newer value `s`, which will force case-sensitive matching in contexts where matching is normally case-insensitive, however this is less well supported in browsers and isn't very useful in an HTML context.

## Summary

Now that we are done with attribute selectors, you can continue on to the next article and read about [pseudo-class and pseudo-element selectors](../pseudo-classes_and_pseudo-elements/index.md).

### Sources and Attributions

**Content is based on the following sources:**

- **MDN:**
  - [Attribute Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/da6e9eb84d4020540ab07b43b2be295c73173ffd/files/en-us/learn/css/building_blocks/selectors/attribute_selectors/index.md){:target="_blank"}