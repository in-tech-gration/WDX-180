---
title: Week 25 | Advanced JavaScript: Web APIs
---

<hr class="mb-0">

<h1 id="{{ Week 25-Advanced JavaScript: Web APIs | slugify }}">
  <span class="week-prefix">Week 25 |</span> Advanced JavaScript: Web APIs
</h1>

<img src="assets/pexels-cottonbro-6804077.jpg" />

<div class="week-controls">

  {% assign week_num = 25 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 25 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 10/4/2025</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 25 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 25 - Day 1 | Web Storage APIs -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 25 - Day 1</span> | Web Storage APIs</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Web Storage APIs
  - **Part 2:** Web Storage APIs

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week25/assets/day01/code/index.html){:target="_blank"} and all other assets [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week25/assets){:target="_blank"}.

  **Lecture Notes:**

  - The `localStorage` is a read-only property* of the window interface
    - Treat it as read-only.
    - It’s part of the `window.localStorage`
  - `localStorage` data has no expiration time (unlike cookies)
  - `sessionStorage`: data gets cleared when the page session ends — that is, when the page is closed
  - CRUD Methods for `localStorage` and `sessionStorage`: Create/Read/Update/Delete
    - `setItem()` (C)
    - `getItem()` (R)
    - `setItem()` (U)
    - `remoteItem()` (D)
  - _"key(): "The order of keys is user-agent defined, so **you should not rely on it**."_
  - Web Storage APIs work on per-[origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin){:target="_blank"} and per-browser context.

  **Questions:**

  - _Is it safe to store sensitive/private information in the browser’s storage?_
    - You have to be very careful about the things that you store.
    - Avoid saving sensitive/private information.
    - Try encrypting things before you save them.
  
  - _Will there be an error message when the storage limit is reached?_
    - Yes, we’ll get an error.name `QuotaExceededError`

  **References & Resources:**

  - Recommended Study: [Using the Web Storage API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API){:target="_blank"} 
    - Make sure not to miss out on the [Responding to storage changes with the StorageEvent](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent){:target="_blank"} section of the documentation.
  - [https://developer.mozilla.org/en-US/docs/Web/API/Storage/key](https://developer.mozilla.org/en-US/docs/Web/API/Storage/key){:target="_blank"}

  - [List of Web APIs at MDN](https://developer.mozilla.org/en-US/docs/Web/API){:target="_blank"} 

  - [Introduction to web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction){:target="_blank"} 

  - [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API){:target="_blank"}

  - Window: [the `localStorage` property](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage){:target="_blank"} 

  - [Web Storage (interface)](https://developer.mozilla.org/en-US/docs/Web/API/Storage){:target="_blank"}

<!-- Summary -->

### Exercises

  Become a discoverer: Experiment and find out how localStorage works with different `origins` and when accessed from different browsers:
    - Configure [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer){:target="_blank"} to use a different default port (5500 => 5501) and see what happens with the localStorage. Also try both ports on a different browser. To find the setting, search for `liveServer.settings.port` in VSCode Settings, Extensions.

  **Coding challenge #1:** Use `localStorage` to keep track of a web page’s horizontal position so that when the user reloads or opens up the page again, they should be looking at the last section. For this one you’ll have to dig out some other APIs (related to browser scrolling, current cursor height)

  **Coding challenge #2:** Try localStorage with React. You might want to try `useEffect` for running localStorage.

  ```js
  // Read:
  useEffect(()=> { localStorage.getItem() }, []);
  // Read/Write/Update/Remove:
  onClick={()=> localStorage.getItem/setItem/removeItem }
  ```

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week25/progress/progress.draft.w25.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 25 - Day 2 | The Scrum Framework -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 25 - Day 2</span> | The Scrum Framework</h2>
  </summary>

### Schedule

  - **Study the suggested material**

### Study Plan

  According to the [Atlassian](https://www.atlassian.com/agile/scrum){:target="_blank"} website:

  > "Scrum is an agile project management framework that helps teams structure and manage their work through a set of values, principles, and practices. Much like a rugby team (where it gets its name) training for the big game, scrum encourages teams to learn through experiences, self-organize while working on a problem, and reflect on their wins and losses to continuously improve."



  In this module, we are going to explore one of the most common and popular project management frameworks. You will watch a [series of YouTube videos](https://www.youtube.com/playlist?list=PL_PJn_AGUdkMhkAkPKIDBf6ShCgYUOs8Y){:target="_blank"} to familiarize yourself with the Scrum framework and the following related concepts, since chances are that one of the companies or teams you are going to work with will employ this framework:

  - Sprints
  - Sprint Planning 
  - Sprint Reviews
  - Ceremonies
  - Backlog
  - Stand-ups
  - Scrum Roles

  **Suggested material for study and practice:**

  - [1. Scrum Framework in a Nutshell](https://www.youtube.com/watch?v=3VvSyXaH31Y){:target="_blank"} (6min)
  - [2. Product Backlog Refinement in a Nutshell](https://www.youtube.com/watch?v=POpCiEXOWkE){:target="_blank"} (5min)
  - [3. Sprint Planning in a Nutshell](https://www.youtube.com/watch?v=8LizzCzsJQg){:target="_blank"} (4min)
  - [4. Daily Scrum in a Nutshell](https://www.youtube.com/watch?v=MARBZbCw9tA){:target="_blank"} (3min)
  - [5. Sprint Review in a Nutshell](https://www.youtube.com/watch?v=-av0l_vbDs4){:target="_blank"} (2min)
  - [6. Sprint Retrospective in a Nutshell](https://www.youtube.com/watch?v=NeZvHdN1Huo){:target="_blank"} (2min)
  - [7. Scrum In A Nutshell](https://www.youtube.com/watch?v=L_sAo93ASTU){:target="_blank"} (5min)

  - Read the [Manifesto for Agile Software Development](https://agilemanifesto.org/){:target="_blank"} as "Scrum is a subset of Agile. It is a lightweight process framework for agile development, and the most widely-used one." [Source](https://www.cprime.com/resources/what-is-agile-what-is-scrum/){:target="_blank"}

  - [What is scrum and how to get started](https://www.atlassian.com/agile/scrum){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

### Sources and Attributions

  ---



  _Photo by [cottonbro studio](https://www.pexels.com/photo/manager-considering-project-strategy-by-the-task-board-6804077/)_
  
</details>

<hr class="mt-1">

<!-- Week 25 - Day 3 | Web APIs: Geolocation -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 25 - Day 3</span> | Web APIs: Geolocation</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  ![](./assets/chatGPT.geolocation.api.png)

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** The Geolocation API
  - **Part 2:** Combining the Geolocation API with OpenStreet Maps.

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/week25/assets/day03/code){:target="_blank"}

  **Lecture Notes:**

  - `Geolocation API`: a browser API for detecting and tracking the device's location on Earth (geo === earth).
    - Uses two coordinates (think of them as the x and y on a coordinate map) that are called `latitude` and `longitude` (floating point numbers).

  - `Navigator` (or `user-agent`, `User Agent`): the technical term for the Browser. In JS, it is an object: `navigator`.

  **Questions:**

  - How can we find a place/address from latitude/longitude?
    - A: We will use more APIs to get more information about the lat/lon, for example, country, city, address, weather information, etc.
  - Can this geo data be trusted?
    - A: They can be easily changed by the user with geo-spoofing.

  **References & Resources:**

  - [Geolocation (theory)](https://support.zartico.com/what-is-mobile-location-data-and-where-does-it-come-from){:target="_blank"}
  - Geolocation (Browser/Web) API:
    - [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API){:target="_blank"}
    - [Geolocation Interface](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation){:target="_blank"}
    - [getCurrentPosition() method](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition){:target="_blank"}
    - [GeolocationPositionError](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError){:target="_blank"}
    - GeolocationPosition Interface page (check it out)
    - GeolocationCoordinates Interface page (check it out)
  - [Navigator Interface](https://developer.mozilla.org/en-US/docs/Web/API/Navigator){:target="_blank"}
  - Open Source map: OpenStreetMaps
    - Alternatives are the commercial services: Google Maps, Bing, MapBox, etc.
  - Leaflet.js (open-source JS library for working with OpenStreetMaps)
    - Search for ['leaflet js quickstart’](https://leafletjs.com/examples/quick-start/){:target="_blank"}
  - How to trick [Google Maps](https://www.youtube.com/shorts/redHm15OJAA){:target="_blank"}
  - DevTools => Command Palette (Ctrl/Cmd+Shift+P) => Search for "Show Sensors"
  - [https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition){:target="_blank"}
  - Lat/Lon to Address and vice versa. Also, [more info](https://geocode.maps.co/){:target="_blank"} about the location

<!-- Summary -->

### Exercises

  - Find more about the GeolocationCoordinates.accuracy property
  - Share your cool ideas for using the Geolocation API (and combining it with other APIs, services or technologies)
    - Air Pollution APIs, weather data, traffic, criminality rates, etc.
    - Find info about beaches and display them (e.g. red for not good for swimming, green, etc.)
    - Places to check for these kinds of data and APIS
      - Ministries of X
      - Google
      - [OpenData](https://data.europa.eu/data/datasets/dat-163-en?locale=en){:target="_blank"}
      - [GeoData Greek Government](http://geodata.gov.gr/en/dataset?groups=inland-waters){:target="_blank"}
      - [Eydap OpenData](https://opendata.eydap.gr/opendata.php?lang=EN){:target="_blank"} 
  - Give this repo a star: [https://github.com/Leaflet/Leaflet](https://github.com/Leaflet/Leaflet){:target="_blank"}
  - [Leaflet JS Tutorial 101](https://www.youtube.com/playlist?list=PLGHe6Moaz52PUNP4DtIshALDogSURIlYB){:target="_blank"}
  - Maps: Google Maps, Bing, TomTom, MapBox, etc.
    - [https://www.tomtom.com](https://www.tomtom.com){:target="_blank"}
  - [3D leaflet views](https://osmbuildings.org/?lat=52.52056&lon=13.40971&zoom=16.8&tilt=30){:target="_blank"}
  - Grab the bounding box from the geocode API and draw a bounding box around some address
  - [Search an address and show it on the map](https://geocode.maps.co/search?q=address&api_key=api_key){:target="_blank"}
  - [Get info from lat/lon](https://geocode.maps.co/reverse?lat=latitude&lon=longitude&api_key=api_key){:target="_blank"}
  - [Hardcoded lat/lon to countries](https://github.com/eesur/country-codes-lat-long/blob/master/country-codes-lat-long-alpha3.json){:target="_blank"}
  - Learn more about Geohashing: 
    - [What is Geohashing?](https://www.pubnub.com/guides/what-is-geohashing/){:target="_blank"}
    - [Geohash](https://www.youtube.com/watch?v=UaMzra18TD8){:target="_blank"}: Deep Intuitive Understanding in under 7 Minutes
    - [Geohashing Algorithm](https://www.youtube.com/watch?v=6uhSpLjGLgo){:target="_blank"} | Proximity Search Based Applications | System Design

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week25/progress/progress.draft.w25.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


### Extra Resources

  ---



  _Photo by []()_


<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 25 - Day 4 | DOM API: Text & Comment Nodes -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 25 - Day 4</span> | DOM API: Text & Comment Nodes</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan


  Watch the lecture (40min) to learn more about DOM Nodes
  and specifically about the `Text` and `Comment` Nodes.

  - Video: [Let's learn JavaScript: DOM Nodes and other furry creatures](https://www.youtube.com/watch?v=p2o0fXSzVWc){:target="_blank"}

  [![](./assets/DOM.Nodes.Text.png)](https://www.youtube.com/watch?v=p2o0fXSzVWc){:target="_blank"}

  - Study:
    - [DOM Node Interface](https://developer.mozilla.org/en-US/docs/Web/API/Node){:target="_blank"}
    - [Text Node Interface](https://developer.mozilla.org/en-US/docs/Web/API/Text){:target="_blank"}
    - [Comment Node Interface](https://developer.mozilla.org/en-US/docs/Web/API/Comment){:target="_blank"}
    - [Node: nodeType property](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 25 - Day 5 | Media API -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 25 - Day 5</span> | Media API</h2>
  </summary>

### Schedule

  - **Watch the lectures**
  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Your instructor will share the video lectures with you. Here are the topics covered:

  - **Part 1:** Local Storage & Media Web APIs
  - **Part 2:** Media Web API

  Key points:

  - Understand the basics of local storage and its limitations.
  - Learn how to use the media API to control video and audio elements.
  - Use custom HTML and CSS to create a unique interface for video playback.
  - Take advantage of the media API's methods and properties to enhance user experience.
  - Don't rely solely on local storage; consider using server-side storage solutions for more complex applications.

  You can find the lecture code [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week25/assets/day05/code/media.html){:target="_blank"} and the diagrams [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/week25/assets/day05/diagram.png){:target="_blank"}.

  **Questions:**

  - What about iframe-embedded videos or audio, e.g. Vimeo, YouTube?  
    - In this case you have to use the Vimeo/YouTube/\* APIs.  
    - The Media API is **only available** for `<video>` and `<audio>` directly accessible through the web page. **The Media API won’t work with `<iframe>`**.

  **References & Resources:**

  - [**Slides**](https://kostasx.github.io/EventLoop/frontend/html5/apis.html#/2/10){:target="_blank"}  
  - [**The `<video>` element**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video){:target="_blank"}  
  - [**HTMLMediaElement**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement){:target="_blank"} **Interface**  
  - **iframe vs video/audio:**  
    - `<video>` and `<audio>` are HTML elements to play a video or audio file  
      - You are loading a video or audio file(s)  
    - `<iframe>` is an HTML element to load a while web page  
      - You are loading basically an HTML file through a URL.  
  - **What makes https secure?**  
    - It’s **not** the port (443) but the other technologies\* that are working alongside the port and the server. *SSL/TLS.  
  - [MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types){:target="_blank"}: *"A media type (also known as a Multipurpose Internet Mail Extensions or MIME type) is a standard that indicates the nature and format of a document, file, or assortment of bytes."*  
  - How to change LiveServer port: search in settings for: **"liveServer.settings.port"**  
    - **settings.json:**

    ```json
      {
        "settings": {
          "liveServer.settings.port": 5555
        }
      }
    ```

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!



---

<!-- COMMENTS: -->
<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>