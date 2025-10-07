import Cart from "./Cart";
import Menu from "./Menu";
import { useState } from "react";
console.clear();
import { ContainerContext } from "./ContainerContext";

export default function Container() {
  const [ state, setState ] = useState(0);
  return (
    <section>
      <h2>Container: {state}</h2>
      <ContainerContext.Provider value={{ state, setState }}>
        <Menu />
        <Cart />
      </ContainerContext.Provider>
    </section>
  );
}
