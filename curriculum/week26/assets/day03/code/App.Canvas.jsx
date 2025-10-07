import { useRef, useEffect } from 'react'
import './App.css'

function App() {
  
  const canvas = useRef();
  console.log({ canvas: canvas.current });
  
  useEffect(()=>{
    console.log({ canvas: canvas.current });
    // https://wavez.github.io/react-hooks-lifecycle/
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = 200;
    canvas.current.height = 200;
    ctx.fillRect(0,0,100,100);
    ctx.fillRect(100,100,100,100);
    ctx.fillStyle = "white";
    ctx.fillRect(100,0,100,100);
    ctx.fillRect(0,100,100,100);
    
  },[]);

  return (
    <>
      <canvas ref={canvas} style={{ border: "2px solid deeppink" }}></canvas>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
