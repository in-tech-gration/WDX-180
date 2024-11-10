# Web Development X 

## What's here?

Here are some details about how this repository is organized and what kind of tools and resources you are expected to find.

You will also find instructions on how to operate some of the available tools, both as a student and as an instructor, mentor or contributor.

## File and Folder Structure

Let's take a look a the repository's folder structure:

```
.
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── NEXTJS.README.md
├── README.md
├── SPECS.md
├── 📂 app/
├── 📂 assets/
├── 📂 components/
├── 📂 curriculum/
├── 📂 exercises/
├── next-env.d.ts
├── next.config.js
├── 📂 node_modules/
├── package-lock.json
├── package.json
├── postcss.config.js
├── 📂 public/
├── 📂 resources/
    ├── 📂 HTTP/
    ├── PRODUCTIVITY.md
    ├── WDX.md
    ├── 📂 assets/
    ├── 📂 codecademy/
    ├── 📂 glossary/
    ├── resources.json
    ├── resources.schema.json
    ├── terms.json
    └── 📂 tools/
├── 📂 staff/
├── tailwind.config.js
├── 📂 teaching/
├── 📂 tools/
├── tsconfig.json
└── 📂 user/

14 directories, 15 files
```

Now, let's briefly explain what each file and folder contains:

- **CHANGELOG.md**:
...
- **LICENSE**: This is the GNU General Public License (v3) under which the content of this repository operates.
- **user/**: This is the student's personal folder. This is where the student will store all of their personal progress data, code submissions and other related resources.

**Where can I temporarily store my own files?**

In our `.gitignore` we have an entry for a folder named `.personal` under which you can place any temporary files or folders.

## The WDX Platform (Next.js)

### How to do X?

#### TODO: How to load JavaScript files in a Markdown?

  _(Work in progress...)_

#### TODO: How to enable Flems in a Markdown?

  ```markdown

    ```html
    <style></style>
    <section>Content</section>
    ```

  ```

  [&#9658; Live coding](#flems-enable)

#### How to launch the platform?

  1) While inside the root folder, run the following command:

  `npm run learn`

#### How to update the side menu?

  1) Open `/components/ui/sidebar.tsx`

  2) Find the `/* Links */` section and update the links. There's a `/* New Link: Title */` commented section that will help you get started.
