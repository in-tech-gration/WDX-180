console.log("Initializing mermaid diagrams...");

mermaid.initialize({
  startOnLoad: false
});

async function renderMermaidDiagrams() {
  const blocks = document.querySelectorAll('pre > code.language-mermaid');

  for (const block of blocks) {
    const source = block.textContent.trim();

    const container = document.createElement('div');
    container.className = 'mermaid-diagram';

    const id = `mermaid-${crypto.randomUUID()}`;

    try {
      const { svg } = await mermaid.render(id, source);
      container.innerHTML = svg;

      block.parentElement.replaceWith(container);
    } catch (err) {
      console.error('Mermaid render error:', err);
    }
  }
}

renderMermaidDiagrams();
