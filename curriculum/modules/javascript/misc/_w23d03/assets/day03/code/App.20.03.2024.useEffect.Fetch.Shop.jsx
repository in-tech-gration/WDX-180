/* eslint-disable */
import { useEffect, useState } from "react";
console.clear();
function Shop({ productsData }){
  return (
    <>
      <h2>Shop</h2>
      <Menu />
      <Products productsData={productsData} />
    </>
  )
}
function Menu(){
  return (
    <>
      <h2>Menu</h2>
    </>
  )
}
function Cart(){
  return (
    <>
      <h2>Cart</h2>
    </>
  )
}
function Products({ productsData }){
  return (
    <>
      <h2>Products</h2>
      {/* Loop over productsData and display a <Product /> */}
      {productsData.map( product =>{
        // return <Product product={product} />;
        return <Product src={product.image} key={product.id} id={product.id}>{product.title}</Product>
      })}
      {/* <Product />
      <Product /> */}
    </>
  )
}
function Product({ id, src, children }){
  return (
    <div>
      <article>{children} ({id})</article>
      <img width="100px" src={src}/>
    </div>
  )
}
const URL = "https://fakestoreapi.com/products";
function App() {
  console.log("App()");
  const [ productsData, setProductsData ] = useState([]);
  console.log({ productsData });
  useEffect(function runOnceAfterDOMUpdate(){
    console.log("Component just updated!");
    fetch(URL)
    .then( res => res.json())
    .then( products => {
      // console.log(productsData, products);
      // console.log(productsData === products);
      setProductsData(products);
    })
    .catch( error =>{
      console.log(error);
    })
  },[]);
  return (
    <div>
      <h1>Products length: {productsData.length}</h1>
      <button onClick={()=>{
        const newProduct = {id: 999, title: "Laptop" }
        // productsData.push(newProduct); // NEVER!!!
        setProductsData([...productsData, newProduct]);
        // setProductsData( prevProducts =>{
        //   return [...prevProducts, newProduct];
        //   // return prevProducts.concat(newProduct);
        // });
      }}>Add Product</button>
      <Shop productsData={productsData} />
      <Cart />
    </div>
  );
}

export default App;
