/* eslint-disable */
// @ts-nocheck
import { useState, useRef } from 'react'
import calcTotalPrice from "./lib/utils";

function App() {

  const input = useRef(); // => { current: Element }
  const [totalPrice,setTotalPrice] = useState(null);

  const handlePriceUpdate = ()=>{
    // Get the input value
      // - Get access to the HTML input element
      // - Get access to the HTML input element's value property
      const inputEl = input.current;
      const price = inputEl.value;
        // - valueOf()?
    // Calculate the total
    const total = calcTotalPrice(price);
    // Display the total
    setTotalPrice(total);
  }

  return (
    <>
      <h1>eShop</h1>
      <label>
        Enter Price: 
        <input ref={input} type="number" placeholder="Enter price" />
      </label>
      {/* Challenge: <p>Price: </p> */}
      { totalPrice && <p>Total price: {totalPrice} </p> }
      <button onClick={handlePriceUpdate}>Calculate total price + tax</button>
    </>
  )
}

export default App
