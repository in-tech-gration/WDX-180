# ReactCommerce

You have applied for a React developer job at a tech company. The lead Frontend developer has sent you the following challenge to complete in order to get hired. This challenge should take no more than a day to complete.

Good luck!

## First things first...

- Give a "heart" to the [original Codepen](https://codepen.io/esco69/pen/pNXqXx){:target="_blank"}

## Instructions

Your task is to convert this [HTML/CSS page](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/javascript/frameworks/react/exercises/react-commerce-challenge/ReactCommerce.html){:target="_blank"} into a **functional React app using [Vite](https://vitejs.dev/){:target="_blank"}**.

Here are the tasks:

1. Split the web page into the following React Components:
  - `<Header />`: contains the `<Logo />`, `<NavMenu />` and the top-right `<HamburgerMenu />` (which contains the products count bubble) components. 
  - `<ProductsHeader />`: contains the `<Results />` Component which displays "**BAGS**" and the **number of products found** (6 results). The number 6 **should be dynamic**, based on the number of Products (_length of some array?_) and not a hardcoded string as it is now. It also contains a `<Close />` Component (the X)
  - A loop that displays 6 `<Product />` Components.
  - Each Component **should be placed in its own folder** along with a **.css file that contains the relevant CSS styling**.
2. When you click on the heart of each `<Product />` Component, the heart icon **should toggle** between the **black** and **white** version based on whether the product has been liked or not.
3. When you click on the shopping cart icon of each product, **the bubble at the top right should update** (increment when clicked once, decrement when clicked again and so forth). When the **selected product is in the shopping cart**, the icon should be **black** or **golden** otherwise.
4. The data for each product **should come from a JSON file**. You should use the Fetch API inside a `useEffect` hook to fetch the data. You can use the Fakestore API to get some fake product details and replace each Lorem ipsum.

## Hints

- Move the generic CSS styling into the `index.css`
- Move the `<link>` inside the `index.html`
- Use [html-to-jsx](https://transform.tools/html-to-jsx){:target="_blank"} or [html-to-jsx VSCode extension](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx){:target="_blank"} to convert HTML int o JSX
- The Product's price, like status, description and image should be **passed as Props from a parent Component**. The initial products data should be stored in a **JSON file locally** that will be fetched using a `useEffect` hook during the initial mount of some parent component. The JSON should be placed inside the public folder, and named `products.json`.

## Final Look

Here's how the **[final app](./final/){:target="_blank"}** should look and work!

---

> **Questions, comments, suggestions? Please leave them on the comment section below.**

<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>
