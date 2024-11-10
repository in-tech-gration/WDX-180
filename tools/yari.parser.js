// DESCRIPTION: Script to parse MDN markdown content. Looks for patterns such as {{LearnSidebar}}, {{Glossary}}, etc.

// 0) IMPORTS: =================================================================
const path                      = require("node:path");
const fs                        = require("node:fs");
const { parseArgs }             = require("node:util");
const marked                    = require("marked");
const matter                    = require('gray-matter');
const { assert }                = require("node:console");
const {
  warn, 
  ok, 
  info, 
  xmark, 
  createFrontMatterMarkdownFromObject 
} = require("./utils");

// 1) OUR FUNCTIONS: ===========================================================

/**
 * TODO: ADD TESTS
 * @param {string} textContent 
 * @returns string
 */
function removeTemplateContent(textContent) {

  // Thank you ChatGPT! 
  // const templateRegex = /{{QuicklinksWithSubPages\("[A-Za-z_\/]+"\)}}\s*\n|{{GlossarySidebar}}\s*\n|{{LearnSidebar}}|{{(?:LearnSidebar)?(?:PreviousMenuNext|PreviousMenu|NextMenuPrevious)\(["'][^"']*["'],\s*["'][^"']*["'],\s*["'][^"']*["']\)}}\s*\n/g;

  const templateRegex = /{{QuicklinksWithSubPages\("[A-Za-z_\/]+"\)}}\s*\n|{{GlossarySidebar}}\s*\n|{{LearnSidebar}}|{{(?:LearnSidebar)?(?:PreviousMenuNext|NextMenu|PreviousMenu|NextMenuPrevious)\([^)]+\)}}\s*\n/g;

  const nextMenuSingleRegex = /{{NextMenu\("[^"]+", "[^"]+"\)}}/g;
  // const templateRegex = /{{PreviousMenu\([^)]+\)}}\s*\n/g

  const templateMatches = textContent.match(templateRegex);

  if (templateMatches) {
    console.log(templateMatches)
    ok("Substituted {{Template}} matches successfully");
    textContent = textContent.replace(templateRegex, "");
  }

  const nextMenuMatches = textContent.match(nextMenuSingleRegex);

  if (nextMenuMatches) {

    console.log(nextMenuMatches)
    ok("Substituted {{Template}} matches successfully");
    textContent = textContent.replace(nextMenuMatches, "");

  }

  const previousMenuNextRegex = /\{\{PreviousMenuNext\((?:"[^"]+"(?:,\s*)?)+\)\}\}\n/g;
  const previousMenuNextRegexMatches = textContent.matchAll(previousMenuNextRegex);

  if (previousMenuNextRegexMatches) {
    for (const match of previousMenuNextRegexMatches) {
      ok("\nFound: " + match[0]);
      textContent = textContent.replace(match[0], "");
    }
  }

  return textContent;

}

function replaceHTMLGlossaryLinks(textContent, fileName) {

  // Thank you ChatGPT! 
  const glossaryRegex = /(<[^>]*>)\{\{[Gg]lossary\("([^"]+)"(?:,\s*"([^"]+)")?\)\}\}(<\/[^>]*>)/g;

  function replaceGlossary(match, openingTag, p1, p2, closingTag) {
    // console.log({ p1, p2, openingTag, closingTag });
    // TODO: Replace MDN domain with local resources/glossary path if available
    let baseLink = "https://developer.mozilla.org/en-US/docs/Glossary/";
    let link = "";

    const glossaryDirectory = path.join(__dirname, '..', "resources", "glossary", `${p1}.md`);

    if (fs.existsSync(glossaryDirectory)) {
      // Count the number of remaining path segments
      const subfolderCount = fileName.split(path.sep).length - 1;
      const parentPaths = Array.from({ length: subfolderCount }).fill("../").join("");
      link = `${parentPaths}resources/glossary/${p1}.md`
      console.log(`Local glossary entry for ${p1} exists.`);
    } else {
      link = `${baseLink}${p1[0].toUpperCase() + p1.slice(1).replace(/\s+/g, "_")}`;
    }

    const output = `${openingTag}<a href="${link}" target="_blank">${p2 ? p2 : p1}</a>${closingTag}`;
    // console.log({ match, output });
    // console.log(match, p1, p2);
    return output;
  }

  if (textContent.match(glossaryRegex)) {
    ok("Substituted {{Glossary}} matches successfully");
    return textContent.replace(glossaryRegex, replaceGlossary);
  }

  info("\n No HTML {{Glossary}} matches found on this file");
  return textContent;

}

function replaceGlossaryLinks(textContent, fileName) {

  // Thank you ChatGPT! 
  const glossaryRegex = /\{\{[Gg]lossary\("([^"]+)"(?:,\s*"([^"]+)")?\)\}\}/g;

  function replaceGlossary(match, p1, p2) {
    // TODO: Replace MDN domain with local resources/glossary path if available
    let baseLink = "https://developer.mozilla.org/en-US/docs/Glossary/";
    let link = "";

    const glossaryDirectory = path.join(__dirname, '..', "resources", "glossary", `${p1}.md`);

    if (fs.existsSync(glossaryDirectory)) {
      // Count the number of remaining path segments
      const subfolderCount = fileName.split(path.sep).length - 1;
      const parentPaths = Array.from({ length: subfolderCount }).fill("../").join("");
      link = `${parentPaths}resources/glossary/${p1}.md`
      console.log(`Local glossary entry for ${p1} exists.`);
    } else {
      link = `${baseLink}${p1[0].toUpperCase() + p1.slice(1).replace(/\s+/g, "_")}`;
    }

    const output = `[${p2 ? p2 : p1}](${link}){:target="_blank"}`;
    // console.log(match, p1, p2);
    return output;
  }

  if (textContent.match(glossaryRegex)) {
    ok("Substituted {{Glossary}} matches successfully");
    return textContent.replace(glossaryRegex, replaceGlossary);
  }

  info("\n No {{Glossary}} matches found on this file");
  return textContent;

}

