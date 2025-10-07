/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from 'react-dom/client'

// 1) App: is all about Props drilling and update parent state from child
// import App from './App.jsx'
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// 2) All about Refs
// import Ref from './Ref.jsx'
// ReactDOM.createRoot(document.getElementById('root')).render(<Ref />)

// 3) All* about useEffect
let renderCount = 0;
function Effects(){
  console.log("Effects() #", ++renderCount);
  const [ counter, setCounter ] = useState(0);
  // useEffect( FUNCTION, [DEPENDENCIES] );
  useEffect(function anotherEffectAfterDOMUpdate(){
    console.log("2nd side effect, run once");
    return function cleanUp(){
      // Let me come back to this if needed...
    }
  }, []); // An empty array [] here implies just run once

  useEffect(function runEffectAfterDOMUpdate(){
    console.log("runEffectAfterDOMUpdate()", counter);
    const intervalId = setInterval(()=>{
      console.log("tick");
    }, 1000);
    return function previousRenderCleanUp(){
      console.log("previousRenderCleanUp()", counter, intervalId);
      clearInterval(intervalId);
    }
  });
  return (
    <main>
      <h1>useEffect</h1>
      <p>Counter: {counter}</p>
      <button onClick={()=>{
        setCounter(counter+1);
      }}>Update Counter</button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Effects />
  // </React.StrictMode>
)