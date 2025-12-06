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
// From: {% Img src="image/cGQxYFGJrUUaUZyWhyt9yo5gHhs1/uIMeY1flDrlSBhvYqU5b.png", alt="Node screenshot saved to downloads.", width="800", height="296", class="screenshot" %}
// To: ![Node screenshot saved to downloads. (class: screenshot)](image/cGQxYFGJrUUaUZyWhyt9yo5gHhs1/uIMeY1flDrlSBhvYqU5b.png)

const fs = require('fs');
const path = require('path');

// Function to transform the markdown content
function transformMarkdown(content) {
    const imgTagPattern = /\{\%\s*Img\s+src="([^"]+)",\s*alt="([^"]+)",\s*width="\d+",\s*height="\d+"(?:,\s*class="([^"]+)")?\s*\%\}/g;

    return content.replace(imgTagPattern, (match, src, alt, className) => {
        if (className) {
            return `![${alt} (class: ${className})](${src})`;
        }
        return `![${alt}](${src})`;
    });
}

// Main function to read, transform, and write the markdown file
function processMarkdownFile(filePath) {
    try {
        const absolutePath = path.resolve(filePath);
        const fileContent = fs.readFileSync(absolutePath, 'utf-8');
        const transformedContent = transformMarkdown(fileContent);
        fs.writeFileSync(absolutePath, transformedContent, 'utf-8');
        console.log(`File processed successfully: ${absolutePath}`);
    } catch (error) {
        console.error(`Error processing file: ${error.message}`);
    }
}

// Get the file path from command line arguments
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('Usage: node google.parser.js <path-to-markdown-file>');
    process.exit(1);
}

const markdownFilePath = args[0];
processMarkdownFile(markdownFilePath);

