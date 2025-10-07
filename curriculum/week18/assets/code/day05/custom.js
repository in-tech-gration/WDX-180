// How to create a custom HTML element
// 1) Create a class that extends HTMLElement
class FancyTitle extends HTMLElement {
  // 2) Define the constructor
  constructor() {
    // 3) Call the HTMLElement's constructor() via super()
    super()
    // console.log(this);
    // console.dir(this);
    this.style.padding = "1 rem";
    this.style.border = "4px solid deeppink";
    this.style.background = "lightgray";
    this.style.display = "block";
    this.addEventListener("click", function() {
      alert("Hey!");
    });
  }
}

// customerElements.define( TAG NAME, CLASS NAME )
// For example: <fancy-title>, TAG NAME === "fancy-title"
// <cool-input> === TAG NAME "cool-input"
customElements.define("fancy-title", FancyTitle);

class YouTube extends HTMLElement {
  constructor() {
    super()
    const vid = this.getAttribute("vid");
    if (this.getAttribute("vid") === null || this.getAttribute("vid") === "") {
      return;
    }
    this.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${vid}?si=UT2kSbAWdQlowYf3"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>`
  }
  // on button
  connectedCallback() {
    console.log("Another <you-tube> element on the DOM! Yayyy!");
    if (this.getAttribute("vid") === null || this.getAttribute("vid") === "") {
      const vid = prompt("What's the video ID?");
      this.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${vid}?si=UT2kSbAWdQlowYf3"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>`
    }
  }
  // shutdown button (place to clean things up)
  disconnectedCallback() {
    console.log(this, "was removed from the page");
  }
}

customElements.define("you-tube", YouTube);

document.querySelector("button")
  .addEventListener("click", function() {
    document.querySelector("you-tube").remove();
  });

class CustomInput extends HTMLInputElement {
  constructor() {
    super()
    this.style.border = "none";
    this.style.width = "100%";
    this.style.color = "red";
  }
  connectedCallback() {
    alert();
  }
}
customElements.define("custom-input", CustomInput, { extends: 'input' });