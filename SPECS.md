# WDX-180 | Technical Details & Specifications

---

>> JEKYLL

## Jekyll | About the main website and GitHub Pages

  Website: https://in-tech-gration.github.io/WDX-180/

  The following files and folders are part of the **Jekyll** static site generator used by GitHub Pages to build our main [website](https://in-tech-gration.github.io/WDX-180/):

  ```
  .
  ├── curriculum
  ├── README.md
  ├── _config.yml
  └── assets
      ├── WDX.Header.Alternative.jpg
      ├── WDX.Header.jpg
      ├── css
      └── jekyll
  ```

> "By default, Jekyll doesn't build files or folders that:
> 
> are located in a folder called `/node_modules` or `/vendor`
>
> start with _, ., or #
>
> end with ~
>
> are excluded by the exclude setting in your configuration file
>
> If you want Jekyll to process any of these files, you can use the include setting in your configuration file. (_config.yml)

## Jekyll | How to | Change Website Styling (CSS)

  Edit the following file:

  - `assets/jekyll/css/style.scss`

## Jekyll | How to | Change Website Layout (HTML)

  Edit the following files:

  - `assets/jekyll/_layouts/default.html` (Main HTML file)
  - `assets/jekyll/_includes/` (Includes)

## Jekyll | How to | Include CSS & JS in a markdown file

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

  The JS files must be placed inside `assets/jekyll/_includes/`. If this is a JS library it must be placed inside `assets/jekyll/_includes/libs/`.

  ```markdown
  ---
  load_script_js: 
    - setup_faq.js
    - app.js
  ---

  # Markdown content here...
  ```

  The JS files must be placed in the `assets/jekyll/_includes/` folder.

  The code that injects both CSS and JS inside Jekyll-generated files can be found at the bottom of this template: `assets/jekyll/_layouts/default.html`

## Jekyll | How to | Create markdown links that open in a new Tab

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
    "description": "SGEN:Kramdown target _blank"
  },
  ```

## Jekyll | How to | Prevent build on GitHub Pages

  Just include a `.nojekyll` file in the repo.

---

## About the Instructor's Cockpit Tool

  This is a tool that helps instructors and mentors track their students' progress.

  To launch the tool: 
  
  - `npm install` inside the `tools/instructor` folder.
  - `npm run cockpit`

  **Tech Specs:**

  - Express.js (backend)
  - JavaScript (frontend)

  **Configuration:**

  You first need to create one or more `yaml` files inside the `teaching/cohorts/` folder which must contain a list of students. For a sample `yaml` file check `/teaching/cohort.yaml.sample`.

  **IMPORTANT:** You should keep the `/teaching/cohorts/` folder in `.gitignore` and **never** push it on GitHub.

---

## About the `npm run learn` platform 

  This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

  The Next.js project (now) lives inside the npm-run-learn branch

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

### Getting Started

  First, run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  ```

  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

  [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

  The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

  This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

  To learn more about Next.js, take a look at the following resources:

  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

  You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### About the template

  Read [https://cruip.com/docs/next-js-templates-tailwind-css/](https://cruip.com/docs/next-js-templates-tailwind-css/)