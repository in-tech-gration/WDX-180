import { useState } from "react";
console.clear();

// ADVANCED: Routes
// /products/101, /products/102, /products/103
// /country-maps/greece, /country-maps/turkey, ...

// PRACTICE: These should be placed in a pages/ folder and imported
function Home(){
  return <h1>Home</h1>
}
function Contact(){
  return <h1>Contact</h1>
}
function Gallery(){
  return <h1>Gallery</h1>
}

function App() {
  const [pathname, setPathname] = useState(location.pathname);
  return (
    <div>

      <button onClick={()=>{
        history.replaceState(null, "", "/");
        setPathname("/");
      }}>Home</button>

      <button onClick={()=>{
        history.replaceState(null, "", "/contact");
        setPathname("/contact");
      }}>Contact</button>

      <button onClick={()=>{
        history.replaceState(null, "", "/gallery");
        setPathname("/gallery");
      }}>Gallery</button>
      <p>Current pathname: {pathname}</p>

      {/* Ideas: maybe use a switch "statement" somewhere and replace the code below with just one expression. */}

      {/* if in JSX is &&, if/else is ternary?: */}
      {/* if pathname === "/" render Home */}
      { pathname === "/" && <Home /> }
      {/* if pathname === "/gallery" render Gallery */}
      { pathname === "/gallery" && <Gallery />}
      {/* if pathname === "/contact" render Contact */}
      { pathname === "/contact" && <Contact />}

      {/* PRACTICE: How to deal with unknown pathnames? aka 404 */}

      <footer>Copyright</footer>

    </div>
  );
}

export default App;
