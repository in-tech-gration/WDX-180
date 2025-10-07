/* eslint-disable */
import "./App.css"
import { useState } from "react";
function Parent({ counterState }){
  return (
    <section className="fancy">
      <h2>Parent</h2>
      <hr/>
      <Child counterState={counterState} />
      <Child counterState={counterState} />
    </section>
  )
}
function Child({ counterState }){
  const { counter, setCounter } = counterState;
  return (
    <section>
      <h3>Child: {counter}</h3>
      <button onClick={()=>{
        setCounter( prevCounter => prevCounter + 1 );
      }}>+</button>
    </section>
  )
}
function Sibling({ counter }){
  return <section><h2>Sibling: {counter}</h2></section>
}

function App() {
  const [ counter, setCounter ] = useState(0);
  const counterState = {
    counter,
    setCounter
  }
  return (
    <section>
      <h1>App</h1>
      <Parent counterState={counterState} />
      <Sibling counter={counter} />
    </section>
  );
}

export default App;
