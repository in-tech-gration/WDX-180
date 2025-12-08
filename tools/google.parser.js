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
// - Parses Frontmatter section using the `gray-matter` npm module and applies the following parsing rules:
// -- Find the entries like `layout: "layouts/doc-post.njk"` and convert them to `__layout__: "layouts/doc-post.njk"`
// - Finds the following pattern and transforms it accordingly:
// From: 
//    {% Aside %}
//    **Note**: Additionally, DevTools can autocomplete DOM properties.
//    {% endAside %}
// To:
//    > **Note**: Additionally, DevTools can autocomplete DOM properties.

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Function to transform the markdown content   
function transformMarkdownContent(content) {
    // Transform Img tags to markdown image syntax
    let transformedContent = content.replace(/{% Img src="([^"]+)", alt="([^"]+)"(?:, width="[^"]+")?(?:, height="[^"]+")?(?:, class="([^"]+)")? %}/g, (match, src, alt, className) => {
        if (className) {
            return `![${alt} (class: ${className})](${src})`;
        }
        return `![${alt}](${src})`;
    });

    // Transform Aside blocks to blockquotes
    transformedContent = transformedContent.replace(/{% Aside %}([\s\S]*?){% endAside %}/g, (match, innerContent) => {
        const trimmedContent = innerContent.trim();
        const blockquoteContent = trimmedContent.split('\n').map(line => `> ${line.trim()}`).join('\n');
        return blockquoteContent;
    });

    return transformedContent;

}

// Function to transform frontmatter
function transformFrontmatter(data) {
    const transformedData = {};
    for (const [key, value] of Object.entries(data)) {
        if (key === 'layout') {
            transformedData['__layout__'] = value;
        } else {
            transformedData[key] = value;
        }
    }
    return transformedData;
}

// Main function to read, transform, and write back the markdown file
function processMarkdownFile(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const parsed = matter(fileContent);
        
        // Transform frontmatter
        const transformedFrontmatter = transformFrontmatter(parsed.data);
        
        // Transform markdown content
        const transformedContent = transformMarkdownContent(parsed.content);
        
        // Combine transformed frontmatter and content
        const newFileContent = matter.stringify(transformedContent, transformedFrontmatter);
        
        // Write back to the same file  
        fs.writeFileSync(filePath, newFileContent, 'utf8');
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
    }
}   
// Get the file path from command line arguments
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('Usage: node google.parser.js path/to/markdown-file.md');
    process.exit(1);
}
const markdownFilePath = path.resolve(args[0]);

// Process the specified markdown file
processMarkdownFile(markdownFilePath);  
console.log(`Processed file: ${markdownFilePath}`);

