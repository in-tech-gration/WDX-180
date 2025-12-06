// What is this program about?
// Description: This is a CLI Node.js application that parses markdown files
// downloaded from: https://github.com/GoogleChrome/developer.chrome.com and
// prepares them for integration to the WDX platform.

// Features/Specs:
// - Reads a single markdown file from a specified directory
// - Transforms the following patterns:
// From: {% Img src="image/NJdAV9UgKuN8AhoaPBquL7giZQo1/p4tuMj2RjFpieyANV7s1.png", alt="Collapsible properties.", width="800", height="437" %}
// To: ![Collapsible properties.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/p4tuMj2RjFpieyANV7s1.png)
// From: {% Img src="image/NJdAV9UgKuN8AhoaPBquL7giZQo1/2gmf2oRmCAEY3IALwaSY.png", alt="Link to the head DOM node.", width="800", height="401" %}
// To: ![Link to the head DOM node.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/2gmf2oRmCAEY3IALwaSY.png)
// From: {% Img src="image/NJdAV9UgKuN8AhoaPBquL7giZQo1/KKCw924Jst5jW1qmPnHa.png", alt="Method.", width="800", height="402" %}
// To: ![Method.](image/NJdAV9UgKuN8AhoaPBquL7giZQo1/KKCw924Jst5jW1qmPnHa.png)
// - Replaces the original file with the transformed content: node google.parser.js path/to/markdown-file.md will overwrite the specified file

const fs = require('fs');
const path = require('path');

// Function to transform the markdown content
function transformContent(content) {
    const imgPattern = /\{\%\s*Img\s+src="([^"]+)",\s*alt="([^"]+)",\s*width="\d+",\s*height="\d+"\s*\%\}/g;
    return content.replace(imgPattern, (match, src, alt) => {
        return `![${alt}](${src})`;
    });
}

// Main function to read, transform, and write back the file
function processMarkdownFile(filePath) {
    try {
        // Read the file content
        const absolutePath = path.resolve(filePath);
        let content = fs.readFileSync(absolutePath, 'utf-8');

        // Transform the content
        const transformedContent = transformContent(content);

        // Write back the transformed content to the same file
        fs.writeFileSync(absolutePath, transformedContent, 'utf-8');
        console.log(`File processed successfully: ${absolutePath}`);
    } catch (error) {
        console.error(`Error processing file: ${error.message}`);
    }
}

// Get the file path from command line arguments
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('Usage: node google.parser.js path/to/markdown-file.md');
    process.exit(1);
}

const markdownFilePath = args[0];
processMarkdownFile(markdownFilePath);
