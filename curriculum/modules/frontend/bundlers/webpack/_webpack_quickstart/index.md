---
title: Webpack Quickstart
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

"Webpack is a JavaScript bundler for your web application. In the past, you had to link JavaScript files manually in HTML files. Nowadays, Webpack takes care about it."

NOTE: It would be nice to initialize the project folder as a git repository, then stage and commit each step in order to see what changes as you progress (e.g. by running git diff) and of course, going back a few steps to check what went wrong.

#### MINIMAL WEBPACK SETUP FOR AN HTML/JS APPLICATION

`mkdir project`
`cd project`
`mkdir public`
`touch public/index.html`

Add `<script src="./bundle.js"></script>` to index.html

`mkdir src`
`touch src/index.js`

"We are using Webpack to generate one JavaScript bundle from all our source code in the src/ folder, which will be automatically put into your public/ folder afterward."

"You will use the Webpack Dev Server to serve your project in a local environment with a local web server for development purposes."

`npm init -y`
`npm install --save-dev webpack webpack-dev-server webpack-cli --stats=minimal`
`touch webpack.config.js`

package.json:

```json
  "scripts": {
    "start": "webpack serve --config ./webpack.config.js --mode development"
  },
```

webpack.config.js:

```js
const path = require('path');

module.exports = {
  // entry: './src/index.js', // Cross-platform issues?
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.resolve(__dirname, './public')
  }
};
```

#### How to build for production

package.json:

```json
"scripts": {
  "build": "webpack"
}
```

#### Adding Babel to the mix

"Babel enables one writing code with JavaScript features that aren't supported by most browser yet. By using Babel, the code which isn't supported yet, will get transpiled back to vanilla JavaScript so that every environment (e.g. browser) can interpret it."

`npm install --save-dev @babel/core @babel/preset-env babel-loader`

package.json:

```json
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  },
```

webpack.config.js:

```js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  ...
}
```

"An optional step would be to extract your Babel configuration into a separate .babelrc configuration file."

`touch .babelrc`

.babelrc:

```js
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

#### Installing your first Babel plugin

`npm install babel-plugin-loop-optimizer`

Check: https://github.com/vihanb/babel-plugin-loop-optimizer

package.json:

```json
  "babel": {
    ...
    "plugins": ["babel-plugin-loop-optimizer"]
  },
```

Or, through `.babelrc`:

```js
{
  "plugins": ["babel-plugin-loop-optimizer"]
}
```

#### Webpack loaders

`npm install markdown-loader html-loader`

webpack.config.js:

```js
  module: {
    rules: [
      ...
      // Markdown-loader:
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {
              // Pass options to marked
              // See https://marked.js.org/using_advanced#options
            },
          },
        ],
      }
    ]
  },
```

Usage:

```js
import md from "./test.md";
document.body.innerHTML = md;
```

#### Configuring ESLint

  https://www.robinwieruch.de/webpack-eslint/

#### Adding TypeScript support

Follow: https://webpack.js.org/guides/typescript/

`npm i -D typescript ts-loader`

`npx tsc --init`

`import "./app.ts";`

webpack.config.js:

```js
module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  ...
  module: {
    rules: [
      // TypeScript:
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', ".ts"] // .ts
  }  
```

<!-- MD + TS? => https://stackoverflow.com/a/56659180/4861760 -->

#### BABEL PLUGINS

**Write your first Babel Transformer**

  **(1) Hello World**

  babelPlugin.js:

  ```js
  module.exports = function () {
    const SimpleVisitor = {
      StringLiteral(path, state) {
        if (path.node.value === "We'll never survive!") {
          path.node.value = "Nonsense. You're only saying that because no one ever has.";
        }
      },
    };
  
    return { visitor: SimpleVisitor };
  };
  ```

  .babelrc:

  ```json
  "plugins": [ "./babelPlugin.js" ]
  ```

> https://lihautan.com/step-by-step-guide-for-writing-a-babel-transformation/

> https://lihautan.com/creating-custom-javascript-syntax-with-babel/

## REFERENCES


### Summary

### Exercises

### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_

### Sources and Attributions

  - [How to Webpack 5 - Setup Tutorial](https://www.robinwieruch.de/webpack-setup-tutorial/){:target="_blank"}

  - [How to Webpack 5 with Babel - Setup Tutorial](https://www.robinwieruch.de/webpack-babel-setup-tutorial/){:target="_blank"}

  - [Getting Started](https://webpack.js.org/guides/getting-started/)

  - [Setting up HtmlWebpackPlugin](https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin)

  - [Setting up a Webpack DevServer](https://webpack.js.org/guides/development/)

  - [How to Webpack 5 - Setup Tutorial](https://www.robinwieruch.de/webpack-setup-tutorial/)

  - [webpack Tutorial: How to Set Up webpack 5 From Scratch](https://www.taniarascia.com/how-to-use-webpack/)

  - [How to Webpack 5 with Babel - Setup Tutorial](https://www.robinwieruch.de/webpack-babel-setup-tutorial/)

  - [WRITING A BABEL PLUGIN WITH GRANDMA](https://stephencook.dev/blog/writing-a-babel-plugin-with-grandma/)