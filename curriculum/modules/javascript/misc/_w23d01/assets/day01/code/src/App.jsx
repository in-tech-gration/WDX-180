/* eslint-disable */
import { useState } from 'react'
console.clear();

// PRACTICE: Try to turn this into a shopping cart
// Ideas: update shopping cart with number of items added 
// Update the total price of the shopping cart
function Child({ counter, updateState }){
  const [ childCounter, setChildCounter ] = useState(0);
  return (
    <>
    <h3>Parent counter: ${counter} / Child counter: ${childCounter}</h3>
    <button onClick={()=> setChildCounter(childCounter+1)}>
      Update child counter
    </button>
    <button onClick={()=> updateState(childCounter)}>
      Update parent state
    </button>
    </>
  );
}
function Parent({ counter, updateState }){
  return (
    <>
    <h2>Parent</h2>
    <Child counter={counter} updateState={updateState} />
    <Child counter={counter} updateState={updateState} />
    </>
  );
}
function App() {
  const [ counter, setCounter ] = useState(10);
  function updateState(value){
    if ( !Number.isInteger(value)){
      return false;
    }
    setCounter( counter + value );
  }
  return (
    <>
      <h1>Total: ${counter}</h1>
      <Parent counter={counter} updateState={updateState} />
    </>
  )
}

export default App
