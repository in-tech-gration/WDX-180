/**
 *  @file highlight-copy.js
 *  @author Arron Hunt <arronjhunt@gmail.com>
 *  @copyright Copyright 2021-2024. All rights reserved.
 *  @linkcode https://raw.githubusercontent.com/arronhunt/highlightjs-copy/refs/heads/master/index.js
 */

/**
 * Basic support for localization. Please submit a PR
 * to help add more languages.
 * https://github.com/arronhunt/highlightjs-copy/pulls
 */
const locales = {
  en: ["Copy", "Copied!", "Copied to clipboard"],
  es: ["Copiar", "¡Copiado!", "Copiado al portapapeles"],
  "pt-BR": ["Copiar", "Copiado!", "Copiado para a área de transferência"],
  fr: ["Copier", "Copié !", "Copié dans le presse-papier"],
  de: ["Kopieren", "Kopiert!", "In die Zwischenablage kopiert"],
  ja: ["コピー", "コピーしました！", "クリップボードにコピーしました"],
  ko: ["복사", "복사됨!", "클립보드에 복사됨"],
  ru: ["Копировать", "Скопировано!", "Скопировано в буфер обмена"],
  zh: ["复制", "已复制!", "已复制到剪贴板"],
  "zh-tw": ["複製", "已複製!", "已複製到剪貼簿"],
};

// https://raw.githubusercontent.com/arronhunt/highlightjs-copy/refs/heads/master/styles/highlightjs-copy.css
const css = `
  .hljs-copy-wrapper {
    position: relative;
    overflow: hidden;
    transform: translateZ(0);
  }
  .hljs-copy-container {
    --hljs-theme-padding: 16px;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 200ms ease-out;
  }
  .hljs-copy-button {
    position: relative;
    margin: calc(var(--hljs-theme-padding) / 2);
    width: calc(16px + var(--hljs-theme-padding));
    height: calc(16px + var(--hljs-theme-padding));
    font-size: 0.8125rem;
    text-indent: -9999px; /* Hide the inner text */
    color: var(--hljs-theme-color);
    border-radius: 0.25rem;
    border: 1px solid;
    border-color: color-mix(in srgb, var(--hljs-theme-color), transparent 80%);
    background-color: var(--hljs-theme-background);
    transition: background-color 200ms ease;
    overflow: hidden;
  }
  .hljs-copy-button:not([data-copied="true"])::before {
    content: "";
    width: 1rem;
    height: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: currentColor;
    mask: url('data:image/svg+xml;utf-8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7957 3 20V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.55228 3 9 3.44772 9 4C9 4.55228 8.55228 5 8 5H6Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C7 1.89543 7.89543 1 9 1H15C16.1046 1 17 1.89543 17 3V5C17 6.10457 16.1046 7 15 7H9C7.89543 7 7 6.10457 7 5V3ZM15 3H9V5H15V3Z" fill="black"/></svg>');
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center center;
  }

  .hljs-copy-button:hover {
    background-color: color-mix(
      in srgb,
      var(--hljs-theme-color),
      transparent 90%
    );
  }
  .hljs-copy-button:active {
    border-color: color-mix(in srgb, var(--hljs-theme-color), transparent 60%);
  }
  .hljs-copy-button[data-copied="true"] {
    text-indent: 0px; /* Shows the inner text */
    width: auto;
  }

  .hljs-copy-container[data-autohide="true"] {
    transform: translateX(calc(100% + 1.125em));
  }

  .hljs-copy-wrapper:focus-within .hljs-copy-container {
    transition: none;
    transform: translateX(0);
  }
  .hljs-copy-wrapper:hover .hljs-copy-container {
    transform: translateX(0);
  }

  @media (prefers-reduced-motion) {
    .hljs-copy-button {
      transition: none;
    }
  }

  /* visually-hidden */
  .hljs-copy-alert {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`

/**
 * Adds a copy button to highlightjs code blocks
 */
