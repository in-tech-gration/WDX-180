// cSpell: disable;
// Tagify > Docs & examples: https://yaireo.github.io/tagify/#section-extra-properties
console.log("FAQ Search...");

const tagInputsEl = document.querySelector("#tag-inputs");
const options = {
  whitelist : ['ssh', 'vscode', 'video'],
  dropdown : {
      classname     : "tagify--custom-dropdown",
      enabled       : 0,              // show the dropdown immediately on focus
      maxItems      : 5,
      position      : "text",         // place the dropdown near the typed text
      closeOnSelect : false,          // keep the dropdown open after selecting a suggestion
      highlightFirst: true
  }
}

const tagify = new Tagify(tagInputsEl, options);
tagify.addTags([
  { 
    value: "git (3)", color: "yellow" 
  },
  { 
    value: "npm (10)",
    color: "red"
  },
  { 
    value: "fork (2)",
    color: "green" 
  }
])

// Fuse.js Demo? Check: https://codepen.io/filippoq/pen/ybbXMP?editors=1010