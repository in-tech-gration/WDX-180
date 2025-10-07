/* eslint-disable */
import "./App.css";
import { useState, createContext, useContext } from "react";
function Parent() {
  return (
    <section>
      <h2>Parent</h2>
      <hr />
      <Child />
      <Child />
    </section>
  );
}
function Child() {
  const { counter, setCounter } = useContext(AppContext);
  return (
    <section>
      <h3>
        Child: {counter + " "} 
        <button onClick={() => {
          setCounter( counterState => counterState + 1 );
        }}>+</button>
        <button onClick={() => {
          setCounter( counterState => counterState - 1 );
        }}>-</button>
      </h3>
    </section>
  );
}
// import AppContext from "./context/AppContext.js";
function Sibling() {
  const counterState = useContext(AppContext);
  console.log(counterState);
  // const { counter, setCounter } = counterState;
  // const chatValue = useContext(ChatContext);
  return (
    <section>
      <h2>Sibling: {counterState.counter}</h2>
    </section>
  );
}
const AppContext = createContext();
// AppContext.jsx
// export AppContext
// import AppContext
const ChatContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  const counterState = {
    counter,
    setCounter,
  };
  return (
    <section>
      <h1>App</h1>
      <AppContext.Provider value={counterState}>
        <Parent />
        <Sibling />
      </AppContext.Provider>
    </section>
  );
}

export default App;
