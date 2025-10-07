// @ts-check

example:{

  const user = {
    firstName: "Ada",
    lastName: "Lovelace"
  }
  // document.body.innerHTML += "<h2>Subtitle</h2>";
  
  user.firstName = 42;
  // Type 'number' is not assignable to type 'string'.ts(2322)
  
  document.body.addEventListener("click", ()=>{
    document.body.innerHTML += user.firstname.toUpperCase();
    document.body.innerHTML += "<h2>Subtitle Changed</h2>";
  });

}

JSDoc_basics: {

  /** @type {number} */
  let one, two, three; // number, any, any!?

  /** @type {number} */
  let unknown; // any * => any type: boolean, string, number, etc.
  /** @type {string} */
  let name;
  name = "JavaScript";
  /** @type {number} */
  let age;
  age = 29;
  /** @type {boolean} */
  let isCool;
  isCool = true;

  // <div id="game">    => Element
  // <canvas id="game"> => Element => HTMLCanvasElement

  /** @type {HTMLCanvasElement | null} */
  let canvas;
  canvas = document.querySelector("canvas");
  // const ctx = canvas.getContext("2d");

  if ( canvas !== null ){
    const ctx = canvas.getContext("2d");
    if ( ctx !== null ){
      ctx.fillRect(0,0,100,100);
    }
  }

  /**
   * @type {string}
   */
  let userInput;

  document.body.addEventListener("click", ()=>{
    userInput = parseInt("String").toString();
  })

}

JSDoc_Objects:{

  // Make an object property optional: put a ?, e.g. prop?: value
  // Make an Array type explicit: Array<any> === Array
  // or, Array<string>, Array<number | string>

  /**
   * @type {{ price: number, name: string, mem: number, isAluminum?: boolean, vendors?: Array<string> }}
   */
  let product;

  product = {
    price: 42,
    name: "Macbook",
    mem: 32,
    // isAluminum: true,
    vendors: [ "Apple", "Google" ]
  }

  delete product.vendors;
  // delete product.mem;

}

JSDoc_Templates: {

  // Make a @prop option: @prop {type=} propName

  /**
   * @typedef {Object} PlatformUser
   * @prop {string} email
   * @prop {number} password
   */

  /** @type {PlatformUser} */
  let user;
  /** @type {PlatformUser} */
  let user2;

  user = {
    email: "@",
    password: 1234
  }
  user2 = {
    email: "2",
    password: 5678
  }
  // user2.pasword;

  /**
   * @typedef {Array<PlatformUser>} PlatformUsersList  
   */  

  /** @type PlatformUsersList */
  let users;

  // users = [ user, user2, 42, false ];
  users = [ user, user2 ];

}

JSDoc_Function: {

  /**
   * @param {number} numA 
   * @param {number} numB 
   * @returns {number}
   */
  function add( numA, numB ){
    return numA + numB;
  }

  // Fail:
  add(40,"2");
  add(40,"2").toFixed();
  add(40,2).toUpperCase();

  // Correct:
  add(40,2);
  add(40,2).toFixed();

}