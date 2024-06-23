---
title: Ollama Quickstart
---

# Ollama Quickstart

#### Installing and chatting with an LLM in private (offline)

![](./assets/ollama.png)

## INSTALLING

  `Ollama` is a software for installing and running Large Language Models (LLMs) on your machine. It can run `Llama 3`, `Phi3`, `Mistral`, `Gemma` and other models. It also allows you to create your own.

  - Download and install [**Ollama**](https://ollama.com/)
    - Visit [https://ollama.com](https://ollama.com) => Click **Download** => Select your OS and click "Download for Mac/Linux/Windows"

  After installing `Ollama`, it will be available via the command line as `ollama`. You can test whether the command was successfully installed by opening up a terminal and typing `ollama --version`. You can also run the `ollama --help` command to see the available options.  

## RUNNING OUR FIRST MODEL: Phi3

  Download the [Phi3](https://azure.microsoft.com/en-us/products/phi-3) model by running the following command:

  - `ollama pull phi3`

  You'll see something simmilar to this in the terminal:

  ```shell
  pulling manifest
  ...
  success
  ```

  Check that the model has been downloaded and shows up on the list of the local models:

  - `ollama list`

  You'll get an output like this:

  ```bash
  NAME            ID              SIZE    MODIFIED     
  phi3:latest     64c1188f2485    2.4 GB  1 minute ago
  ```

  Now, let's run the Phi3 model:

  - `ollama run phi3`

  Your `Phi3` model should be running now and you can start chatting via the special command line prompt:

  ```bash
  >>> Send a message (/? for help)
  ```

  You can also check that Ollama is running by running the `ollama ps` command or opening up the Ollama web server in the browser: `http://localhost:11434`.

  > **Fun fact**: the port that Ollama runs (11434) is [leetspeak](https://www.wikiwand.com/en/Leet) for llama. :)

  Now, you are ready to chat with the model offline!

  ```bash
  >>> Tell me a joke about Machine Learning
  ```

  If you run the command `ollama run` with some model name, e.g. `phi3`, Ollama will automatically `pull` (download) the model before running it.

  You can exit the Ollama prompt `(>>>)` by typing `/bye`. Keep in mind that Ollama server will keep running in the background. You can check this by opening up `http://localhost:11434` in the browser. You can stop the server by selecting the `Quit Ollama` option from the Ollama app running on your machine.

  You can read more about `Phi3` by checking the links found in the [`Extra Resources`](#extra-resources) section.

## FAQ

  - ___How can I install Ollama on Windows?___
    - From the docs: "The easiest way to install Ollama on Windows is to use the `OllamaSetup.exe` installer. It installs in your account without requiring Administrator rights. After installing Ollama Windows Preview, Ollama will run in the background and the ollama command line is available in `cmd`, `powershell` or your favorite terminal application. As usual the Ollama api will be served on http://localhost:11434." You can download `OllamaSetup.exe` by clicking on the `"Download for Windows (Preview)"` button.

### Extra Resources

  - [Ollama.com](https://ollama.com/){:target="_blank"}

  - [Available Ollama models](https://ollama.com/library){:target="_blank"}

  - [Introducing Phi-3: Redefining what’s possible with SLMs](https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/){:target="_blank"}

### Sources and Attributions

---

> **Questions, comments, suggestions? Please leave them on the comment section below.**

<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>