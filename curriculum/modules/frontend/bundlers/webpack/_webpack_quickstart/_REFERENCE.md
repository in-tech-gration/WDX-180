# WEBPACK QUICKSTART (v1.0|11.2021)

  In this guide, we have created a trimmed-down version of the official webpack ['Getting Started' guide](https://webpack.js.org/guides/getting-started/), to help you set up a simple webpack project in a flash. We are using version 5 for this setup.

## Let's Get Started!

  **(1) Create the project directory and `cd` into it:**

  ```bash
  mkdir webpack-demo
  cd webpack-demo
  ```

  **(2) Initialize npm and install webpack and webpack CLI**

  ```bash
  npm init -y
  npm install webpack webpack-cli -D
  ```

  _(The `-D` flag is a shortened alias for `--save-dev`)_

  **(3) Create a basic project structure**

  ```bash
  mkdir src
  touch src/index.html
  touch src/index.js
  ```

  **(4) Create a basic content for our files**

  Update `src/index.html`:

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title><%= htmlWebpackPlugin.options.title %></title>
    </head>
    <body></body>
  </html>
  ```

  Update `src/index.js`:

  ```js
  import _ from "lodash";

  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  document.body.appendChild( element );
  ```

  **(5) Install necessary dependencies**

  ```bash
  npm install --save lodash
  ```

  **(6) Run webpack to create the production bundle**

  ```bash
  npx webpack
  ```

  After the build is over (disregard the terminal warnings for now) check the newly created dist folder to see the bundled file(s). You'll find a compressed .js file named `main.js`. This is your production JavaScript file.

  OK, but, where's the `index.html`? Let's fix this.

  **(7) Set up a webpack configuration file**

  ```bash
  touch webpack.config.js
  ```

  Update `webpack.config.js`:

  ```js
  const path = require('path');

  module.exports = {

    entry: './src/index.js',

  // Default settings below. You saw this during the initial build without a config file.
    output: {
      filename: 'main.js',    
      path: path.resolve(__dirname, 'dist'),
      clean: true // It's a good practice to clean the /dist folder before each build
    },

  };
  ```

  Now, run webpack using the config file:

  ```bash
  npx webpack --config webpack.config.js
  ```

  Change the file names (`main.js`, `dist`) and run the bundler again to see how the newly created files and folders reflect these names.

  You can omit the `--config webpack.config.js` part, since webpack will look for and use this file by default.

  **(8) Include the missing HTML file**

  We need to install and configure the `HtmlWebpackPlugin` plugin for this:

  ```bash
  npm install -D html-webpack-plugin
  ```

  Update `webpack.config.js`:

  ```js
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin'); // <-- Add this...
  ...

  module.exports = {
    ...
      // Add this section -->
      plugins: [
        new HtmlWebpackPlugin({
          title: 'My App',
          template: './src/index.html'
        }),
      ],
    ...
  ```

  **(9) Update the package.json**

  Update `package.json`:

  ```js
    ...
    "scripts": {
      "build": "webpack"
    },
    ...
  ```

  Now, all you need to do is run `npm run build` in order to run the build process.

  Your newly created `index.html` and `main.js` files are ready to be served through your local server! Take note, that the `index.html` contains a link to the `main.js` file via a script tag that was automatically placed there by webpack.

  For configuring the plugin, check all the available [options here](https://github.com/jantimon/html-webpack-plugin?tab=readme-ov-file#options).

  **(10) Run a local web server using webpack**

  Install the `webpack-dev-server` which acts as a rudimentary web server with live reloading. 

  ```bash
  npm i -D webpack-dev-server
  ```
  Update `webpack.config.js`:

  ```js
  module.exports = {
    ...
    mode: "development",
    devServer: {
      static: './dist',
      watchFiles: ['src/index.html']  // We need this line for live reload whenever the index.html changes
    },
  ```

  Update `package.json`:

  ```js
    "scripts": {
      "build": "webpack",
      "dev": "webpack serve --open"
    },
  ```

  Now, run the following command and your dev environment will be up and running with live reloading out of the box! Congratulations!

  ```bash
  npm run dev
  ```

  Keep in mind that this setup will only look for changes inside the `src` folder.

  **(11) Better Paths**

  ```js
  const path = require('path');

  ...
  entry: path.resolve(__dirname, './src/index.js')
  output: {
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  ```

## CONFIGURING BABEL  

  **(1) Configuring Babel**

  `npm install --save-dev babel-loader @babel/core @babel/preset-env`

  """
  babel-loader: This is a webpack loader that allows you to transpile your JavaScript code using Babel during the webpack build process. Webpack is a module bundler for JavaScript applications.

  @babel/core: This is the core module of Babel, which is a JavaScript compiler. Babel is used to transform ECMAScript 2015+ (ES6+) code into a backward-compatible version of JavaScript that can run in older environments.

  @babel/preset-env: This is a preset for Babel that automatically determines the Babel plugins and polyfills needed based on the target environments you specify. In other words, it helps you to use only the necessary transformations for the specific ECMAScript versions you want to support.
  """ ChatGPT

  package.json:

  ```json
  "babel": {
    "presets": [ "@babel/preset-env" ]
  },
  ```

  "@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!" ~ https://babeljs.io/docs/babel-preset-env

  """
  Your webpack.config.js file needs to include Babel in its build process as well. There, make use of the previously installed Loader for Babel. You need to tell Webpack on which files to use the loader (e.g. .js files) and optionally which folders to exclude from the process (e.g. node_modules):
  """ ~ https://www.robinwieruch.de/webpack-babel-setup-tutorial/

  ```js
  module.exports = {
    ...
    // Babel:
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

  }
  ```

  You can now use upcoming ECMAScript features: `npm run dev` or `npx webpack`

  **(2) Separating Babel Configuration**

  `touch .babelrc`

  Move this part from package.json:

  ```json
  {
    "presets": [
      "@babel/preset-env"
    ]
  }
  ```

  ...to `.babelrc`

  **(3) Adding ESNext features support**

  Plugins: https://babeljs.io/docs/plugins-list
  Decorators: https://babeljs.io/docs/babel-plugin-proposal-decorators

  **(3) Adding ESNext features support: pipeline operator** :
  ❌ Unsuccessful, due to weird operator syntax that requires topicToken in some way 

  `npm i -D @babel/plugin-proposal-pipeline-operator`

  src/index.js:

  ```js
  // With pipeline operator
  const calculatedValue = -10
    |> (n => Math.max(0, n)) // Replacing Math.max
    |> (n => Math.pow(n, 1/3)) // Replacing Math.pow
    |> Math.ceil; // Using Math.ceil
  ```

  package.json:

  ```json
  "babel": {
    ...
    "plugins": [ 
      ["@babel/plugin-proposal-pipeline-operator", { "proposal": "hack", "topicToken": "@@" }] 
    ]
  },
  ```

