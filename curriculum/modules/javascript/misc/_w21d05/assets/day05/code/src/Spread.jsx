import './App.css'
console.clear();
// const Profile = ()=>{
// }

function Avatar(props){
  console.log("Avatar()", props);
  return (
    <p>Avatar</p>
  )
}

// Spread tricks:
const obj = { a: 1, b:2, c:3, d:4 }
const { a, b, ...other } = obj;

function Profile(props){ // <= props === undefined
  // console.log("Profile()", props);
  // PropTypes?
  // console.log(props.color, props.bg);
  const obj = { a: 1, b: 2}
  return (
    <div className="card">
      <h2>Profile</h2>
      <p>Color: {props.color}</p>
      <p>Background: {props.bg}</p>
      {/* <Avatar text="Title" color={props.color} bg={props.bg} /> */}
      <Avatar text="Title" {...props} {...obj} />
      {/* {...props} => { color: "white", bg: "black" } */}
    </div>
  )
}
function App() { // <App />
  console.log("App()");
  return (
    <>
      <h1>Vite + React</h1>
      {/* {Profile({ color: "white", bg: "black" })} */}
      <Profile color="white" bg="black" /> {/* Profile(...) */}
      
      {/* <Profile color="orange" bg="gray"></Profile>  */}
      {/* Profile(...) */}
    </>
  )
}

export default App