class CopyButtonPlugin {
  /**
   * Create a new CopyButtonPlugin class instance
   * @param {Object} [options] - Functions that will be called when a copy event fires
   * @param {CopyCallback} [options.callback]
   * @param {Hook} [options.hook]
   * @param {String} [options.lang] Defaults to the document body's lang attribute and falls back to "en"
   * @param {Boolean} [options.autohide=true] Automatically hides the copy button until a user hovers the code block. Defaults to False
   */
  constructor(options = {}) {
    this.hook = options.hook;
    this.callback = options.callback;
    this.lang = options.lang || document.documentElement.lang || "en";
    this.autohide =
      typeof options.autohide !== "undefined" ? options.autohide : true;

    // Custom Code:
    this.init = this["after:highlightElement"];
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    const codeEls = document.querySelectorAll("pre.highlight code");
    codeEls.forEach ( codeEl =>{
      const el = codeEl.parentElement?.parentElement?.parentElement;
      if ( !el ) return;
      const containsCode = el.classList.contains("highlighter-rouge");
      if (!containsCode ) return;
      if (
        el.classList.contains("language-javascript")
        ||
        el.classList.contains("language-js")
        ||
        el.classList.contains("language-css")
        ||
        el.classList.contains("language-html")
        ||
        el.classList.contains("language-bash")
        ||
        el.classList.contains("language-ejs")
        ||
        el.classList.contains("language-php")
        ||
        el.classList.contains("language-python")
      ){
        this.init({ el: codeEl, text: codeEl.textContent.trim() });
      }
    })
  }
  "after:highlightElement"({ el, text }) {
    // If the code block already has a copy button, return.
    if (el.parentElement.querySelector(".hljs-copy-button")) return;

    let { hook, callback, lang, autohide } = this;

    // Create the copy button and append it to the codeblock.
    let container = Object.assign(document.createElement("div"), {
      className: "hljs-copy-container",
    });
    container.dataset.autohide = autohide;

    let button = Object.assign(document.createElement("button"), {
      innerHTML: locales[lang]?.[0] || "Copy",
      className: "hljs-copy-button",
      type: "button",
    });
    button.dataset.copied = false;

    el.parentElement.classList.add("hljs-copy-wrapper");
    el.parentElement.appendChild(container);
    container.appendChild(button);

    // Add a custom proprety to the container so that the copy button can reference and match its theme values.
    container.style.setProperty(
      "--hljs-theme-background",
      window.getComputedStyle(el).backgroundColor
    );
    container.style.setProperty(
      "--hljs-theme-color",
      window.getComputedStyle(el).color
    );
    container.style.setProperty(
      "--hljs-theme-padding",
      window.getComputedStyle(el).padding
    );

    button.onclick = function () {
      if (!navigator.clipboard) return;

      let newText = text;
      if (hook && typeof hook === "function") {
        newText = hook(text, el) || text;
      }

      navigator.clipboard
        .writeText(newText)
        .then(function () {
          button.innerHTML = locales[lang]?.[1] || "Copied!";
          button.dataset.copied = true;

          let alert = Object.assign(document.createElement("div"), {
            role: "status",
            className: "hljs-copy-alert",
            innerHTML: locales[lang]?.[2] || "Copied to clipboard",
          });
          el.parentElement.appendChild(alert);

          setTimeout(() => {
            button.innerHTML = locales[lang]?.[0] || "Copy";
            button.dataset.copied = false;
            el.parentElement.removeChild(alert);
            alert = null;
          }, 2000);
        })
        .then(function () {
          if (typeof callback === "function") return callback(newText, el);
        });
    };
  }
}

/**
 * @typedef {function} CopyCallback
 * @param {string} text - The raw text copied to the clipboard.
 * @param {HTMLElement} el - The code block element that was copied from.
 * @returns {undefined}
 */
/**
 * @typedef {function} Hook
 * @param {string} text - The raw text copied to the clipboard.
 * @param {HTMLElement} el - The code block element that was copied from.
 * @returns {string|undefined}
 */

document.addEventListener("DOMContentLoaded", ()=>{
  new CopyButtonPlugin();
});