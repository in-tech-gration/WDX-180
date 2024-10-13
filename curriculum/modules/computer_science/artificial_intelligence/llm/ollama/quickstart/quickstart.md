---
title: Ollama Quickstart
---

# Ollama Quickstart

#### Installing and chatting with an LLM in private (offline)

![](./assets/ollama.png)

## INSTALLING

  `Ollama` is a software for installing and running Large Language Models (LLMs) on your machine. It can run `Llama 3`, `Phi3`, `Mistral`, `Gemma` and other models. It also allows you to create your own.

  - Watch [Ollama In 120 Seconds](https://www.youtube.com/watch?v=_6SlPLNEpzQ){:target="_blank"} to get a quick overview of the application and its features.

  - Download and install [**Ollama**](https://ollama.com/)
    - Visit [https://ollama.com](https://ollama.com) => Click **Download** => Select your OS and click "Download for Mac/Linux/Windows"

  After installing `Ollama`, it will be available via the command line as `ollama`. You can test whether the command was successfully installed by opening up a terminal and typing `ollama --version`. You can also run the `ollama --help` command to see the available options.  

  > "The model will automatically be unloaded from memory after 5 minutes of inactivity."

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

## RUNNING A MULTI-MODAL LLM

  What is a `Multi-modal LLM` _(`MM-LLM`)_, you might ask? Simply, it's a chat model that can accept images, audio and event video along with text as input. You can ask questions but you can also share media files and ask questions about them as well. Here's how to install one such model locally and start asking questions about media files.

  Download the [bakllava](#) MM-LLM model by running the following command:

  - `ollama pull bakllava`

  Check that the model has been downloaded and shows up on the list of the local models:

  - `ollama list`

  You'll get an output like this:

  ```bash
  NAME            ID              SIZE    MODIFIED    
  bakllava 3dd68bd4447c    4.7 GB  1 minute ago
  ```

  Now, let's run the bakllava model:

  - `ollama run bakllava`

  Your `bakllava` model should be running now and you can start chatting via the special command line prompt:

  ```bash
  >>> Send a message (/? for help)
  ```

  You can also check that Ollama is running by running the `ollama ps` command or opening up the Ollama web server in the browser: `http://localhost:11434`.

  Now, you are ready to chat with the model offline and also ask it to answer questions related to media files that you share through the local filepath:

  ```bash
  >>> What is depicted in this image? /Users/Downloads/Plants/mountain_flower.jpg
  Added image '/Users/Downloads/Plants/mountain_flower.jpg'
  The image features a purple flower, which is part of a plant growing in the wild. It is surrounded by lush green foliage and is sitting 
  prominently against a white background.
  ```

  **Note:** Make sure to run the `/clear` command before using another image.

## TESTING A MULTI-MODAL LLM WITH CCTV FOOTAGE 

  Let's test some of the available MM-LLMs out there with footage captured from CCTV somewhere in the UK. In the YouTube video below, you'll see footage that captures a burglary suspect escaping through a house that has CCTV installed.

  <iframe width="100%" height="500" src="https://www.youtube.com/embed/AKOnSEDDzDM?si=z4enwb-_eZRbxz0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  <!-- In the following video, you can see how we can test various MM-LLMs on several screen captures from the video footage to identify an individual inside the premises. -->

  Here are the models that can be tested on screenshots captured from various frames in the video:

  - [llava:13b](https://ollama.com/library/llava){:target="_blank"}
  - [bakllava:7b](https://ollama.com/library/bakllava){:target="_blank"}

  You can download the screen captures from the [GitHub repository](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/computer_science/artificial_intelligence/llm/ollama/quickstart/assets/burglary/).

  Here are some ideas for prompts:

  - Is there an individual? Answer with: Yes, No (Maybe).
  - List the objects found in the picture.

<!-- TODO: ## CREATING A CUSTOM OLLAMA MODEL -->

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