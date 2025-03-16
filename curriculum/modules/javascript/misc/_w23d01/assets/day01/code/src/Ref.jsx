import { useState, useRef } from 'react'
import fancify from './libs/fancify.js'
// API: fancify( HTMLElement );

export default function Ref(){
  const [ counter, setCounter ] = useState(0);
  const myRef = useRef("initial value");
  // console.log("Ref()", myRef, counter);
  // const [ total, setTotal ] = useState(counter * 1.23);
  let local = 10;
  const total = counter * 1.23;
  const heading = useRef(null);
  console.log(heading);
  if ( heading.current ){
    heading.current.style.background = "red";
  }
  return (
    <main>
      <h1 ref={heading}>useRef</h1> 
      <button onClick={()=>{
        console.log(heading);
        if ( heading.current ){ 
          fancify(heading.current);
        }
      }}>Update H1</button>
      {/* Change the style of the H1 and add an attribute class */}
      <p>State (counter): ${counter}</p>
      <p>Total: ${total}</p>
      <p>Local (local): {local}</p>
      <p>Ref: {myRef.current}</p>
      <button onClick={()=>{
        local += 10;
        myRef.current = Math.random();
        console.log("local:",local, myRef);
        setCounter(counter+1);
        // console.log(counter);
        // setTotal((counter+1) * 1.23);
      }}>Updating stuff</button>
    </main>
  )
}
