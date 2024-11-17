---
title: Setting up Study Lenses (v2)
TODO: 
- Once lenses2 is available as an npm package, update this Module with instructions on how to install the tool globally via `npm install --global lenses2`
---

![](./assets/lenses2.jpg)

**Setting up Study Lenses (v2) on your System**

1. Clone the `study-lenses` repository from this link: [ https://github.com/in-tech-gration/study-lenses/](https://github.com/in-tech-gration/study-lenses/){:target="_blank"}.
    - `git clone git@github.com:in-tech-gration/study-lenses.git`

2. Change to the `study-lenses` directory and install all dependencies:

    - Run: `cd study-lenses`
    - Then: `npm install` (or `npm i` for short)

3. Checkout to the `lenses2` branch and run the `npm link` command to make this available globally:

    - `git checkout lenses2`
    - `npm link` 
    - (or if you're on a Mac/Linux, you'll perhaps need `sudo npm link`)

4. Check that `study-lenses` have been successfully installed on your system by running the following command:

    - `lenses2 --version` or `lenses2 -v`

**Explore Study Lenses**

5. Watch the [**WDX180 - Study Lenses Guide**](https://youtu.be/5uCJBiQ7MkA){:target="_blank"} video to get familiar with the `study-lenses` tool.
- **Duration:** 12min