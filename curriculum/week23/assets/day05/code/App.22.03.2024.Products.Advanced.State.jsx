import { useState } from "react";
console.clear();
const productsInitial = [
  {id:1, name: "Macbook" }, 
  {id:2, name: "Android Phone" }
]
export default function ReducerState(){

  const [ products, setProducts ] = useState(productsInitial)
  function addProduct({ productData }){
    setProducts( currentProducts =>{
      // always return a new state value!!!
      return [productData, ...currentProducts]
    })
  }
  function removeProduct({id}){
    setProducts( currentProducts =>{
      // I want to return a new "filtered" array of products
      // that do not include a product with id === "id" (3)
      return currentProducts.filter( product => {
        // TODO: Is this code safe for flight?
        // THIN: Do I need some extra checks?
        return product.id !== id // true or false
      })
    })
  }
  return (
    <main>
      <h1>Reducer State</h1>
      {products.map( product =>{
        return <p key={product.id}>{product.name}</p>
      })}
      <button onClick={()=>{
        addProduct({ productData: { id: 3, name: "Gameboy" }})
        }}>Add Product</button>
      <button onClick={()=>{
        removeProduct({ id: 3 });
      }}>Remove Product 3</button>
    </main>
  )
}