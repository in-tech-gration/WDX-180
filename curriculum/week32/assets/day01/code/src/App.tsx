import { useState, useRef } from 'react'
import calcTotalPrice from "./lib/utils";

function App() {

  const input = useRef<HTMLInputElement|null>(null); // input === undefined
  const [totalPrice,setTotalPrice] = useState<number|null>(null);
  // eslint-disable-next-line
  const [error, setError] = useState<string|null>(null);
  // 'SetStateAction<null>' this is the TS signature for the useState setter type

  const handlePriceUpdate = ()=>{
    const inputEl = input.current; // inputEl ~ HTMLInputElement or null
    // Check for !null
    if ( inputEl ){
      // inputEl === HTMLInputElement
      const price = inputEl.value;
      try {
        const total = calcTotalPrice(Number(price));
        setError(null);
        setTotalPrice(total);
      } catch(e){
        console.log("Dear developer...",e);
        setError("Wrong price value, make sure that it's a number");
      }
    } else {
      inputEl; // === null
    }
  }

  return (
    <>
      <h1>eShop</h1>
      <label>
        Enter Price: 
        {/* Expected values for ref are: HTMLInputElement | null */}
        <input ref={input} type="text" placeholder="Enter price" />
      </label>
      {/* Challenge: <p>Price: </p> */}
      { totalPrice && <p>Total price: {totalPrice} </p> }
      <button onClick={handlePriceUpdate}>Calculate total price + tax (25%)</button>
      { error && <p style={{ color: "red" }}>{error}</p>}
    </>
  )
}

export default App
