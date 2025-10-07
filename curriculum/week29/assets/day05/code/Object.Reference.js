/*
- React Hook Form
  - 1) You create forms using React 
  - 2) The library stores all the form data as a state variable (object)

  <input name="email">
  <input name="firstname">
  <input name="lastname">
  <input name="password">
  <input name="number">
  <input name="name">
*/
const formState = {
  email: "kostas@yahoo.com",
  firstname: "",
  password: "",
  lastname: ""
  address: {
    // name: "",
    // number: 42,
    city: ""
  },
  products: [
    { name: "A", id: 100 },
    { name: "B", id: 101 }
  ]
}

// - 3) When you want to submit the form, the library gives you an onSubmit function:

function onSubmit(data){
  // data === formState contains all the form data
  // WRONG WAY:
  // const newData = { ...data } // This will not give me a "deep copy". Rather it will return a "shallow copy".
  // delete newData.address.name;
  // delete newData.address.number; // I was mutating the original data (address object)
  // newData.products.filter(...)

  // BETTER WAY:
  const newData = structuredClone(data);
  delete newData.address.number;
  delete newData.address.name;
  
  fetch( URL, { body: {...newData, version: 2, createdAt: new Date() } }).then().catch();

  
}
