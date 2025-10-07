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
  const { products, setProducts } = useContext(ProductsContext);
  const [ keyword, setKeyword ] = useState("");
  // const { counter, setCounter } = counterState;
  // const chatValue = useContext(ChatContext);
  return (
    <section>
      <h2>Sibling: {counterState.counter}</h2>
      <p>Number of products: {products.length}</p>
      <form onSubmit={(e)=>{
        e.preventDefault();
        const newProduct = e.target.new_product.value;
        // TODO: Add newProduct ONLY if it does not already exist:
        // localStorage.setItem("products","Some string value");
        setProducts( currentProducts => [...currentProducts, newProduct]);
        e.target.reset();
      }}>
        <input type="text" name="new_product" placeholder="Enter a new product" />
        <button>Add new product</button>
        <p>
          <label htmlFor="search">Search Product(s)</label>
          <input type="search" name="search" id="search" onChange={(e)=>{
            setKeyword(e.target.value);
            // indexOf(), contains()
          }} />
        </p>
      </form>
      <p>Searching for: {keyword}</p>
      {/* TODO: Why did filter() was not working? */}
      {/* TODO: First filter, then map */}
      {/* TODO: Make this case insensitive */}
      {products.map( product =>{
        console.log(product, keyword);
        if ( product.includes(keyword) ){
          return <p key={product}>{product}</p>
        }
        return null;
      })}
      {/* {products.map( product =>{
        return <p key={product}>{product}</p>
      })} */}
    </section>
  );
}
const AppContext = createContext();
// AppContext.jsx
// export AppContext
// import AppContext
const ChatContext = createContext();
// Input?
const ProductsContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  const [ products, setProducts ] = useState(["Laptop","Smartphone", "iPad"]);
  const counterState = {
    counter,
    setCounter,
  };
  return (
    <section>
      <h1>App</h1>
      <AppContext.Provider value={counterState}>
        <Parent />
        <ProductsContext.Provider value={{products,setProducts}}>
          <Sibling />
        </ProductsContext.Provider>
      </AppContext.Provider>
    </section>
  );
}

export default App;
