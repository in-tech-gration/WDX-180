## Jekyll | About the main website and GitHub Pages

  Website: https://in-tech-gration.github.io/WDX-180/

### Jekyll | How to | Include CSS & JS in a markdown file

  **Q: How do I load a CSS file in a particular markdown file?**

  A: You will need to add the CSS filenames in a Frontmatter property named `load_css`, for example:

  ```markdown
  ---
  load_css:
    - typography.css
    - libs/tagify.min.css
  ---

  # Markdown content here...
  ```

  The css files (e.g. `typography.css` and `tagify.min.css` from the example above) must be placed inside the `assets/jekyll/css/` folder.

  **How to include JS:**

  A: You will need to include the JS filename in a Front matter property named `load_script_js`:

  ```markdown
  ---
  load_script_js: 
    - setup_faq.js
    - app.js
  ---

  # Markdown content here...
  ```

  The JS files must be placed in the `assets/jekyll/_includes/` folder.

### Jekyll | How to | Create markdown links that open in a new Tab

  Markdown for GitHub Pages (Kramdown) supports links that open in a new Tab:

  ```markdown
  [Link](URL){:target="_blank"} 
  ```

  You can create a VSCode snippet:

  ```json
  "WDX:Kramdown target _blank": {
    "prefix": "_blank",
    "body": [
      "{:target=\"_blank\"}"
    ],
    "description": "WDX:Kramdown target _blank"
  },
  ```

---

## About the `npm run learn` platform 

  It is based on `Next.js`.

  The following files and folders are part of the **Next.js** Application:

  ```
  ├── NEXTJS.README.md
  ├── app/
  ├── components/
  ├── next-env.d.ts
  ├── next.config.js
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── public/
  ├── tailwind.config.js
  └── tsconfig.json
  ```

