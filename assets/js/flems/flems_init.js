// REFERENCE: https://github.com/in-tech-gration/flems/tree/master
(function flemInit() {
  // ChatGPT generated function to extract a function name from a provided JS code
  function extractFunctionName(functionString) {
    // Regular expression to match the function name
    const functionNameRegex = /function\s+([^\s(]+)/;

    // Match the function name using the regular expression
    const match = functionString.match(functionNameRegex);

    // Extract the function name from the match
    if (match && match.length > 1) {
      return match[1];
    } else {
      return "Function name not found";
    }
  }

  // Creates the content of a file to properly render the default React Component exported from the playground.js file
  function rootJS(code) {
    const componentName = extractFunctionName(code);

    if (componentName == "Function name not found") return ''
  
    // Simple React code to render a component
    let rootCode = "// DO NOT MODIFY THIS FILE\n\n"
    rootCode += `import ${componentName} from './playground.js'\n\n`;
    rootCode += `const root = ReactDOM.createRoot(app);\n`;
    rootCode += `root.render(<${componentName} />);`;

    return rootCode;
  }

  // TL;DR: For each button clicked, enable a playground for the snippet found above the button.
  function enableFlemsPlayground(e) {
    e.preventDefault();

    const { target } = e;

    // Looking for code sections in the DOM structure above the link
    const parentSiblingCodeSection =
      target.parentElement.previousElementSibling;

    if (!parentSiblingCodeSection) {
      // Did not find a parentSiblingCodeSection.parentSiblingCodeSection
      return false;
    }

    // Check if the Code Editor has already been initialized
    const nextElementSibling = target.nextElementSibling;
    if (
      nextElementSibling &&
      nextElementSibling.classList.contains("wdx-flems-editor")
    ) {
      return false;
    }

    const code = parentSiblingCodeSection.textContent;
    const codeEditor = document.createElement("div");
    codeEditor.setAttribute("class", "wdx-flems-editor");
    target.insertAdjacentElement("afterEnd", codeEditor);

    // Initialize JavaScript, React(JSX) or HTML Code Playgrounds:
    // Check for both language-js and language-javascript classes.
    const parentClassList = parentSiblingCodeSection.classList;
    const containsJS =
      parentClassList.contains("language-js") ||
      parentClassList.contains("language-javascript");
    const containsJSX = parentClassList.contains("language-jsx");
    const containsHTML = parentClassList.contains("language-html");

    // an array of files to be displayed in the code editor
    let files = [];
    // the links array is only used to import the react, react-dom packages
    let links = [];

    if (containsJS) {
      console.log("Initializing JS Flems playground...");

      files.push({
        name: "playground.js",
        content: `\n${code}\n`,
      });
    }

    if (containsHTML) {
      console.log("Initializing HTML Flems playground...");

      files.push({
        name: "playground.html",
        content: `${code}`,
      });
    }

    if (containsJSX) {
      console.log("Initializing React (JSX) Flems playground...");

      files.push(
        {
          name: "playground.js",
          compiler: "babel",
          content: `\n${code}\n`,
        },
        {
          name: "root.js",
          compiler: "babel",
          content: rootJS(code)
        },
        {
          name: "playground.html",
          content: `<div id="app" style="background: white; height: 100%;"></div>`,
        }
      );

      links.push(
        {
          name: "react",
          type: "script",
          url: "https://unpkg.com/react/umd/react.development.js",
        },
        {
          name: "react-dom",
          type: "script",
          url: "https://unpkg.com/react-dom/umd/react-dom.development.js",
        }
      );
    }

    const flems = Flems(codeEditor, {
      files: files,
      links: links,
      shareButton: false,
      middle: containsJS ? 70 : 50,
      selected: containsHTML ? ".html" : ".js",
      autoHeight: true,

      // Default Settings:
      color: "rgb(38,50,56)",
      theme: "material", // and 'none' or 'default'
      resizeable: true,
      editable: true,
      toolbar: true,
      fileTabs: true,
      linkTabs: false, // Hide the links if any, for a prettier look of the editor
      reloadButton: true,
      console: !containsHTML, // Do not display a console if is just a simple HTML playground
      autoReload: true,
      autoReloadDelay: 400,
    });
  }

  function init() {
    console.log("Flem initialization...");

    // Changed from .main-section to .flems-button to avoid listening to false click events
    // querySelectorAll to get all possible buttons for liveCode inside a page
    const flemsButtonEls = document.querySelectorAll("[href='#flems-enable']");
    // TODO: Implement Fullscreen mode:
    // ELEMENT.exitFullscreen()
    // ELEMENT.requestFullscreen();

    try {
      if (!flemsButtonEls) {
        return false;
      }

      flemsButtonEls.forEach((flemsButtonEl) => {
        flemsButtonEl.addEventListener("click", enableFlemsPlayground);
      });
    } catch (e) {
      console.log(e);
    }
  }

  document.addEventListener("DOMContentLoaded", (event) => {
    init();
  });
})();
