console.clear();
const message = {
  from: "Sender Name",
  to: "Recipient Name",
  dateTime: "Right now",
  message: "Hello!",
  groupChat: "Birthday Party Group"
}
const product = {
  name: "Printer X",
  price: 999,
  color: "black",
  image: "https://domain.com/printerx.jpg",
  rating: 4
}
let langJS = {
  name: "JavaScript",
  inventor: "Brendan Eich",
  birthDate: 1995,
  // Object Property (method) with function as a value (declared with 'function')
  getAge,
  getName

}
const langJavaScript = langJS;
// langJS = null;
// langJS.getAge();

const langPHP = {
  name: "PHP",
  inventor: "Rasmus Lerdorf",
  birthDate: 1994,
  getAge,
  getName
}

langJavaScript.getAge(); // this => langJavaScript
langPHP.getAge(); // this => langPHP

function getAge(){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return console.log( currentYear - this.birthDate );
}
function getName(){
  console.log(this.name);
}

somethingsAboutThis:{

  break somethingsAboutThis;
  
  console.clear();
  function findThis(){
    console.log("this:",this)
  }
  const obj1 = { lucky: 42, find: findThis }
  // Rule to replace 'this': find the object that calls the method:
  // Check on the left side of the .
  obj1.find();

  const obj2 = { 
    whatever: "whatever", 
    getObj: function(){
      console.log(this);
    }
  }
  // obj2.getObj();

  const obj3 = { noidea: "?" }
  obj3.findThis = findThis;
  obj3.findThis();
  
}

const langPython = {
  name: "Python",
  inventor: "Guido van Rossum",
  birthDate: 1989,
  getAge,
  getName
}

langPython.getAge();
langPython.getName();
langJavaScript.getName();
langPHP.getName();

function getBirthDate(){
   console.log(this.birthDate)
}

const LangToolset = {
  // Set of tools, shared across all object
  getAge: getAge,
  getName: getName,
  getBirthDate,
  showAlert: function(){
    alert();
  }
  // coolFn: function()....
}
LangToolset.coolFn = function(){
  console.log("Cool!", this);
}

function LangConstructor(name, inventor, birthDate){
  return {
    // Individual unique values for each object created:
    name,
    inventor,
    birthDate,
    ...LangToolset
  }
}

const langHaskell = LangConstructor("Haskell", "Simon Peyton Jones", 1990);
langHaskell.getAge();
langHaskell.getName();
// langHaskell.showAlert();
// langHaskell.coolFn()