function replaceDOMXrefLinks(textContent, fileName) {

  // Thank you ChatGPT! 
  const glossaryRegex = /\{\{domxref\("([^"]+)"(?:,\s*"([^"]+)")?\)\}\}/g;

  function replaceGlossary(match, p1, p2) {
    // console.log({ match, p1, p2 });
    // TODO: Replace MDN domain with local resources/glossary path if available
    let baseLink = "https://developer.mozilla.org/en-US/docs/Web/API/";
    let link = "";

    // const glossaryDirectory = path.join(__dirname, '..', "resources", "glossary", `${p1}.md`);

    // TODO: UPDATE TO REFLECT Document/ FOLDER FOR LOCAL OFFLINE FILES
    if (false && fs.existsSync(glossaryDirectory)) {

      // Count the number of remaining path segments
      const subfolderCount = fileName.split(path.sep).length - 1;
      const parentPaths = Array.from({ length: subfolderCount }).fill("../").join("");
      link = `${parentPaths}resources/glossary/${p1}.md`
      console.log(`Local glossary entry for ${p1} exists.`);

    } else {

      let base = "";
      let term = "";

      if (p1.includes(".")) {

        [base, term] = p1.split(".");

      }

      if (p1.includes("/")) {

        [base, term] = p1.split("/");

      }

      if (p1.includes(" ")) {

        [base, term] = p1.split(" ");

        console.log({ base, term });

        base = `${base}_${term}`;
        term = null;

      }

      link = term ? `${baseLink}${base}/${term}` : `${baseLink}${base}`;

    }

    const output = `[${p2 ? p2 : p1}](${link}){:target="_blank"}`;
    return output;
  }

  if (textContent.match(glossaryRegex)) {
    ok("Substituted {{Glossary}} matches successfully");
    return textContent.replace(glossaryRegex, replaceGlossary);
  }

  info("\n No {{Glossary}} matches found on this file");
  return textContent;

}

