console.clear();

const form = document.querySelector("form#countries_form")

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  console.log(event.type);
}
// Helper functions:
function getOne(selector){
  return document.querySelector(selector);
}
function getAll(selector){
  return document.querySelectorAll(selector)
}
const { clear, log } = console;
// task: find a way to check our input with the list of countries
// task: We need a list of countries
// task: We need to store the countries we found
// An object with countries with true/false
const countries = {
  greece: false,
  romania: true
}
const paths = getAll("svg path");
const selectedCountry1 = "greece";
const selectedCountry2 = "gree";
const selectedCountry3 = "Greece";
// log(paths); // NodeList
function checkCountryInput( countryName ){
  // Input check: casing
  // => "GREECE", "Greece", "greece", "greecE"
  // input.toLowerCase() === list.toLowerCase()
  const countryNameLowercase = countryName.toLowerCase();

  // Task: reduce the iterations with Array some()
  // or for loop and break;
  paths.forEach( path => {
    const className = path.getAttribute("class");
    const nameProp = path.getAttribute("name");
    // includes()? Is it useful?
    // log({ className, nameProp });
    const hasSameClassName = (className !== null) && countryNameLowercase === className.toLowerCase();
    const hasSameName = nameProp && countryNameLowercase === nameProp.toLowerCase();

    try {
      if ( hasSameClassName || hasSameName ){
        log("(1) Found " + countryName);
        path.style.fill = "green";
        // Instead of styling the path, we style all paths
        // with nameProp or className???
      }
      // if ( className !== null ){
      //   if ( countryNameLowercase === className.toLowerCase()){
      //     log("(1) Found " + countryName);
      //     path.style.fill = "green";
      //   }
      // }
      // if ( countryNameLowercase === nameProp.toLowerCase() ){
      //   log("(2) Found " + countryName);
      //   path.style.fill = "green";
      // }
      // log(nameProp.toLowerCase() === countryNameLowercase);

    } catch(e){
      const cName = path.getAttribute("name");
      // log(e);
      // log(path, cName);
      // if ( path.className === "" ){
      //   log(123)
      // }

      // Problem: names have spaces, classes do not
      // try {
      //   path.classList.add(cName);
      //   log(path);
      // } catch(e){
      //   log("Error 2", e, path);
      // }

    }
    // log(path); // class and/or id,name
  })

}
// checkCountryInput( selectedCountry1 );


// querySelectorAll("svg path") => get the name from "name" property or class
const input = getOne("#country_name");
// Event: (x) submit (x) change (+) input 
input.addEventListener("input", function handleCountryInput(event){
  // console.log("input", event.type);
  const countryTyped = event.target.value;
  // console.log({ countryTyped });
  checkCountryInput( countryTyped );
  // Task: when we find a country, reset the form
});





















// const china = document.querySelector("svg path#AF");
// const china = document.querySelector("svg path[name='Afghanistan']");
// Some countries do NOT HAVE an id or name, they have
// a class="COUNTRY NAME"
// We can also have more than one country path!!! China, Russian Federation
// console.log(china.constructor);
// china.style.fill = "red"; // IRL: Bad practice!
// china.setAttribute("fill","blue"); 
// china.setAttribute("stroke","green"); 
// china.setAttribute("stroke-width","22px"); 