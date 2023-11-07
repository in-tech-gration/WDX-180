// REFERENCE: https://github.com/in-tech-gration/flems/tree/master
;(function flemInit() {

  console.log('Flem initialization...');

  const mainSectionEl = document.querySelector(".main-section");
  const flemsEnableButtonHREF = "#flems-enable";

  try {

    if (!mainSectionEl) {
      return false;
    }

    mainSectionEl.addEventListener("click", e => {

      const { target } = e;

      if (!target.href) {
        return false;
      }

      const hrefURL = new URL(target.href);

      if (hrefURL.hash !== flemsEnableButtonHREF) {
        return false;
      }

      const parentSiblingCodeSection = target.parentElement.previousElementSibling;

      if (!parentSiblingCodeSection) {
        return false;
      }

      const code = parentSiblingCodeSection.textContent;
      const codeEditor = document.createElement("div");
      target.insertAdjacentElement("afterEnd", codeEditor);

      // Initialize JavaScript Code Playground:
      if ( parentSiblingCodeSection.classList.contains("language-js") ){

        const flems = Flems(codeEditor, {
          files: [{
            name: 'playground.js',
            content: `\n${code}\n`
          }],
          shareButton     : false,
          middle          : 80,
          selected        : '.js',
          autoHeight      : true,

          // Default Settings:
          color           : 'rgb(38,50,56)',
          theme           : 'material', // and 'none' or 'default'
          resizeable      : true,
          editable        : true,
          toolbar         : true,
          fileTabs        : true,
          linkTabs        : true,
          reloadButton    : true,
          console         : true,
          autoReload      : true,
          autoReloadDelay : 400
        });

      }

    });

  } catch (e) {

    console.log(e);

  }

}());
