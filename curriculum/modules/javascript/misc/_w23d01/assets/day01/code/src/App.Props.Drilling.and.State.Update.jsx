/* eslint-disable */
import { useState } from 'react'
console.clear();

// 1) Props Drilling
// 2) How to share state from a Child to a Parent Component
function Child({ counter, setter }){
  // 2) We need access to the setCounter in order to update
  // the state in the <App/> Component
  function updateState(){
    setter(counter + 1);
  }
  return (
    <>
    <h3>Child: {counter}</h3>
    <button onClick={updateState}>Update parent state</button>
    </>
  );
}
function Parent(props){
  console.log(props);
  return (
    <>
    <h2>Parent</h2>
    <Child counter={props.counter} setter={props.setter} />
    <Child counter={props.counter} setter={props.setter} />
    </>
  );
}
function App() {
  const [ counter, setCounter ] = useState(0);
  return (
    <>
      <h1>React</h1>
      <Parent counter={counter} setter={setCounter} />
    </>
  )
}

export default App
