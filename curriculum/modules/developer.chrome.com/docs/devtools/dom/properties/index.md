---
__layout__: layouts/doc-post.njk
title: View the properties of DOM objects
date: 2022-05-05T00:00:00.000Z
description: View and filter properties of DOM objects.
authors:
  - sofiayem
tags:
  - dom
---

Use the **Elements** > **Properties** pane to browse and filter properties of [DOM][1] objects.

## Open the Properties pane {: #view-properties }

To open the **Properties** pane, follow these steps:

1. [Open DevTools](/docs/devtools/open). By default, the **Elements** panel opens.
1. In the DOM tree, select a node.
1. Open the **Properties** tab. If you can't see the tab, click **More** ![More](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/iMilAleSjckpicMkG6dM.svg), then select it from the drop-down menu.

![Elements > Properties](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/2RCwQPvXwvRO2pkiNCsQ.png)

## Spot own properties {: #spot-own-properties }

The **Properties** pane sorts and displays the object's [own properties](#own-and-inherited) first and in bold font.

![ALT_TEXT_HERE](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/NzruyEz6abYfGwIAxoku.png)

## Find the origin of an inherited property {: #origin-of-inherited-property }

The **Properties** pane evaluates accessors on built-in elements and displays them on the object as [inherited](#own-and-inherited) and in regular font.

To find the origin of an inherited property, expand an object, then its `[[Prototype]]`, then the nested `[[Prototype]]`, and so on.

![Tracing the size property up to its getter on the prototype chain.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/BBXkuc1QsZau4tLbZ3s2.png)

In this example, you can trace where the inherited `size` property came from by locating the original own (bold) property on the prototype chain together with the corresponding getter.

Additionally, prototype-specific properties are shown only on prototypes, not on objects. This makes it easier to diagnose objects.

![Prototype-specific properties.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/ZbBp2o5zGUOzIc46Xsvi.png)

## Filter properties {: #filter-properties }

To quickly find a property, start typing its name or value in the **Filter** textbox.

![Filter](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/kuYMOi8wXUNTQEiGmGQ3.png)

## Show all properties {: #show-all }

By default, the **Properties** pane doesn't show properties with `null` and `undefined` values.

To see all properties, check **Show all**.

![Properties with null values.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/k1m66AHOWpw2m96YO64u.png)

## Understand properties {: #understand-properties }

The **Elements** > **Properties** pane shows a variety of properties.

### Simple properties {: #simple-properties }

Simple properties are pairs of `<name>: <value>`.
![Simple properties.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/ZmYdzL6Ba28qSYVNt9wQ.png)

### Objects and arrays {: #objects-and-arrays }

Collapsible (![Arrow right.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/tFA9uWBcDgv8NNS1FlRm.svg)) properties are objects `{}` or arrays `[]`.
![Collapsible properties.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/p4tuMj2RjFpieyANV7s1.png)

For more information on inspecting JavaScript objects, see [Inspect object properties](/docs/devtools/console/reference/#inspect-object-properties).

### Properties that correspond to DOM nodes {: #dom-nodes }

Properties that correspond to DOM nodes are links. Click on a link to select the relevant node in the DOM tree.
![Link to the head DOM node.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/2gmf2oRmCAEY3IALwaSY.png)

### Own and inherited properties {: #own-and-inherited }

Properties in bold font are object's own. They are defined directly on the object.

Properties in regular font are inherited from the prototype chain. To show them to you, DevTools evaluates relevant accessors on built-in HTML elements.
![Own and inherited properties.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/HTNE3zZQNBOKCvR3opTC.png)
DevTools sorts own properties first to make them easier to spot.

### Enumerable and non-enumerable properties {: #enumerable-and-non-enumerable }

Enumerable properties are bright in color. Non-enumerable properties are muted.
![Enumerable and non-enumerable properties.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/X0KWrBdSyyBGzNtVfkbk.png)
You can iterate over the enumerable properties with the `for … in` loop or `Object.keys()` method.

### Methods {: #methods }

Methods are marked with an *`f ()`*.
![Method.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/KKCw924Jst5jW1qmPnHa.png)

For more information on functions, see [Inspect functions](/docs/devtools/console/reference/#inspect-functions) via the **Console**.

[1]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction
