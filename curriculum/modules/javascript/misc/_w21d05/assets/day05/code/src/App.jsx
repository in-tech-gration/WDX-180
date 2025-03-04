import "./App.css";
import "./Typography.scss";
import reactLogo from "./assets/react.png";
// console.log(reactLogo);
import reactSVGLogo from "./assets/react.svg";
// console.log(reactSVGLogo);
import bgImg from "./assets/background.jpg";

// Media: Images + SVG
// background-image: url()
// <img src="" />
// Fetch API method... 
function Avatar(){
  // .avatar-component {
  //   background-image: url(./public/image.jpg)
  //   background-image: url("./public/image.jpg")
  // }
  const isOpen = new Date().getHours() <= 16; // Until 16:00
  // We need: between 08:00 and 16:00
  // const isOpeningHours = ?
  const style = {
    backgroundImage: `url("${ isOpen ? bgImg : reactSVGLogo }")`
    // backgroundImage: "url(" + bgImg + ")"
  }
  return (
    <div className="avatar-component" style={style}>
      <p>Avatar</p>
      <img width="200px" src={reactLogo} />
      <img width="200px" src={reactSVGLogo} />
    </div>
  )
}

function ConditionalRendering(){

  const isHeads = Math.random() > 0.5;
  const heads = <p>It&apos;s Heads!</p>;
  const tails = <p>It&apos;s Tails</p>;
  // One solution: Use statements and full JS inside ...JS
  let something;
  if ( isHeads ){
    something = <p>HEADS</p>
  } else {
    something = <p>TAILS</p>
  }

  // When to use ? ternary => if / else
  // When to use && => if

  return (
    <div>
      <h3>Conditional Rendering</h3>

      {/* if CONDITION => SHOW_THIS  */}
      { (isHeads && <p>---HEADS---</p>) }

      {/* Be carefull with falsy values */}
      { 0 && "Whatever" }

      {/* if isHeads then <p>It&apos;s Heads!</p> else <p>It&apos;s Tails</p> */}
      {/* {something} */}
      { isHeads ? <p>We're open</p> : <p>We're closed</p> }
      {/* if CONDITION ? then SOMETHING : else SOMETHING_ELSE */}

      {/* Avoid this: */}
      {/* { isHeads ? "HEADS" : Math.random() > 0.5 ? "then" : "else" } */}

    </div>
  )
}

// Inline Styling: <div style="color:red; background:white">...
function App() {
  const isHeads = Math.random() > 0.5; // <= flipping the coin
  console.log(isHeads ? "Heads" : "Tail");
  // const itIsHeads ? "" : "", itIsTail ? "" : ""
  const styling = {
    // color: red;
    color: "blue",
    // background: white
    background: "white",
    // font-size: 1rem => converted into camelCase notation
    fontSize: "1rem",
  };
  const className = isHeads ? "heads" : "tail";
  return (
    <div className="app-component" style={styling}>
      <ConditionalRendering />
      <div
        className={className}
        style={{
          display: isHeads ? "block" : "none",
        }}
      >
        Heads
      </div>
      <div
        style={{
          // display: !isHeads ? "block" : "none",
          display: isHeads ? "none" : "block",
        }}
      >
        Tail
      </div>
      <h1
        style={{
          fontFamily: "Arial",
          textDecoration: "underline",
        }}
      >
        Vite + React
      </h1>
      <Avatar />
      <p>Lorem</p>
      <p>
        <label htmlFor="email">Enter Email:</label>
        <input type="text" id="email" />
      </p>
    </div>
  );
}

export default App;