function replaceJSXrefLinks(textContent, filename) {

  // Thank you ChatGPT! 
  const glossaryRegex = /\{\{jsxref\("([^"]+)"(?:,\s*"([^"]+)")?\)\}\}/g;

  function replaceGlossary(match, p1, p2) {
    console.log({ match, p1, p2 });
    // TODO: Replace MDN domain with local resources/glossary path if available
    // TODO: Find when Global_Objects path is needed (.../Reference/Global_Objects/...)
    let baseLink = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/";
    let link = "";

    // const glossaryDirectory = path.join(__dirname, '..', "resources", "glossary", `${p1}.md`);

    // TODO: UPDATE TO REFLECT Document/ FOLDER FOR LOCAL OFFLINE FILES
    if (false && fs.existsSync(glossaryDirectory)) {

      // Count the number of remaining path segments
      const subfolderCount = filename.split(path.sep).length - 1;
      const parentPaths = Array.from({ length: subfolderCount }).fill("../").join("");
      link = `${parentPaths}resources/glossary/${p1}.md`
      console.log(`Local glossary entry for ${p1} exists.`);

    } else {

      let base = p1;
      let term = "";

      if (p1.includes(".")) {

        [base, term] = p1.split(".");

        if (term == "prototype") {
          [base, , term] = p1.split(".");
        }

        if (term.includes("()")) {
          term = term.slice(0, -2);
        }

      }

      if (p1.includes("/")) {

        const dashSplits = p1.split("/");

        if (dashSplits.length === 2) {
          base = dashSplits[0];
          term = dashSplits[1];
        } else {
          base = dashSplits[0];
          term = dashSplits.slice(1).join("/");
        }

        if (term.includes("()")) {
          term = term.slice(0, -2);
        }

      }

      if (p1.includes(" ")) {

        [base, term] = p1.split(" ");

        console.log({ base, term });

        base = `${base}_${term}`;
        term = null;

      }

      if (!p2) {
        // p2 is undefined, probably need to add 'Global_Objects' to baseLink
        // TODO: This is not the only case that 'Global_Objects' is added. Need to investigate more
        baseLink += 'Global_Objects/';
      }
      link = term ? `${baseLink}${base}/${term}` : `${baseLink}${base}`;

    }

    const output = `[${p2 ? p2 : p1}](${link}){:target="_blank"}`;
    return output;
  }

  if (textContent.match(glossaryRegex)) {
    ok("Substituted {{JSXRef}} matches successfully");
    return textContent.replace(glossaryRegex, replaceGlossary);
  }

  info("\n No {{JSXRef}} matches found on this file");
  return textContent;
}

function parseMDNLinks(textContent) {
  const domain = "https://developer.mozilla.org"
  const regex = /\[([^\]]+)\]\((\/en-US\/docs\/[^\)]+)\)/g;
  const matches = textContent.match(regex);
  if (matches) {
    console.log(matches);
    // return textContent.replace( regex )
    return textContent.replace(regex, (match, linkText, url) => {
      // console.log( match ); // [...](...)
      // console.log( linkText); // Link label
      // console.log( url ); // Link URL: /en-us/docs/...
      const newUrl = domain + url;
      return `[${linkText}](${newUrl}){:target="_blank"}`;
    });
  }

  return textContent;
}

function parseImages(textContent) {

  const regex = /!\[([^\]]*)]\(((?!https?:\/\/)[^\)]+)\)/g;

  const matches = textContent.match(regex);

  if (matches) {
    return textContent.replace(regex, (match, altText, imgSrc) => {
      if (imgSrc.startsWith("assets")) {
        return match;
      }
      return `![${altText}](assets/${imgSrc})`
    })
  }

  return textContent;
}

