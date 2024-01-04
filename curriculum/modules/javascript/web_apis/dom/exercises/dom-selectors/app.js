/* AUDIO SETUP */
let audio = document.querySelector("#sound");
audio.volume = 1;

/* HELPER FUNCTIONS */
let tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
function replaceTag(tag) {
  return tagsToReplace[tag] || tag;
}
function safe_tags_replace(str) {
  return str.replace(/[&<>]/g, replaceTag);
}

/* SELECTORS */
let $element;
let $browser         = document.querySelector(".browser-mockup");
let $target          = document.querySelector("#target");
let $source          = document.querySelector("#source");
let $selector        = document.querySelector("#selector");
let $next            = document.querySelector("button#next");
let $selectorWrapper = document.querySelector("#selector_wrapper");
let $exec            = document.querySelector(".number b");
let $numberWrapper   = document.querySelector(".number");
$selector.focus();

// INITIALIZE CONFETTI (FROM: EXERCISE PACK)
wdx_exercisePack.confettiInit();

/* EXERCISE DATA */
let exercises = [
  {
    type: "h1",
    doc: true,
    message: "<h1>Heading 1</h1>",
    textContent: "Heading 1",
    selector: '.querySelector("...?")',
    solution: '.querySelector("h1")'
   },
  {
    type: "div",
    id: "getme",
    doc: true,
    message: "<div id='getme'>...</div>",
    textContent: "Get Me!",
    selector: '.getElementById("...?")',
    solution: '.getElementById("getme")'
   },
  {
    type: "div",
    message: "<p class='second'>Second</p>",
    innerHTML: "<p>First</p><p class='second'>Second</p>",
    selector: '.querySelector',
    solution: '.querySelector("p.second")'
  },
  {
    type: "div",
    message: "<span>message</span> inside #parent",
    innerHTML: "\n <span>A</span>\n <div id='parent'>...<span>message</span></div>\n",
    selector: '.query?',
    solution: '.querySelector("#parent span")'
  },
  {
    type: "section",
    message: "All <li> elements",
    innerHTML: "<ul>\n <li>1</li>\n <li>2</li>\n <li>3</li>\n</ul>",
    selector: '.querySelectorAll("...?")',
    solution: '.querySelectorAll("li")'
   },
  {
    type: "section",
    message: "All tags named 'p' inside section",
    innerHTML: "\n <p>One</p>\n <p>Two</p>\n <p>Three</p>\n",
    selector: '.getElementsByTagName("")',
    solution: '.getElementsByTagName("p")'
   },
  {
    type: "div",
    doc: true,
    message: "Get all elements with class 'child'",
    innerHTML: "\n <span class='child'>Child 1</span>\n <span class='child'>Child 2</span>\n <span class='child'>Child 3</span>\n",
    selector: '.getElementsByClassName("...?")',
    solution: '.getElementsByClassName("child")'
   }
];
let counter = 0;
$exec.textContent = counter+1;
function handleInput(elObj){
  // let solved = eval( solution);
  // console.log(elObj);
  let isDoc = elObj.doc;
  solution = elObj.solution;
  let browserSelector = 'document.querySelector(".browser-mockup")';
  if ( isDoc ){
    browserSelector = "document";
  }
  let solved = eval( browserSelector + solution);
  
  try {
    let student = eval("$element = " + browserSelector + this.value);
    if ( student && solved ){
      // NodeList Check:
      let passed = true;
      let isNodeList = false;
      let isHTMLCollection = false;
      if ( ( student instanceof NodeList ) && student.length  ){
         isNodeList = true;
      }
      if ( ( student instanceof HTMLCollection ) && student.length  ){
         isHTMLCollection = true;
      }
      if ( isNodeList ){
        student.forEach(function(el,idx){
          if ( el !== solved[idx] ){
            passed = false;
          }
        });
      } 
      else if ( isHTMLCollection ) {
        for ( let counter = 0; counter < student.length; counter++){
          if ( student[counter] !== solved[counter] ){
            passed = false;
          }
        }
      } 
      else if ( student !== solved ) {
        passed = false;
      }
      if ( !passed ) return false;
      audio.play();
      if ( isNodeList ){
        $element.forEach(function(el){
          el.style.background = "limegreen";
        });
      } 
      else if ( isHTMLCollection ){
        for ( let counter = 0; counter < student.length; counter++){
          student[counter].style.background = "limegreen";
        }
      } else {
        $element.style.background = "limegreen";
      }
      $next.style.background = "limegreen";
      $target.style.background = "limegreen";
      $selectorWrapper.style.borderColor = "limegreen";
      // Display Confettis:
      try { window.wdx_exercisePack.confetti(); } catch (e){
        console.error(e);
      }
      $selector.removeEventListener( "keyup", handleInput );
    }
  } catch(e){
   // console.log("Error:", e.message);
  }
}
function createEl( obj ){
  $element = null;
  $target.style.background = "lightgray";
  $selectorWrapper.style.borderColor = "coral";
  $next.style.background = "tomato";

  let $el = document.createElement( obj.type );
  obj.id && $el.setAttribute( "id", obj.id );
  obj.class && $el.setAttribute( "class", obj.class );
  obj.innerHTML && ( $el.innerHTML = obj.innerHTML );
  obj.textContent && ( $el.textContent = obj.textContent );
  obj.message && ( $target.textContent = obj.message );
  $browser.innerHTML = "";
  $browser.appendChild( $el );
  $source.innerHTML = safe_tags_replace($el.outerHTML);
  $selector.value = obj.selector;
  $selector.addEventListener("keyup",handleInput.bind( $selector, obj));
}
createEl( exercises[counter] );
/* NEXT */
$next.addEventListener("click", function(){
  counter++;
  if ( exercises[counter] ){
    $exec.textContent = counter+1;
    createEl( exercises[counter] );
    if ( !exercises[counter+1]){
      $next.style.opacity = 0;
    }
  }
});
document.querySelector("form").addEventListener("submit", e =>{
  e.preventDefault()
});
const $soundEl = document.querySelector("#sound-btn");
let soundIsOn = true;
$soundEl.addEventListener("click", e =>{
  if ( soundIsOn ){
    $soundEl.innerText = "Sound is Off";
    $soundEl.style.background = "red";
    audio.volume = 0;
    soundIsOn = false;
  } else {
    $soundEl.innerText = "Sound is On";
    $soundEl.style.background = "yellowgreen";
    audio.volume = 1;
    soundIsOn = true;
  }
});
