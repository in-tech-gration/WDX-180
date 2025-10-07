import { useContext } from "react"
import { ContainerContext } from "./ContainerContext";

export default function Menu(){
  const { state, setState } = useContext(ContainerContext);
  return (
    <section onClick={()=> setState(state+1)}>
      <h2>Menu: {state}</h2>
    </section>
  )
}