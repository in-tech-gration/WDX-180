import { useState, useEffect } from 'react'

let reRenders:number = 0;

const paragraph:JSX.Element = <p>Paragraph</p>

type FC = ()=> JSX.Element

const Crazy:FC = function(){
  return <p>Hiiiiii!</p>
}
const Widget:React.FunctionComponent = function(){
  return <div>Widgy widget!</div>
}

function ExplicitStateTypes(){

  type stateGetter = number; // count
  type stateSetter = React.Dispatch<React.SetStateAction<number>> // setCount

  // Think like functions: <> => ()
  // React.Dispatch(
  //   React.SetStateAction(
  //     number
  //   )
  // )

  const [count, setCount]:[stateGetter,stateSetter] = useState(0);

  return <div>{ count }</div>

}

type TitleProps = {
  title: string
  size: number
  debug?: boolean
}

function Title(props:TitleProps){
  const title = props.title;
  const size = props.size;

  return <h2 style={{ fontSize: size + "px" }}>{ title }</h2>
}

function App() {

  const [count, setCount] = useState<string|number>(0);

  useEffect(()=>{

  },[])

  function updateCounter():void{
    console.log(++reRenders);
    setCount( count => Number(count) + 1 ); 
    // setCount( "2" );
    // return undefined // OK
    // return "undefined"; // Error
  }

  // returns JSX.Element
  return (
    <>
      <Title title="Hello!!!" size={24} />
      {/* <Title title="Hello!!!" size={24} debug={true} /> */}
      <div>
        Counter: {count}
        <button onClick={updateCounter}>Update Counter</button>
      </div>
      {paragraph}
      <p>Rerendered: {reRenders} times</p>
      <Crazy />
      <Widget />
    </>
  )
}

export default App
