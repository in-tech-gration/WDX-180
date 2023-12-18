// REFERENCE: https://github.com/in-tech-gration/flems/tree/master
;(function flemInit() {

  // TL;DR: For each button clicked, enable a playground for the snippet found above the button.
  function enableFlemsPlayground(e) {

    e.preventDefault();

    const { target } = e;

    // Looking for code sections in the DOM structure above the link
    const parentSiblingCodeSection = target.parentElement.previousElementSibling;

    if (!parentSiblingCodeSection) {
      // Did not find a parentSiblingCodeSection.parentSiblingCodeSection
      return false;
    }

    // Check if the Code Editor has already been initialized 
    const nextElementSibling = target.nextElementSibling;
    if (nextElementSibling && nextElementSibling.classList.contains("wdx-flems-editor")) {
      return false;
    }

    const code       = parentSiblingCodeSection.textContent;
    const codeEditor = document.createElement("div");
    codeEditor.setAttribute("class", "wdx-flems-editor")
    target.insertAdjacentElement("afterEnd", codeEditor);

    // Initialize JavaScript + HTML Code Playgrounds:
    // Check for both language-js and language-javascript classes.
    const parentClassList = parentSiblingCodeSection.classList; 
    const containsJS      = parentClassList.contains("language-js") || parentClassList.contains("language-javascript"); 
    const containsHTML    = parentClassList.contains("language-html");

    console.log(parentSiblingCodeSection);

    if ( containsJS ) {

      console.log("Initializing JS Flems playground...");

      const flems = Flems(codeEditor, {
        files: [{
          name: 'playground.js',
          content: `\n${code}\n`
        }],
        shareButton: false,
        middle: 80,
        selected: '.js',
        autoHeight: true,

        // Default Settings:
        color: 'rgb(38,50,56)',
        theme: 'material', // and 'none' or 'default'
        resizeable: true,
        editable: true,
        toolbar: true,
        fileTabs: true,
        linkTabs: true,
        reloadButton: true,
        console: true,
        autoReload: true,
        autoReloadDelay: 400
      });

    }

    if ( containsHTML ){
      console.log("Initializing HTML Flems playground...");

      const flems = Flems(codeEditor, {
        files: [{
          name: 'playground.html',
          content: `${code}`
        }],
        shareButton: false,
        middle: 50,
        selected: '.html',
        autoHeight: true,

        // Default Settings:
        color: 'rgb(38,50,56)',
        theme: 'material', // and 'none' or 'default'
        resizeable: true,
        editable: true,
        toolbar: true,
        fileTabs: true,
        linkTabs: true,
        reloadButton: true,
        console: false,
        autoReload: true,
        autoReloadDelay: 400
      });

    }

  }

  function init() {

    console.log('Flem initialization...');

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

      flemsButtonEls.forEach(flemsButtonEl => {
          flemsButtonEl.addEventListener("click", enableFlemsPlayground);
        }
      );

    } catch (e) {

      console.log(e);

    }

  }

  document.addEventListener('DOMContentLoaded', (event) => {
    init();
  });

}());
