---
title: Writing Markup with JSX
load_script_js_via_src:
  - flems/flems.html
  - flems/flems_init.js
---

### Schedule

  - [Study](#study-plan-NN)

### Study Plan

**Writing Markup with JSX**

*JSX* is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

- Why React mixes markup with rendering logic
- How JSX is different from HTML
- How to display information with JSX

## JSX: Putting markup into JavaScript

The Web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript—often in separate files! Content was marked up inside HTML while the page's logic lived separately in JavaScript:

![](./assets/writing_jsx_js.png)

But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why **in React, rendering logic and markup live together in the same place—components.**

![](./assets/writing_jsx_js.png)

Keeping a button's rendering logic and markup together ensures that they stay in sync with each other on every edit. Conversely, details that are unrelated, such as the button's markup and a sidebar's markup, are isolated from each other, making it safer to change either of them on their own.

Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information. The best way to understand this is to convert some HTML markup to JSX markup.

> JSX and React are two separate things. They're often used together, but you *can* [use them independently](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform){:target="_blank"} of each other. JSX is a syntax extension, while React is a JavaScript library.

## Converting HTML to JSX

Suppose that you have some (perfectly valid) HTML:

```html
<h1>Hedy Lamarr's Todos</h1>
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  class="photo"
>
<ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
</ul>
```

[&#9658; Live coding](#flems-enable)

And you want to put it into your component:

```jsx
export default function TodoList() {
  return (
    // ???
  )
}
```

If you copy and paste it as is, it will not work. Give a try locally to make it work!:

<!-- <Sandpack> -->

```jsx
export default function TodoList() {
  return (
    // This doesn't quite work!
    <h1>Hedy Lamarr's Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    >
    <ul>
      <li>Invent new traffic lights
      <li>Rehearse a movie scene
      <li>Improve the spectrum technology
    </ul>
  );
}
```

[&#9658; Live coding](#flems-enable)

```css
img { height: 90px }
```

<!-- </Sandpack> -->

This is because JSX is stricter and has a few more rules than HTML! If you read the error messages above, they'll guide you to fix the markup, or you can follow the guide below.

<!-- <Note> -->

> Most of the time, React's on-screen error messages will help you find where the problem is. Give them a read if you get stuck!

<!-- </Note> -->

## The Rules of JSX

### 1. Return a single root element

To return multiple elements from a component, **wrap them with a single parent tag.**

For example, you can use a `<div>`:

<!-- ```js {1,11} -->
```jsx
<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>
```

If you don't want to add an extra `<div>` to your markup, you can write `<>` and `</>` instead:

<!-- ```js {1,11} -->
```jsx
<>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</>
```

This empty tag is called a *[Fragment.](https://react.dev/reference/react/Fragment){:target="_blank"}* Fragments let you group things without leaving any trace in the browser HTML tree.

<!-- <DeepDive> -->

> **Why do multiple JSX tags need to be wrapped?**
>
> JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can't return two objects from a function without wrapping them into an array. This explains why you also can't return two JSX tags without wrapping them into another tag or a Fragment.

<!-- </DeepDive> -->

### 2. Close all the tags

JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>oranges` must be written as `<li>oranges</li>`.

This is how Hedy Lamarr's image and list items look closed:

<!-- ```js {2-6,8-10} -->
```jsx
<>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
   />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
</>
```

### 3. camelCase <s>all</s> most of the things!

JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can't contain dashes or be reserved words like `class`.

This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of `stroke-width` you use `strokeWidth`. Since `class` is a reserved word, in React you write `className` instead, named after the [corresponding DOM property](https://developer.mozilla.org/en-US/docs/Web/API/Element/className){:target="_blank"}:

<!-- ```js {4} -->
```jsx
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>
```

You can [find all these attributes in the list of DOM component props.](https://react.dev/reference/react-dom/components/common){:target="_blank"} If you get one wrong, don't worry—React will print a message with a possible correction to the [browser console.](https://developer.mozilla.org/docs/Tools/Browser_Console){:target="_blank"}

<!-- <Pitfall> -->

> For historical reasons, [`aria-*`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA){:target="_blank"} and [`data-*`](https://developer.mozilla.org/docs/Learn/HTML/Howto/Use_data_attributes){:target="_blank"} attributes are written as in HTML with dashes.

<!-- </Pitfall> -->

### Pro-tip: Use a JSX Converter

Converting all these attributes in existing markup can be tedious! We recommend using a [converter](https://transform.tools/html-to-jsx){:target="_blank"} to translate your existing HTML and SVG to JSX. Converters are very useful in practice, but it's still worth understanding what is going on so that you can comfortably write JSX on your own.

Here is your final result:

<!-- <Sandpack> -->

{% raw %}

```jsx
export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hedy_Lamarr_Ziegfeld_Girl.jpg/1024px-Hedy_Lamarr_Ziegfeld_Girl.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
        style={{ height: '90px' }}
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
```

[&#9658; Live coding](#flems-enable)

{% endraw %}

```css
img { height: 90px }
```

<!-- </Sandpack> -->

<!-- <Recap> -->
## Recap

Now you know why JSX exists and how to use it in components:

- React components group rendering logic together with markup because they are related.
- JSX is similar to HTML, with a few differences. You can use a [converter](https://transform.tools/html-to-jsx){:target="_blank"} if you need to.
- Error messages will often point you in the right direction to fixing your markup.

<!-- </Recap> -->

<!-- <Challenges> -->

---

## Try out some challenges

#### Challenge: Convert some HTML to JSX

This HTML was pasted into a component, but it's not valid JSX. Fix it:

<!-- <Sandpack> -->

```jsx
export default function Bio() {
  return (
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br><br>
      <b>And <i>pictures</b></i> of scientists!
    </p>
  );
}
```

```css
.intro {
  background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.summary {
  padding: 20px;
  border: 10px solid gold;
}
```

<!-- </Sandpack> -->

Whether to do it by hand or using the converter is up to you!

<details markdown="1">
  <summary>
    <h4>Show Solution</h4>
  </summary>
  
  <!-- <Solution> -->
  
  <!-- <Sandpack> -->
  
  ```jsx
  export default function Bio() {
    return (
      <div>
        <div className="intro">
          <h1>Welcome to my website!</h1>
        </div>
        <p className="summary">
          You can find my thoughts here.
          <br /><br />
          <b>And <i>pictures</i></b> of scientists!
        </p>
      </div>
    );
  }
  ```
  
  ```css
  .intro {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .summary {
    padding: 20px;
    border: 10px solid gold;
  }
  ```
  
  <!-- </Sandpack> -->
  
  <!-- </Solution> -->
</details>
<!-- </Challenges> -->

<!-- ### Extra Resources -->

### Sources and Attributions

- [Writing Markup with JSX - React](https://react.dev/learn/writing-markup-with-jsx){:target="_blank"} [(Permalink)](https://github.com/reactjs/react.dev/blob/5de85198a3c575d94a395138e3f471cc7172a51c/src/content/learn/writing-markup-with-jsx.md){:target="_blank"}

---

> **Questions, comments, suggestions? Please leave them on the comment section below.**

<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>