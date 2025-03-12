import React from "react";
console.clear();
let panelRenderCount = 0;
let appRenderCount = 0;

function Panel(){
  console.log("Panel()::render #" + (++panelRenderCount));
  return <div>Panel</div>
}

function App() {
  console.log("App()::render #" + (++appRenderCount));
  const [ counter, setCounter ] = React.useState(0);
  // color, counterB
  const [ counterB, setCounterB ] = React.useState(0);
  const [ color, setColor ] = React.useState("black");
  const [ state, setState ] = React.useState({
    color: "black",
    counter: 0,
    counterB: 0
  });

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        // setCounter(counter+1);
        setInterval(function tick(){
          console.log("tick()", counter, counter + 1);
          // setCounter(counter+1); // Stale state, won't work
          setCounter(function(prevState){ // Proper solution to keep up the current state
            return prevState + 1;
          })
        }, 1000)
      }}>Update counter</button>
      <Panel />
    </div>
  );
}

export default App;