function parseElementTerm(textContent) {

  const URL = "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/";
  const pattern = /{{(htmlelement|HTMLElement)\(['"](.*?)['"](?:, "(.*?)")?\)}}/g;
  return textContent.replace(pattern, (match, _, termA, termB) => {
    const link = `${URL}${termA}`;
    return `[\`<${termB ? termB : termA}>\`](${link}){:target="_blank"}`;
  })
}

function parseCSSTerm(textContent) {
  // {{cssxref("width")}}
  //=> https://developer.mozilla.org/en-US/docs/Web/CSS/width
  const domain = "https://developer.mozilla.org/en-US/docs/Web/CSS/";
  const regex = /{{cssxref\("([^"]+)"\)}}/g;
  return textContent.replace(regex, (match, cssTerm) => {
    return `[\`${cssTerm}\`](${domain}${cssTerm}){:target="_blank"}`
  })
}

function parseHTTPStatus(textContent) {
  const URL = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/";
  const pattern = /{{(HTTPStatus)\("(.*?)"(?:, "(.*?)")?\)}}/g;
  return textContent.replace(pattern, (match, _, termA, termB) => {
    const link = `${URL}${termA}`;
    const output = `[${termB ? termB : termA}](${link}){:target="_blank"}`;
    // console.log({ output }); 
    return output;
  })
}

function parseHTTPHeader(textContent) {
  const URL = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/";
  const pattern = /{{(HTTPHeader)\("(.*?)"(?:, "(.*?)")?\)}}/g;
  return textContent.replace(pattern, (match, _, termA, termB) => {
    const link = `${URL}${termA}`;
    const output = `[${termB ? termB : termA}](${link}){:target="_blank"}`;
    console.log();
    info(`Found: ${match}`);
    console.log();
    return output;
  })
}

function parseEmbedYouTube(textContent) {

  const youtubeRegex = /\{\{EmbedYouTube\("([a-zA-Z0-9-_]{11})"\)\}\}/g;

  const matches = textContent.matchAll(youtubeRegex);
  const iframe = (vid) => {

    const iframe = `
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube-nocookie.com/embed/${vid}" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen="" 
      loading="lazy">
    </iframe>`.trim();

    const externalLink = `
    <p><a href="https://www.youtube.com/watch?v=${vid}" target="_blank">
        [ Watch on <strong>YouTube</strong> ]
      </a>
    </p>`.split("\n").map(s => s.trim()).join("\n");

    return iframe + "\n" + externalLink;

  }

  if (matches) {
    for (const match of matches) {
      info("Found: " + match[0]);
      textContent = textContent.replace(match[0], iframe(match[1]))
    }
  }

  return textContent;

}

function parseEmbedGHLiveSample(textContent) {
  const regex = /\{\{EmbedGHLiveSample\((['"])(?<first>.*)\1(,\s?(['"])(?<second>.*)\4)?(,\s?(?<third>.*))?\)\}\}/gm
  const matches = textContent.matchAll(regex);
  const domainMDN = "https://mdn.github.io/";
  const domain = "https://in-tech-gration.github.io/";
  if (matches) {
    for (const match of matches) {
      // PARSE css-examples:
      if (match.groups.first.indexOf("css-examples/") === 0) {
        // console.log( match[0] ); // <- Replace this
        // console.log( match.groups.first );
        // console.log( match.groups.second );
        // console.log( match.groups.third );
        const iframe = `
          <iframe 
            class="EmbedGHLiveSample" 
            loading="lazy"
            src="${domain}${match.groups.first}" 
            width="${match.groups.second}" 
            height="${match.groups.third}"></iframe>
        `.trim();

        const externalLink = `
        <p><a href="${domain}${match.groups.first}" target="_blank">
            [ External link ]
          </a>
        </p>`.split("\n").map(s => s.trim()).join("\n");

        textContent = textContent.replace(
          match[0],
          iframe + "\n" + externalLink
        );

      }
    }
  }
  return textContent;
}

function getEmbedLiveSampleRegex() {

  const optCommaSpace = `(?:,\\s)`;
  const optQuotes = `(['"])?`;
  const rxFirstGroup = `\\{\\{\\s*EmbedLiveSample\\((['"])(?<header_block_id>.*?)\\1`;
  const rxSecondGroup = `(?:${optCommaSpace}(?<iframe_width>\\d+))?`;
  const rxThirdGroup = `(?:${optCommaSpace}(?<iframe_height>\\d+))?`;
  const rxFourthGroup = `(?:${optCommaSpace}${optQuotes}(?<screenshot_url>[^'"]*)\\5)?`;
  const rxFifthGroup = `(?:${optCommaSpace}${optQuotes}(?<slug>[^'"]*)\\7)?`
  const rx = new RegExp(
    rxFirstGroup
    + rxSecondGroup
    + rxThirdGroup
    + rxFourthGroup
    + rxFifthGroup
    + `?\\)(?:\\s+)?\\}\\}`
    // , "gm"
  );
  return rx;
}

/**
 * DOCS: https://codesandbox.io/docs/learn/sandboxes/cli-api
 * @param {*}  
 * @returns {string}
 */
function createCodeSandboxURL({ html, css, js, header_block_id }) {

  let prefix;
  // https://codesandbox.io/docs/learn/sandboxes/cli-api
  let indexHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${header_block_id.replaceAll("_", " ")}</title>
        </head>
        <body>
          ${html}
        </body>
        </html>
      `

  // Let's fix the indentation issues:
  indexHTML = indexHTML.split("\n")
    .filter(Boolean)
    .map((line, index) => {
      if (index === 0) {
        prefix = line.length - line.trimStart().length;
      }
      return line;
    })
    .map(line => {
      const rx = new RegExp(`^\\s{${prefix}}`);
      return line.replace(rx, "");
    })
    .join("\n");


  const parameterValues = {
    files: {
      'index.html': {
        content: indexHTML
      },
      'package.json': {
        content: { dependencies: {} },
      },
    }
  }
  if (js) {
    parameterValues.files['index.js'] = {
      content: js
    }
  }
  if (css) {
    parameterValues.files['index.css'] = {
      content: css
    }
  }
  const { getParameters } = require("codesandbox/lib/api/define"); 
  const parameters = getParameters(parameterValues);

  const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&query=file=/index.html`;

  return url;
}

/**
 * @description: Parsing EmbedLiveSamples
 * DOCS: https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples
 * DOCS: https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs
 * @param {*} textContent 
 * @returns {string}
 */
function parseEmbedLiveSample(textContent) {

  // Parse markdown and separate Frontmatter and main content:
  const { content, data: fm } = matter(textContent);
  // Parse markdown tokens:
  const markdownTokens = marked.lexer(content);

  const markedLiveEmbeds = {}
  const markedCodeTokens = {}
  const markdownTokensUpdated = markdownTokens.map((t, idx) => {

    // console.log( t.type, t.lang );
    if (t.raw.indexOf("EmbedLiveSample") > -1) {

      const m = t.raw.match(getEmbedLiveSampleRegex());
      const liveSample = {
        match: m[0],
        header_block_id: m.groups.header_block_id.split("'")[0],
        iframe_width: m.groups.iframe_width,
        iframe_height: m.groups.iframe_height,
        screenshot_url: m.groups.screenshot_url,
        url: m.groups.slug,
        code: {
          html: null,
          css: null,
          js: null
        }
      }

      markedLiveEmbeds[idx] = liveSample;

      // console.log( m[0], m.groups, idx );
      for (let index = 1; index < 7; index++) {

        const isCode = markdownTokens[idx - index].type === "code";
        const isHTML = markdownTokens[idx - index].lang === "html hidden";
        // || markdownTokens[idx - index].lang === "html" ?
        const isCSS  = markdownTokens[idx - index].lang === "css hidden";
        const isJS   = markdownTokens[idx - index].lang === "js hidden";

        if (isCode) {
          if (isHTML) {
            markedCodeTokens[idx - index] = true;
            markedCodeTokens[idx - index + 1] = true; // Remove previous space also
            liveSample.code.html = markdownTokens[idx - index].text;
          }
          if (isCSS) {
            markedCodeTokens[idx - index] = true;
            markedCodeTokens[idx - index + 1] = true; // Remove previous space also
            liveSample.code.css = markdownTokens[idx - index].text;
          }
          if (isJS) {
            markedCodeTokens[idx - index] = true;
            markedCodeTokens[idx - index + 1] = true; // Remove previous space also
            liveSample.code.js = markdownTokens[idx - index].text;
          }

        }
      }
      // console.log({ liveSample });
    }
    return t;
  })

  const { equal } = require("node:assert");

  markdownTokens.forEach((m, idx) => {
    try {
      equal(m, markdownTokensUpdated[idx]);
    } catch (error) {
      console.log(`${xmark}`, error.actual);
      return textContent;
    }

  });

  const editedTokens = markdownTokensUpdated.map((token, idx) => {
    if (markedCodeTokens[idx]) {
      return null;
    }
    if (markedLiveEmbeds[idx]) {

      const { header_block_id } = markedLiveEmbeds[idx];
      const { html, css, js }   = markedLiveEmbeds[idx].code;

      // EXPERIMENTAL DYNAMIC  CODESANDBOX: 
      // const cbURL = createCodeSandboxURL({ html, css, js, header_block_id });

      return {
        type: "paragraph",
        raw: `<!-- \n ${markedLiveEmbeds[idx].match} \n -->\n`,
        metadata: markedLiveEmbeds[idx]
      }
    }
    return token;
  });

  // Use Global regex pattern
  /* 
    const rx = new RegExp(getEmbedLiveSampleRegex().source, "gm");
    const matches = textContent.matchAll(rx);
    if (matches) {
  
      for (const match of matches) {
  
        info(`Found EmbedLiveSample: ${match[0]}`);
  
        const { header_block_id, iframe_width, iframe_height, screenshot_url, slug } = match.groups;
  
        if (header_block_id) {
          // console.log({ header_block_id });
        }
        if (iframe_width) {
          // console.log({ iframe_width });
        }
        if (iframe_height) {
          // console.log({ iframe_height });
        }
        if (screenshot_url) {
          // console.log({ screenshot_url });
        }
        if (slug) {
          // console.log({ slug });
        }
      }
    }
  */

  // Recreate Frontmatter section as plain markdown text:
  const fmText = createFrontMatterMarkdownFromObject(fm);

  return fmText + editedTokens.map(token => {
    if (token) {
      // return fmText + markdownTokensUpdated.map( token =>{

      return token.raw;
    }
  }).join("");

}

function parseExternalLinks(textContent) {
  const regex = /\[(.*?)\]\((https?:\/\/\S+)\)(?!.*\{:target="_blank"\})/g;
  const matches = textContent.match(regex);
  if (matches) {
    console.log(matches);
    // return textContent.replace( regex )
    return textContent.replace(regex, (match, linkText, url) => {
      console.log( match ); // [...](...)
      console.log( linkText); // Link label
      console.log( url ); // Link URL: /en-us/docs/...
      return `${match}{:target="_blank"}`;
    });
  }

  return textContent;
}

// 2) OUR VARIABLES: ===========================================================

// 3) ACTION!!! ================================================================

// Orchestrate Parsing & Modifications
function parseYariDynamicContent(textContent, fileName) {

  let updatedTextContent = textContent;

  // Run this first:
  updatedTextContent = replaceHTMLGlossaryLinks(updatedTextContent, fileName);
  // Then run this one:
  updatedTextContent = replaceGlossaryLinks(updatedTextContent, fileName);
  updatedTextContent = removeTemplateContent(updatedTextContent);
  updatedTextContent = parseMDNLinks(updatedTextContent);
  updatedTextContent = parseImages(updatedTextContent);
  updatedTextContent = parseElementTerm(updatedTextContent);
  updatedTextContent = parseCSSTerm(updatedTextContent);
  updatedTextContent = parseHTTPStatus(updatedTextContent);
  updatedTextContent = replaceDOMXrefLinks(updatedTextContent);
  updatedTextContent = replaceJSXrefLinks(updatedTextContent);
  updatedTextContent = parseHTTPHeader(updatedTextContent);
  updatedTextContent = parseEmbedYouTube(updatedTextContent);
  updatedTextContent = parseEmbedGHLiveSample(updatedTextContent);
  updatedTextContent = parseExternalLinks(updatedTextContent);
  if ( process.argv.includes("--rm-embeds") ){
    updatedTextContent = parseEmbedLiveSample(updatedTextContent);
  }

  return updatedTextContent;

}

if (require.main === module) {
  // console.log("This script was executed directly.");
  init();
} else {
  // console.log("This script was imported as a module.");
}

function init() {

  const fileName = process.argv[2];

  if (!fileName) {
    warn("No filename.")
    process.exit();
  }

  try {

    console.log(`Processing ${fileName}`);

    const file = fs.readFileSync(fileName, "utf-8");
    fs.writeFileSync(fileName, parseYariDynamicContent(file, fileName), "utf8");

  } catch (e) {

    warn(e.message);

  }

}

// 4) EXPORT SECTION: ==========================================================

module.exports = {
  parseYariDynamicContent,
  parseMDNLinks,
  parseHTTPStatus,
  parseEmbedLiveSample,
  parseEmbedGHLiveSample,
  parseHTTPHeader,
  parseImages,
  parseElementTerm,
  parseCSSTerm,
  replaceHTMLGlossaryLinks,
  replaceDOMXrefLinks,
  parseExternalLinks
};