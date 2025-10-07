import { ContainerContext } from "./ContainerContext";
import { useContext } from "react";

export default function Cart() {
  const { state, setState } = useContext(ContainerContext);
  return (
    <section onClick={()=> setState( p => p+1 )}>
      <h2>Cart: { state }</h2>
    </section>
  );
}
