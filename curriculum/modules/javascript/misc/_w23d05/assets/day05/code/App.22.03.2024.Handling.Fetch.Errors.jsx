import { useEffect, useState } from "react";
import "./App.css";
console.clear();

function App() {
  const [ data, setData ] = useState([]);
  const [ error, setError ] = useState(null);
  const [isLoading, setLoading ] = useState(false);

  useEffect(function runOnceAfterDOMUpdate(){

    async function getData(){
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        // const res = await fetch("./products.json");
        // console.log(res.status); // 200?
        // Extra checks here for successful 200 or 404 statuses
        // Example: if status is 404, don't res.json()
        // If everything works OK in here, and you don't get
        // an Error thrown, do the checks yourselves and explicitly throw an Error
        console.log(res);
        // TODO: Look for the syntax to get the content-type:
        for (const [ headerKey, headerValue ] of res.headers.entries()) {
          if ( headerKey === "content-type" ){
            const contentType = headerValue;
            if ( contentType !== "application/json" ){
              console.log(contentType);
              // TODO: Edge case to take care of: application/json; chartset=utf-8
              throw new Error("The response should be a JSON file, instead got an " + contentType);
            }
          }
        }

        const userData = await res.json();
        setData(userData);
      } catch(e){ // Executes on error thrown inside try
        console.log("Error:", e);
        setError(e.toString());
      } finally { // Executes always
        setLoading(false);
      }
    }
    getData();

  },[]);

  if ( isLoading ){
    return <p>Loading...</p>
  }
  if (error ){
    return <p style={{ color: "red" }}>Something went wrong {error} </p>
  }

  return (
    <div>
      <h1>Hello World!</h1>
      {data.map( user =>{
        return <p key={user.id}>{user.name}, {user.email}</p>
      })}
    </div>
  );
}

export default App;

/*
What if the products.json is back successfully but "not in the format that we want"?

A: ?

JSON RESPONSES: BE RESPONSIBILITY

users/

application/json, 200
SUCCESS: {
  data: [...],
  error: null 
}

application/json, 404
ERROR: {
  data: null,
  error: "Message filled error codes and other details"
}

if (error){
  // Handle error 
  setError(error);
} else {
  // Handle success
}
*/