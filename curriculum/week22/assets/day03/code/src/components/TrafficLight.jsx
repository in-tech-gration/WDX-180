import "./TrafficLight.css";
import { useState } from "react";

export default function TrafficLight(){
  console.log("TrafficLight():render");
  const [ color, setColor ] = useState("red");
  const [ counter, setCounter ] = useState(0);
  let normalVariableCounter = 0;
  function onClick(){
    console.log(color); // Before set
    const nextStateValue = Math.random();
    console.log(nextStateValue);
    normalVariableCounter += 1;
    setColor(nextStateValue);
    setCounter(counter+1);
  }
  function nextLight(){

  }
  return (
    <div>
      <p>Current color: {color}</p>
      <p>Normal var: {normalVariableCounter}</p>
      <p>State counter: {counter}</p>
      <div id="red" className="sign active"></div>
      <div id="orange" className="sign"></div>
      <div 
        id="green" 
        className={ 
          //  "sign"  + "" or "sign active"
          "sign" + ( Math.random() > 0.5 ? " active" : "" ) 
          }
        ></div>
      <button 
        onClick={nextLight} 
        onMouseEnter={function(){
          // console.log("Hovered over the button...")
        }}>Next State</button>
    </div>
  )
}

// TrafficLight State Transition Logic:
let currentState = 0; 
const colors = [ "red", "orange", "green" ]; 
function transition(){
  const nextState = currentState + 1;
  if ( nextState < colors.length ){
    currentState = nextState;
  } else {
    currentState = 0;
  }
  const actualColor = colors[currentState];
  console.log(actualColor);
  return actualColor;
}
// TrafficLight State Transition Logic
