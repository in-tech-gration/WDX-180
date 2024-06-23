---
title: LangChain Quickstart
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

# Our first LangChain app

![](./assets/langchain.png)

<!-- ### Study Plan -->

<!-- ### Summary -->

### Exercises

  First, let's initialize a project and install all necessary dependencies:

  `mkdir langchain-app`

  `cd langchain-app`

  `npm init -y`

  `npm install @langchain/community`

  Make sure that Ollama is running. In this example we are going to be using the `Phi3` LLM:

  `ollama run phi3`

  > Check out the [Ollama quick start guide](https://in-tech-gration.github.io/WDX-180/curriculum/modules/computer_science/artificial_intelligence/llm/ollama/quickstart/quickstart.html){:target="_blank"} for installing and running LLM models locally using Ollama.

  Now, let's code our first `LangChain` app that uses the Ollama model and gets its first response from the LLM. Create a file namedd `ollama.mjs` and paste the following code:

  ```js
  import { Ollama } from "@langchain/community/llms/ollama";

  const ollama = new Ollama({
    model: "phi3", // Run `ollama list` in the terminal to get the name
    baseUrl: "http://localhost:11434", // default value, check in the browser that Ollama server is running
  });

  const input = `Translate "I love programming" into German.`;
  const output = await ollama.invoke(input);

  console.log(output); 
  ```

  Running the application using `node ollama.mjs` should probably give an output like this:

  > `The translation of "I love programming" into German is "Ich liebe Programmieren".`

<!-- ### Extra Resources

  _(Nothing here yet. Feel free to contribute if you've found some useful resources.)_ -->

### Sources and Attributions

  - [LangChain LLM integrations: Ollama](https://js.langchain.com/v0.1/docs/integrations/llms/ollama/)

---

> **Questions, comments, suggestions? Please leave them on the comment section below.**

<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>